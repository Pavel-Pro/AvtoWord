$(".burger").click(function() {
    $(".menu").toggleClass("show-menu");
    $(".burger__item").toggleClass("open");
});
$(".gallery__item").click(function() {
    $(this).prependTo(".gelarry");
});

$(".button__item:last-child").click(function() {
    $(".pop-up").addClass("show");
    $(".body").addClass("fixed");
});
$(".popup-close, .form-bg").click(function() {
    $(".pop-up").removeClass("show");
    $(".body").removeClass("fixed");
});
$(".testimonials__items").slick({
    slidesToShow: 2,
    slideToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
    responsive: [{
        breakpoint: 770,
        settings: {
            slidesToShow: 1
        }
    }]
});