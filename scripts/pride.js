$(document).ready( function () {
    let init_pos = $(window).scrollTop();
    let hide_elems = $(".init-hidden");
    let elems = $(".bg-pride");

    if (init_pos <= 0) { // if we're at the top, hide the body content
        hide_elems.each(function () {
            $(this).addClass("invisible")
                .addClass("opacity-0");
        });
        elems.each(function () {
            $(this).addClass("slide-in");
        });
    }
    else { // if we're not at the top of the page, don't hide it
        hide_elems.removeClass(".init-hidden");
        $(".pride-wrapper").addClass("bg-pride-full"); // display pride flag
        $(".bg-pride-0").addClass("d-none");
    }
});

$(window).scroll(function () {
    // moves bg with scrolling
    let top = $(window).scrollTop();
    $(".pride-wrapper").css("top",-top);

    // displays text if the user is not at the top
    if (top > 0) {
        $(".init-hidden").removeClass("invisible").removeClass("opacity-0").removeClass(".init-hidden");
    }
});

function hidepride() {
    document.getElementsByClassName("pride-wrapper")[0].classList.remove("bg-pride-full");
    document.getElementsByClassName("bg-pride-0")[0].classList.remove("d-none");
}