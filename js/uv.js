$(function() {

  var sortGallery = function() {
    var liWidth = $('#gallery li').outerWidth(true);
    var sectWidth = $('#members').width();
    var galWidth = Math.floor(sectWidth / liWidth) * liWidth;
    return $('#gallery').css('width', galWidth);
  }

  sortGallery();
  $(window).resize(sortGallery);

  var options = {

		autoOpen: false,
		closeOnEscape: true,
		draggable: false,

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

	}

	$( "#allisonModal" ).dialog(options);
	$( "#allison-pic" ).click(function() {
		$( "#allisonModal" ).dialog( "open" );
	});

	$( "#benModal" ).dialog(options);
	$( "#ben-pic" ).click(function() {
		$( "#benModal" ).dialog( "open" );
	});

	$( "#betseyModal" ).dialog(options);
	$( "#betsey-pic" ).click(function() {
		$( "#betseyModal" ).dialog( "open" );
	});

	$( "#danielleModal" ).dialog(options);
	$( "#danielle-pic" ).click(function() {
		$( "#danielleModal" ).dialog( "open" );
	});

	$( "#devinModal" ).dialog(options);
	$( "#devin-pic" ).click(function() {
		$( "#devinModal" ).dialog( "open" );
	});

	$( "#gabeModal" ).dialog(options);
	$( "#gabe-pic" ).click(function() {
		$( "#gabeModal" ).dialog( "open" );
	});

	$( "#janeModal" ).dialog(options);
	$( "#jane-pic" ).click(function() {
		$( "#janeModal" ).dialog( "open" );
	});

	$( "#jonathanModal" ).dialog(options);
	$( "#jonathan-pic" ).click(function() {
		$( "#jonathanModal" ).dialog( "open" );
	});

	$( "#joyaModal" ).dialog(options);
	$( "#joya-pic" ).click(function() {
		$( "#joyaModal" ).dialog( "open" );
	});

	$( "#lindaModal" ).dialog(options);
	$( "#linda-pic" ).click(function() {
		$( "#lindaModal" ).dialog( "open" );
	});

	$( "#lizzyModal" ).dialog(options);
	$( "#lizzy-pic" ).click(function() {
		$( "#lizzyModal" ).dialog( "open" );
	});

	$( "#maryModal" ).dialog(options);
	$( "#mary-pic" ).click(function() {
		$( "#maryModal" ).dialog( "open" );
	});

	$( "#michaelModal" ).dialog(options);
	$( "#michael-pic" ).click(function() {
		$( "#michaelModal" ).dialog( "open" );
	});

	$( "#mikhailModal" ).dialog(options);
	$( "#mikhail-pic" ).click(function() {
		$( "#mikhailModal" ).dialog( "open" );
	});

	$( "#rachelModal" ).dialog(options);
	$( "#rachel-pic" ).click(function() {
		$( "#rachelModal" ).dialog( "open" );
	});	

	$( "#rayModal" ).dialog(options);
	$( "#ray-pic" ).click(function() {
		$( "#rayModal" ).dialog( "open" );
	});	

	$( "#reubenModal" ).dialog(options);
	$( "#reuben-pic" ).click(function() {
		$( "#reubenModal" ).dialog( "open" );
	});	

	$( "#tareqModal" ).dialog(options);
	$( "#tareq-pic" ).click(function() {
		$( "#tareqModal" ).dialog( "open" );
	});  

});