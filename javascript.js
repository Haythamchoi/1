
  $(window).on("scroll", function() {
    if$(window).scrollTop() {
      $('nav').addClass('black');
    }
    else {
      $('nav').removeClass('black');
    }
  });


function initmap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:52.5206, lng: 13.4098},
    scrollwheel: false,
    zoom:8
  });
};
