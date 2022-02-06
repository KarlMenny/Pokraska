'use strict';

// SCROLL-DOWN
$(document).on('click', function(event) {
	var eventTarget = event.target;
	var attrValue = $(eventTarget).attr('href');
	if((attrValue == '#about') || (attrValue == '#services') || (attrValue == '#contacts') || (attrValue == '#benefits') || (attrValue == '#header') || $(eventTarget).hasClass('footer__img-arrow-up')) {

		if ($(eventTarget).hasClass('footer__img-arrow-up')) scroll(eventTarget.parentNode);

		scroll(eventTarget);
	} else {
		return;
	}
});

function scroll (eventTarget) {
	$('html, body').animate({
		scrollTop: $($.attr(eventTarget, 'href')).offset().top
	}, 600);
	return false;
}
// SCROLL-DOWN

// HEADER-BUTTON
$('.header__btn').on('click', function() {
	if ($('.header__form-wrapper').hasClass('header__form-wrapper_position')) {
		$('#in-focus').focus();
		return;
	}
	$('.header__form-wrapper').toggleClass('header__form-wrapper_position');
	setTimeout(function () {
		$('#in-focus').focus();
	}, 300);
});
// HEADER-BUTTON

// FORM-CLOSE
$('.header__form-close').on('click', function() {
	$('.header__form-wrapper').toggleClass('header__form-wrapper_position');
});
// FORM-CLOSE

// BURGER-BUTTON
$('.burger-btn__label').on('click', function() {
	// $(this).toggleClass('burger-btn_is-active');
	$('.burger-menu').toggleClass('burger-menu_show');
});
$('.burger-menu__close').on('click', function() {
	$('.burger-menu').toggleClass('burger-menu_show');
	$('.burger-btn__input')[0].checked = false;
});
// BURGER-BUTTON


// GALLERY-SLIDER
function callSlider(arg) {
	$(arg).css('display', 'flex');
	$(arg + ' .gallery__slider').slick({
		appendArrows: $(arg + ' .gallery__arrows'),
		prevArrow: '<div class="gallery__wrapper gallery__wrapper_prev"><div class="gallery__arrow gallery__arrow_prev"></div></div>',
		nextArrow: '<div class="gallery__wrapper gallery__wrapper_next"><div class="gallery__arrow gallery__arrow_next"></div></div>',
		// autoplay: true,
		// autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
	});
}

function closeSlider(arg) {
	$(arg).css('display', 'none');
	$(arg + ' .gallery__slider').slick('unslick');
}

$(document).keydown(function(event) {
	if(event.keyCode == 27) {
		$('.gallery').css('display', 'none');
	}
});
// GALLERY-SLIDER


