// Generated by CoffeeScript 1.3.3
(function() {

  window.onload = function() {
    var galWidth, liWidth, n, sectWidth;
    liWidth = $('#gallery li').outerWidth(true);
    sectWidth = $('#members').width();
    n = Math.floor(sectWidth / liWidth);
    galWidth = n * liWidth;
    return $('#gallery').css('width', galWidth);
  };

  $(window).resize(function() {
    var galWidth, liWidth, n, sectWidth;
    liWidth = $('#gallery li').outerWidth(true);
    sectWidth = $('#members').width();
    n = Math.floor(sectWidth / liWidth);
    galWidth = n * liWidth;
    return $('#gallery').css('width', galWidth);
  });

}).call(this);
