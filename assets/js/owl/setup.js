$('.owl-carousel').owlCarousel({
    loop:true,
    center: true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        400:{
            items: 2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
