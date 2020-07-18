$(document).ready(function () {
    var tools = new Set();
    var base_form_url = 'https://docs.google.com/forms/d/e/1FAIpQLSeuOQg5Qp_rNLLfaJgIbxokIJ6MWzhf4Ef2iivCISCKp1rWqQ/viewform?usp=pp_url&entry.1754869149=';

    document.querySelectorAll('button.btn.btn-2:not(#submitter)').forEach(item => {
        item.addEventListener('click', event => {
            var elem = $(event.target).is("button") ? $(event.target) : $(event.target).parent();
            var tool = elem.parent().children('p').text();
            if (elem.hasClass('disabled')) {
                elem.removeClass('disabled').children("span").text("Book").blur();
                tools.delete(tool);
                if (tools.size === 0) {
                    $('#submitter').addClass('disabled').prop('disabled',true);
                }
            }
            else {
                elem.addClass('disabled').children("span").text("Booked!").blur();
                tools.add(tool);
                $('#submitter').removeClass('disabled').prop('disabled',false);
            }
        })
    })
    document.getElementById("submitter").addEventListener('click', event => {
        $("#submit-url").prop('href',base_form_url+encodeURIComponent(Array.from(tools).join('; ')))[0].click();
    })
});