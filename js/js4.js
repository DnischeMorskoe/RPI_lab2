let isValidName = false, isValidEmail = false, isValidPhNumber = false;
formName = sessionStorage.getItem('current_form');
if (formName != null) {
    showModalWin(formName);
    user_name.value = sessionStorage.getItem('user_name');
    email.value = sessionStorage.getItem('email');
    phone_number.value = sessionStorage.getItem('ph_number');
    validateAll(true);
}
button1 = document.getElementById("button1");
button2 = document.getElementById("button2");
button3 = document.getElementById("button3");
button4 = document.getElementById("button4");
button1.addEventListener("click", () => makeOrder("form1"));
button2.addEventListener("click", () => makeOrder("form2"));
button3.addEventListener("click", () => makeOrder("form3"));
button4.addEventListener("click", () => makeOrder("form4"));

window.addEventListener("unload", function() {
    this.sessionStorage.setItem('user_name', user_name.value);
    this.sessionStorage.setItem('email', email.value);
    this.sessionStorage.setItem('ph_number', phone_number.value);
});

function makeOrder(formName) {
    isDataSent = sessionStorage.getItem(formName);
    if (isDataSent) {
        createTextForm1('Order has already been made');
        setTimeout(deleteMessage1, 5000);        
    } else {
        showModalWin(formName);
    } 
}

function showModalWin(formName) {   
    darkLayer = document.createElement('div'); 
    
    createForm();
    [].forEach.call( document.querySelectorAll('.tel_num'), function(input) {
        var keyCode;input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+375 (__) ___-__-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        
    
      });

    sessionStorage.setItem("current_form", formName);
    darkLayer.classList.add('shadow'); 
    document.body.appendChild(darkLayer); 
    document.body.classList.add('stop-scrolling');

    closeButton = document.querySelector('.close_form');
    closeButton.onclick = closeForm;

    sendButton = modalWin.querySelector('.send_button');

    user_name = document.getElementsByName('user_name')[0];
    email = document.getElementsByName('email')[0];
    phone_number = document.getElementsByName('phone_number')[0];

    user_name.addEventListener("blur", () => validateName(true));
    email.addEventListener("blur", () => validateEmail(true));
    phone_number.addEventListener("blur", () => validatePhNumber(true));

    sendButton.onclick = sendData;  
}

function validateAll(active) {
    return (validateEmail(active) & validateName(active) & validatePhNumber(active));
}
function closeForm() {
    darkLayer.parentNode.removeChild(darkLayer); 
    modalWin.parentNode.removeChild(modalWin);
    document.body.classList.remove('stop-scrolling');
    delete sessionStorage.current_form;
    delete sessionStorage.user_name;
    delete sessionStorage.phone_number;
    delete sessionStorage.email;
    return false;
}

function sendData() {
    if (validateAll(false)) {
        createTextForm('Ordered successfuly');
        sessionStorage.setItem(sessionStorage.getItem('current_form'), true);      
        setTimeout(() => {
            deleteMessage();
            closeForm();
        }, 5000);
    }   
}

function deleteMessage() {
    modalWin.removeChild(darkLayer1);    
    modalWin.removeChild(node);
}

function createTextForm(textMessage) {    
    darkLayer1 = document.createElement('div'); 
    modalWin.appendChild(darkLayer1); 
    darkLayer1.classList.add('shadow');
    darkLayer1.style.position = 'absolute';

    node = document.createElement('div');
    node.classList.add('messageNode');

    text = document.createTextNode(textMessage);

    node.appendChild(text);
    modalWin.appendChild(node);
}

function validateName(active) {
    user_name = document.getElementsByName('user_name')[0];
    let str = user_name.value;
    let regexpName = /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]?$/;
    if (str.search(regexpName) == -1) {
        isValidName = false;
    } else {
        user_name.style.border = '1px solid rgb(231, 231, 231)';
        isValidName = true;
    }    
    if (active && !isValidName) {
        user_name.style.border = '1px solid #ff0036';
    }
    return isValidName;
}

function validateEmail(active) {
    email = document.getElementsByName('email')[0];
    let str = email.value;
    let regexpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    if (str.search(regexpEmail) == -1) {        
        isValidEmail = false;
    } else {
        email.style.border = '1px solid rgb(231, 231, 231)';
        isValidEmail = true;
    }
    if (active && !isValidEmail) {
        email.style.border = '1px solid #ff0036';
    }
    return isValidEmail;
}

function validatePhNumber(active) {
    phone_number = document.getElementsByName('phone_number')[0];
    let str = phone_number.value;
    
    if (str.length<19) {
        isValidPhNumber = false;
    } else {
        phone_number.style.border = '1px solid rgb(231, 231, 231)';
        isValidPhNumber = true;
    }
    if (active && !isValidPhNumber) {
        phone_number.style.border = '1px solid #ff0036';
    }
    return isValidPhNumber;
}

function createForm() {
    modalWin = document.createElement('div');
    modalWin.classList.add("modalwin");

    formHeader = document.createElement('div');
    formHeader.classList.add("find_form_header1");

    p = document.createElement('p');
    textNode = document.createElement('span');

    text = document.createTextNode("registration");
    textNode.appendChild(text); 

    link = document.createElement('a');
    link.classList.add('close_form');

    icon = document.createElement('i');
    icon.setAttribute("class","fa-solid fa-xmark"); 

    link.appendChild(icon);
    textNode.appendChild(link);

    p.appendChild(textNode);

    formHeader.appendChild(p);
    modalWin.appendChild(formHeader);
    block = document.querySelector('.bestseller_block');
    block.parentNode.insertBefore(modalWin, block.nextSibling);

    form = document.createElement('div');
    form.classList.add('form_inputs');

    input1 = document.createElement('input');
    input1.classList.add('find_in');    
    input1.setAttribute("name", "user_name"); 
    input1.setAttribute("placeholder", "Name"); 
    input1.setAttribute("maxLength", 35); 

    input2 = document.createElement('input');
    input2.classList.add('find_in');    
    input2.setAttribute("name", "email"); 
    input2.setAttribute("placeholder", "Email"); 
    input2.setAttribute("maxLength", 35); 

    input3 = document.createElement('input');
    input3.classList.add('find_in');    
    input3.classList.add('tel_num'); 
    input3.setAttribute("name", "phone_number"); 
    input3.setAttribute("placeholder", "Phone number"); 
    input3.setAttribute("maxLength", 35); 
    input3.onfocus = () => {input3.setAttribute("placeholder", 
    "+375(xx)xxx-xx-xx");};

    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(input3);

    modalWin.appendChild(form);

    button = document.createElement('button');
    button.classList.add('send_button');
    text1 = document.createTextNode("send");
    button.appendChild(text1);

    modalWin.appendChild(button);
}

function createTextForm1(textMessage) {
    darkLayer2 = document.createElement('div'); 
    darkLayer2.classList.add('shadow'); 
    document.body.appendChild(darkLayer2); 
    document.body.classList.add('stop-scrolling');

    node = document.createElement('div');
    node.classList.add('messageNode1');

    text = document.createTextNode(textMessage);

    node.appendChild(text);

    block = document.querySelector('.bestseller_block');
    block.parentNode.insertBefore(node, block.nextSibling);
}

function deleteMessage1() {
    darkLayer2.parentNode.removeChild(darkLayer2); 
    node.parentNode.removeChild(node);
    document.body.classList.remove('stop-scrolling');
}






