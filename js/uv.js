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

	if ($(window).width() < 600) {
		options.width = "auto";
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

	$( "#heatherModal" ).dialog(options);
	$( "#heather-pic" ).click(function() {
		$( "#heatherModal" ).dialog( "open" );
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

/* Image Slider js */

 // settings
  var $slider = $('.slider'); // class or id of carousel slider
  var $slide = 'li'; // could also use 'img' if you're not using a ul
  var $transition_time = 1000; // 1 second
  var $time_between_slides = 3000; // 3 seconds

  function slides(){
    return $slider.find($slide);
  }

  slides().fadeOut();

  // set active classes
  slides().first().addClass('active');
  slides().first().fadeIn($transition_time);

  // auto scroll 
  $interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);

      if (slides().length == $i + 1) $i = -1; // loop to start

      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides 
  );


});