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
const mouseWheel = document.querySelector('.horizon-card');

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
const mouseWheel2 = document.querySelector('.horizon-product');

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

// Mengatur waktu akhir perhitungan mundur
var countDownDate = new Date("Sep 30, 2024 00:00:00").getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function () {

	// Untuk mendapatkan tanggal dan waktu hari ini
	var now = new Date().getTime();

	// Temukan jarak antara sekarang dan tanggal hitung mundur
	var distance = countDownDate - now;

	// Perhitungan waktu untuk hari, jam, menit dan detik
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Keluarkan hasil dalam elemen dengan id = "demo"
	document.getElementById("times").innerHTML = days + "d " + hours + "h "
		+ minutes + "m " + seconds + "s ";

	// Jika hitungan mundur selesai, tulis beberapa teks 
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("times").innerHTML = "EXPIRED";
	}
}, 1000);


