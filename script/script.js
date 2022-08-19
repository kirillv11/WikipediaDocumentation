$(function() {
    let header = $('header');
    let hederHeight = header.height(); // вычисляем высоту шапки
    $('body').css({
        'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
     });
});