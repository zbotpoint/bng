$(document).ready(function () {
    let tools = new Set();
    let base_form_url = 'https://docs.google.com/forms/d/e/1FAIpQLSeuOQg5Qp_rNLLfaJgIbxokIJ6MWzhf4Ef2iivCISCKp1rWqQ/viewform?usp=pp_url&entry.1754869149=';

    document.querySelectorAll('button.btn.btn-2:not(#submitter)').forEach(item => {
        item.addEventListener('click', event => {
            let elem = $(event.target).is("button") ? $(event.target) : $(event.target).parent();
            let tool = elem.parent().children('p').text();
            if (elem.hasClass('disabled')) {
                elem.removeClass('disabled').children("span").text("Book").focusout();
                tools.delete(tool);
                if (tools.size === 0) {
                    $('.booking').addClass('disabled').prop('disabled',true);
                }
            }
            else {
                elem.addClass('disabled').children("span").text("Booked!").focusout();
                tools.add(tool);
                $('.booking').removeClass('disabled').prop('disabled',false);
            }
        })
    })
    document.getElementById("submitter").addEventListener('click', () => {
        $("#submit-url").prop('href',base_form_url+encodeURIComponent(Array.from(tools).join('; ')))[0].click();
    })
});