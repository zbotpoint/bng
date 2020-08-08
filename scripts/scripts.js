
function getViewport () {
    const width = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
    )
    if (width <= 576) return 'xs'
    if (width <= 768) return 'sm'
    if (width <= 992) return 'md'
    if (width <= 1200) return 'lg'
    return 'xl'
}

function collapse() {
    if (window.matchMedia("screen and (max-width:768px)").matches) {
        $("button.navbar-toggler").click();
    }
}

$(document).ready(function () {
    if (getViewport() === 'sm' || getViewport() === 'xs') return;
    document.querySelectorAll('.faq-body p,.faq-body-dusted p').forEach( item => {
        let a = $(item).addClass("faq-hidden").prev().prev();
        a.text("+ "+ a.text());
    });
    document.querySelectorAll('.faq-body a,.faq-body-dusted a').forEach(item => {
        item.addEventListener('click', event => {
            let a = $(event.target);
            var p = $(event.target).next().next();
            if (p.hasClass("faq-hidden")) {
                a.text("−"+a.text().slice(1));
                p.removeClass("faq-hidden");
            }
            else {
                a.text("+"+a.text().slice(1));
                p.addClass("faq-hidden");
            }
            event.preventDefault();
        })
    });
});
