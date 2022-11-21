$(function(){
$(".hide-1").hide();

$("#plus").click(function(){
    $(".hide-1").slideToggle();
});

$('.slick-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  });


$('.customer-main-card').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:true,
    prevArrow:'<i class="fa fa-arrow-left arrow-left" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-arrow-right arrow-right" aria-hidden="true"></i>',
  });

new VenoBox({
    selector: '.my-video-links',
});
});