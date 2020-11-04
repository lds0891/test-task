$(document).ready(function () {
    //Menu mobile
    let menuMobileBtn = $('.header__toogler');
    let menuMobile = $('#menuMobile');
    let menuLink = $('.nav-menu__link');
    // Hamburger menu animation
    menuMobileBtn.on( 'click', function(){
        $(this).toggleClass('open');
    });
    // Menu fade/in out on mobile
    menuMobileBtn.on( 'click', function(e){
        e.preventDefault();
        menuMobile.toggleClass('open');
        $("body").toggleClass('lock-menu')
    });
    // Click menu remove class
    menuLink.on( 'click', function () {
        menuMobileBtn.removeClass('open');
        menuMobile.removeClass('open');
        $("body").removeClass('lock-menu')
    });
    // Drop menu show mobile
    let dropMenuMobile = $('#dropMenu');
    let dropMenuShow = $('#dropMenuShow');
    let dropMenuLink =$('.menu-drop__link');

    dropMenuShow.on( 'click', function () {
        dropMenuMobile.toggleClass('show');
    });
    dropMenuLink.on( 'click', function (e) {
        e.stopImmediatePropagation();
        dropMenuMobile.removeClass('show');
        menuMobileBtn.removeClass('open');
        menuMobile.removeClass('open');
        $("body").removeClass('lock-menu')
    });
    //Slider slick
    $('.slider').slick({
        dots: true,
    });
    //Panel slider fade/in out
    $(".projects-services__btn").on( 'click', function(){
        $("#servicesPanel").slideToggle("slow");
        $(this).toggleClass("active");
        return false;
    });
    //Modal window
    let btnOpen = $('#modalOpen');
    let btnClose = $('#modalClose');
    let modal = $('#modalForm');
    let contentModal =$('.modal-window__body');

    btnOpen.on( 'click', function() {
        modal.fadeIn(900);
        $("body").addClass('lock')
    });
    btnClose.on( 'click', function() {
        modal.fadeOut(900);
        $("body").removeClass('lock')
    });
    $(document).on( 'click', function(e) {
        if ($(e.target).closest(contentModal).length || $(e.target).closest(btnOpen).length)
            return;
        modal.fadeOut(900);
        $("body").removeClass('lock');
        e.stopPropagation();
    });
    //Services slide
    let servicesItem = $('.projects-services__item');
    let countServices = 3;

    $('#servicesNext').on( 'click', function () {
        let currentServices = $('.projects-services__item.active').data('number');
        if(currentServices < countServices){
            currentServices++;
        }else if(currentServices === countServices){
            currentServices = 1;
        }
        $('.projects-services__item.active').removeClass('active');
        servicesItem.map((i,item) => {
            if($(item).data('number') === currentServices){
                $(item).addClass('active');
            }
        });
    });
    $('#servicesPrev').on( 'click', function () {
        let currentServices = $('.projects-services__item.active').data('number');
        if (currentServices === 1) {
            currentServices = countServices;
        }else if ( currentServices > 1) {
            currentServices--;
        }
        $('.projects-services__item.active').removeClass('active');
        servicesItem.map((i,item) => {
            if($(item).data('number') === currentServices){
                $(item).addClass('active');
            }
        })
    });
});