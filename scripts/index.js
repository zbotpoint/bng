// cache the navigation links
let $navigationLinks = $('ul.navbar-nav > li > a');
// cache (in reversed order) the sections
let $sections = $($("section").get().reverse());

// map each section id to their corresponding navigation link
let sectionIdTonavigationLink = {};
$sections.each(function() {
    let id = $(this).attr('id');
    sectionIdTonavigationLink[id] = $('ul.navbar-nav > li > a[href=\\#' + id + ']');
});

// throttle function, enforces a minimum time interval
function throttle(fn, interval) {
    let lastCall, timeoutId;
    return function () {
        let now = new Date().getTime();
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
    let scrollPosition = $(window).scrollTop();
    let scrn_size = getViewport();
    // iterate the sections
    if (scrn_size === 'xs' || scrn_size === 'sm' || scrn_size === 'md') {
        return;
    }
    $sections.each(function() {
        let currentSection = $(this);
        // get the position of the section
        let sectionTop = currentSection.offset().top;

        if (scrollPosition >= sectionTop-200) { // hehe funny magic number
            // get the section id
            let id = currentSection.attr('id');
            // get the corresponding navigation link
            let $navigationLink = sectionIdTonavigationLink[id];
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

$(window).scroll( throttle(highlightNavigation,100) );

$(document).ready(highlightNavigation());