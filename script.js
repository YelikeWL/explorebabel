$(document).ready(function () {
    $('.highlight-card').click(function () {
        $('.modal-highlight').show();
        $('.modal-highlight img').attr('src', $(this).find('img').attr('src'));
        $('.modal-highlight label').text($(this).find('label').text());
        $('.modal-highlight p').text($(this).find('p').text());
    });

    $('.modal-highlight').click(function () {
        $(this).hide();
    })
});