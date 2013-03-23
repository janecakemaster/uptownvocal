$(function() {

  var sortGallery = function() {
    var liWidth = $('#gallery li').outerWidth(true);
    var sectWidth = $('#members').width();
    var galWidth = Math.floor(sectWidth / liWidth) * liWidth;
    return $('#gallery').css('width', galWidth);
  }

  sortGallery();
  $(window).resize(sortGallery);

	$( "#dialog-modal" ).dialog({

		autoOpen: false,
		closeOnEscape: true,
		show: {
			effect: "fade",
			duration: 500
		},
	
		hide: {
			effect: "fade",
			duration: 500
		},

		height: "auto",
		maxHeight: 600,
		minHeight: 200,

		width: 600,
		modal: true
	});

	$( "#opener" ).click(function() {
		$( "#dialog-modal" ).dialog( "open" );
	});

});