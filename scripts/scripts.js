// cache the navigation links 
var $navigationLinks = $('ul.navbar-nav > li > a');
// cache (in reversed order) the sections
var $sections = $($("section").get().reverse());

// map each section id to their corresponding navigation link
var sectionIdTonavigationLink = {};
$sections.each(function() {
    var id = $(this).attr('id');
    sectionIdTonavigationLink[id] = $('ul.navbar-nav > li > a[href=\\#' + id + ']');
});

// throttle function, enforces a minimum time interval
function throttle(fn, interval) {
    var lastCall, timeoutId;
    return function () {
        var now = new Date().getTime();
        if (lastCall && now < (lastCall + interval) ) {
            // if we are inside the interval we wait
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                lastCall = now;
                fn.call();
            }, interval - (now - lastCall) );
        } else {
            // otherwise, we directly call the function 
            lastCall = now;
            fn.call();
        }
    };
}

function highlightNavigation() {
    // get the current vertical position of the scroll bar
    var scrollPosition = $(window).scrollTop();

    // iterate the sections
    $sections.each(function() {
        var currentSection = $(this);
        // get the position of the section
        var sectionTop = currentSection.offset().top;
        // if the user has scrolled over the top of the section
        if (scrollPosition >= sectionTop) {
            // get the section id
            var id = currentSection.attr('id');
            // get the corresponding navigation link
            var $navigationLink = sectionIdTonavigationLink[id];
            // if the link is not active
            if (!$navigationLink.parent().hasClass('active')) {
                // remove .active class from all the links
                $navigationLinks.parents().removeClass('active');
                // add .active class to the current link
                $navigationLink.parent().addClass('active');
            }
            // we have found our section, so we return false to exit the each loop
            return false;
        }
    });
}
/*
function focus_home() {
    $('.nav-item').removeClass("active").eq(0).addClass("active");
}
function focus_about() {
    $('.nav-item').removeClass("active").eq(1).addClass("active");
}
function focus_faqs() {
    $('.nav-item').removeClass("active").eq(2).addClass("active");
}
function focus_contact() {
    $('.nav-item').removeClass("active").eq(3).addClass("active");
}*/

$(window).scroll( throttle(highlightNavigation,500) );

$(document).ready(highlightNavigation());

// if you don't want to throttle the function use this instead:
// $(window).scroll( highlightNavigation );