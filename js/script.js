const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header_menu');
const body = document.querySelector('body');

burger.addEventListener('click', function() {
	this.classList.toggle('active');
	headerMenu.classList.toggle('active');
	body.classList.toggle('lock');
})

headerMenu.addEventListener('click', function () {
	this.classList.remove('active');
	body.classList.remove('lock');
})



// $(document).ready(function() {
// 	$('.burger').click(function(event){
// 		$('.burger, .header_menu').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	});
// 	$('.header_menu').click(function(event){
// 		$('.burger, .header_menu').removeClass('active');
// 		$('body').removeClass('lock');
// 	});
// });