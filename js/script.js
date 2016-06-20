var $body;

$(function ($) {

    $body = $('body');

    $body.delegate('.selectBox', 'mouseenter', function () {

        var firedEl = $(this);

        if (firedEl.closest('.selectBox').hasClass('disabled')) return false;

        firedEl.addClass('opened');

    }).delegate('.selectBox', 'mouseleave', function () {

        var firedEl = $(this);

        firedEl.removeClass('opened');

    }).delegate('.selectItem', 'click', function () {

        var firedEl = $(this);

        firedEl.closest('.selectBox').removeClass('opened').find('.selectVal').html(firedEl.html());

        return false;

    });


    $('.instantGroupItem').on ('click', function () {
        $('.instantGroupItem').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    initTabs();

});


function initTabs() {

    $('.tabItem').on ('click', function () {
        var firedEl = $(this), tabContext = $(firedEl.closest('.tabSwitcher').attr('data-tab-context'));

        firedEl.addClass('active').siblings().removeClass('active');

        tabContext.find('.tabUnit').eq(firedEl.index()).show().siblings().hide();

        return false;
    });

}