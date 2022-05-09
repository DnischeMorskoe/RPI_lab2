jQuery(document).ready(function () {
    var str = sessionStorage.getItem('count_number');
    if (str != null) {
        var name = 'div.main_who_is_creativia_text_body[id="' + str + '"]';
        var element = $(name)
        element.addClass("active").slideDown()
        var name = 'h3.about_creativia_main_menu_card_text[id="' + str + '"]';
        var element = $(name)
        element.css("color", "#ff0036")
        $(element).find("i").removeClass("fa-circle-plus").addClass("fa-circle-minus")
        }

    $(".about_creativia_main_menu_card .about_creativia_main_menu_card_header").click(function () {
        // нажатие на уже развернутый элемент
        if ($(this).next(".main_who_is_creativia_text_body").hasClass("active")) {
            $(this).next(".main_who_is_creativia_text_body").removeClass("active").slideUp()
            $(this).find("i").removeClass("fa-circle-minus").addClass("fa-circle-plus")
            $(this).find("h3").css("color", "#262626")
            sessionStorage.setItem('count_number', 0)

        } else {
            $(".main_who_is_creativia_text_body").removeClass("active").slideUp()
            $(".about_creativia_main_menu_card_text i").removeClass("fa-circle-minus").addClass("fa-circle-plus")
            $("h3").css("color", "#262626")
            $(this).next(".main_who_is_creativia_text_body").addClass("active").slideDown()
            $(this).find("i").removeClass("fa-circle-plus").addClass("fa-circle-minus")
            $(this).find("h3").css("color", "#ff0036")
            var index = Number($(this).next(".main_who_is_creativia_text_body").attr('id'));
            sessionStorage.setItem('count_number', index)
        }
    })
})