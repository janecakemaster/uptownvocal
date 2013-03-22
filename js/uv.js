$(document).ready(function() {

  var sortGallery = function() {
    var liWidth = $('#gallery li').outerWidth(true);
    var sectWidth = $('#members').width();
    var galWidth = Math.floor(sectWidth / liWidth) * liWidth;
    return $('#gallery').css('width', galWidth);
  }

  sortGallery();
  $(window).resize(sortGallery);

});