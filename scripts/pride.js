$(document).ready( function () {
    let init_pos = $(window).scrollTop();
    let hide_elems = $(".init-hidden");
    let elems = $(".bg-pride");

    let pw = $(".pride-wrapper");
    let bp1 = $(".bg-pride-1");
    bp1.on("transitionend webkitTransitionEnd", function () {pw.addClass("d-none");});

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
        pw.addClass("d-none");
    }
});

$(window).scroll(function () {
    let top = $(window).scrollTop();
    let pw = $(".pride-wrapper");

    // displays text if the user is not at the top and hides animation divs
    if (top > 0) {
        if (!pw.is(".d-none")) {
            pw.addClass("d-none");
        }
        $(".init-hidden").removeClass("invisible").removeClass("opacity-0").removeClass(".init-hidden");
    }
});

function hidepride() {
    document.getElementsByClassName("pride-wrapper")[0].classList.remove("bg-pride-full");
    document.getElementsByClassName("bg-pride-0")[0].classList.remove("d-none");
}