window.onload = ->
  liWidth = $('#gallery li').outerWidth true
  sectWidth = $('#members').width()
  n = Math.floor sectWidth / liWidth
  galWidth = n * liWidth
  $('#gallery').css 'width', galWidth

$(window).resize ->
  liWidth = $('#gallery li').outerWidth true
  sectWidth = $('#members').width()
  n = Math.floor sectWidth / liWidth
  galWidth = n * liWidth
  $('#gallery').css 'width', galWidth
