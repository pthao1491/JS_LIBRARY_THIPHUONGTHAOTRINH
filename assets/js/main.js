$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        customPaging: function(slider, i) {
            return '<button type="button">' + (i + 1) + '</button>';
        }
    });

    AOS.init();

    
    var typed = new Typed('#typed-text', {
        strings: ["Welcome to Our Furniture Store"],
        typeSpeed: 40,  
    });
});