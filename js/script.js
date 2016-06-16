var $body;

$(function ($) {

    $body = $('body');

    $body.delegate('.selectBox', 'click', function () {

        var firedEl = $(this);

        if (firedEl.closest('.selectBox').hasClass('disabled')) return false;

        firedEl.toggleClass('opened');

        return false;

    }).delegate('.selectItem', 'click', function () {

        var firedEl = $(this);

        firedEl.closest('.selectBox').removeClass('opened').find('.selectVal').html(firedEl.html());

        return false;

    });


});