window.onload = function () {
    var element = document.getElementById('video');
    element.muted = "muted";
}
$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items:1,
        nav: false
      },
      600:{
        items:2,
        nav: false
      },
      1000:{
        items:3,
        nav: false
      }
    }
  });
// academics==================
  $('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true, 
    items:4,
    autoplay:2000
})

