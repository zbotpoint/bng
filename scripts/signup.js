// noinspection JSUndeclaredVariable
$(document).ready(function () {
    let $form = $('form');
    $form.on("submit",function (e) {
        if (e) e.preventDefault();
        send($form);
    })
});

function send($form) {
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache: false,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        error: [function(err) { alert("Could not connect to the mailchimp server. Please try again later or email us at blueandgold@skule.ca.\n" + err); }],
        success: function(data) {
            if (data.result !== "success") {
                console.log("Error - email address already signed up.")
            }
        }
    });
    $(".hidden-on-submit").children().addClass("d-none");
    $(".show-on-submit").removeClass("d-none");
}