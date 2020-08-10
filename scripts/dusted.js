$(document).ready(function () {
    document.getElementsByClassName("field")[0].addEventListener("keyup",function () {
        if ($(this).val() == '') {
            $(".dusted .btn").addClass("disabled").prop("disabled",true);
        }
        else {
            $(".dusted .btn").removeClass("disabled").prop("disabled",false);
        }
    });
    document.getElementById("submitter").addEventListener('click', event => {
        $("#submit-url").prop('href',"https://docs.google.com/forms/d/e/1FAIpQLScGlUSBhFhqPzr5SYx-1LqE5H4bGlAKYJibGwL3crZHtINCjQ/viewform?usp=pp_url&entry.2007659015="+encodeURIComponent($(".field").val()))[0].click();
    });
});