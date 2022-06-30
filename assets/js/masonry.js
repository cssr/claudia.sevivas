$(document).ready(function() {
  // Init Masonry
  var $grid = $('.grid').masonry({
    gutter: 10,
    horizontalOrder: true,
    itemSelector: '.-item',
  });
  // Layout Masonry after each image loads
  $.imagesLoaded().progress( function() {
    $.masonry('layout');
  });
});
