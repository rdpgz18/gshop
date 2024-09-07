// ---------Responsive-navbar-active-animation-----------
function test() {
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top": itemPosNewAnimTop.top + "px",
		"left": itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click", "li", function (e) {
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top": itemPosNewAnimTop.top + "px",
			"left": itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function () {
	setTimeout(function () { test(); });
});
$(window).on('resize', function () {
	setTimeout(function () { test(); }, 500);
});
$(".navbar-toggler").click(function () {
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function () { test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if (path == '') {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
	// Add active class to target link
	target.parent().addClass('active');
});




// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });


//---Javascript auto scroll---//
// Declaring variable to target a div element
const mouseWheel = document.querySelector('.hot-items-area');

// Add wheel function
mouseWheel.addEventListener('wheel', function (e) {

	const race = 100; // <= set scroll mouse move the wheels

	if (e.deltaY > 0) // <= Scroll right
		mouseWheel.scrollLeft += race;
	else // Scroll left
		mouseWheel.scrollLeft -= race;
	e.preventDefault();
	{ passive: true }
});

// Declaring variable to target a div element
const mouseWheel2 = document.querySelector('.flash-data');

// Add wheel function
mouseWheel2.addEventListener('wheel', function (e) {

	const race = 100; // <= set scroll mouse move the wheels

	if (e.deltaY > 0) // <= Scroll right
		mouseWheel2.scrollLeft += race;
	else // Scroll left
		mouseWheel2.scrollLeft -= race;
	e.preventDefault();
	{ passive: true }
});

// add year
document.getElementById('year').innerHTML = new Date().getFullYear();
// back top
var btn = $('#button');

$(window).scroll(function () {
	if ($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});

btn.on('click', function (e) {
	e.preventDefault();
	$('html, body').animate({ scrollTop: 0 }, '300');
});


// countdound timer

<<<<<<< HEAD
// Set the date we're counting down to
var countDownDate = new Date("Sep 9, 2024 00:00:00").getTime();
=======

	// Set the date we're counting down to
	var countDownDate = new Date("Sep 9, 2024 00:00:00").getTime();
>>>>>>> c90f1f4fd93725c86987b1efb0f9ce9a752addf5

// Update the count down every 1 second
var x = setInterval(function () {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"
	document.getElementById("countdown").innerHTML = days + "d" + " : " + hours + "h" + " : "
		+ minutes + "m " + " : " + seconds + "s ";

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "EXPIRED";
	}
}, 1000);

// untuk menstop


<<<<<<< HEAD
=======
	// untuk menstop
	//getCounter();

>>>>>>> c90f1f4fd93725c86987b1efb0f9ce9a752addf5


