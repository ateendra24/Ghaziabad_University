$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".navbar").addClass("sticky");
            document.getElementById("logo").style.width = "60px";

        } else {
            $(".navbar").removeClass("sticky");
            document.getElementById("logo").style.width = "100px";
        }
        if ($(document).scrollTop() > 200) {
            $(".about_heading").addClass("animate");
            $(".about_content").addClass("animate");
            $(".column").addClass("animate");
        }

        if ($(document).scrollTop() > 800) {
            $(".courses_heading").addClass("animate");
            $(".course_content").addClass("animate");
            $(".course_img").addClass("animate");
        }

        if ($(document).scrollTop() > 900) {
            $(".gallery_heading").addClass("animate");
        }
    });
});


function open() {
    var element = document.getElementById("mobile_menu");
    element.classList.add("open");
}
