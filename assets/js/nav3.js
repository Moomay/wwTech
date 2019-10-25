$(document).ready(function () {
    // เมื่อ doc full loal
    var $menu = $(".nav__menu"); //var menu = document.getElementByClass("nav__menu") or document.querrySelector(".nav__menu")
    var $menu_a = $("a", $menu); //querry tag a in .nav_menu
    var id = false; 
    var sections = [];
    // หยั่งว่ะ
    var hash = function (h) {
        if (history.pushState) {
            history.pushState(null, null, h);
        } else {
            location.hash = h;
        }
    };
    // เมื่อกด
    $menu_a.click(function (event) {
        event.preventDefault();
        $("html, body").animate(
            {
                //scrollTop: $($(this).attr("href")).offset().top - $(".nav").height() //scroll ไปที่  (attr->href) ใน nav__menu ของ tag a
                scrollTop: $($(this).attr("href")).offset().top
            },
            {
                duration: 700,
                complete: hash($(this).attr("href")) 
            }
        );
    });
    //พ่น menu_a ทั้งหมดลง section
    $menu_a.each(function () {
        sections.push($($(this).attr("href")));
    });
// เมื่อ scroll
    $(window).scroll(function (event) {
        var scrolling = $(this).scrollTop() + $(this).height() / 5;
        var scroll_id;
        //หา section ที่เราอยู่
        for (var i in sections) {
            var section = sections[i];
            if (scrolling > section.offset().top) {
                scroll_id = section.attr("id"); // เราอยู่ที่ section นี้นะ 
            }
        }
        if (scroll_id !== id) { // มันไม่ใช่ section เดิมนะ
            id = scroll_id; //เปลี่ยนสิค้าบ
            $menu_a.removeClass("isactive"); // ส่วนที่ลบออก
            $("a[href='#" + id + "']", $menu).addClass("isactive"); // ส่วนที่ทำให้มัน active
        }
    });
});
