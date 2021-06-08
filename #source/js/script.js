var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
if (isMobile.any()) { }

if (location.hash) {
	var hsh = location.hash.replace('#', '');
	if ($('.popup-' + hsh).length > 0) {
		popupOpen(hsh);
	} else if ($('div.' + hsh).length > 0) {
		$('body,html').animate({ scrollTop: $('div.' + hsh).offset().top, }, 500, function () { });
	}
}
$('.wrapper').addClass('loaded');

var act = "click";
if (isMobile.iOS()) {
	var act = "touchstart";
}


//BodyLock для Popup на JS
// function body_lock(delay) {
// 	let body = document.querySelector("body");
// 	if (body.classList.contains('lock')) {
// 		body_lock_remove(delay);
// 	} else {
// 		body_lock_add(delay);
// 	}
// }
// function body_lock_remove(delay) {
// 	let body = document.querySelector("body");
// 	if (unlock) {
// 		let lock_padding = document.querySelectorAll("._lp");
// 		setTimeout(() => {
// 			for (let index = 0; index < lock_padding.length; index++) {
// 				const el = lock_padding[index];
// 				el.style.paddingRight = '0px';
// 			}
// 			body.style.paddingRight = '0px';
// 			body.classList.remove("lock");
// 		}, delay);

// 		unlock = false;
// 		setTimeout(function () {
// 			unlock = true;
// 		}, delay);
// 	}
// }
// function body_lock_add(delay) {
// 	let body = document.querySelector("body");
// 	if (unlock) {
// 		let lock_padding = document.querySelectorAll("._lp");
// 		for (let index = 0; index < lock_padding.length; index++) {
// 			const el = lock_padding[index];
// 			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
// 		}
// 		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
// 		body.classList.add("lock");

// 		unlock = false;
// 		setTimeout(function () {
// 			unlock = true;
// 		}, delay);
// 	}
// }


//BURGER
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".mob-menu");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
}
window.addEventListener('click', e => { // при клике в любом месте окна браузера
	const target = e.target // находим элемент, на котором был клик
	if (!target.closest('.icon-menu') && !target.closest('.mob-menu') && !target.closest('._popup-link') && !target.closest('.popup')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
		iconMenu.classList.remove('active') // то закрываем окно навигации, удаляя активный класс
		menuBody.classList.remove('active')
		body.classList.remove('lock')
	}
})


// // Закрытие моб меню при клике на якорную ссылку
$('.menu__list a').on('click', function () {
	if ($('.icon-menu').css('display') != 'none') {
		$(".icon-menu").trigger("click");
	}
});


// // Плавный скролл якорных ссылок
// $(".menu__list, .mob-menu__list, .footer__menu").on("click", "a", function (event) {
// 	event.preventDefault();
// 	var id = $(this).attr('href'),
// 		top = $(id).offset().top;
// 	$('body,html').animate({ scrollTop: top }, 1000);
// });


// Открытие ПК меню при наведении до 1024px
if (document.body.clientWidth > 1024) {
	function hideMenu() {
		$('.mob-menu').slideUp(600);
	}
	function showMenu() {
		$('.mob-menu').slideDown(600);
	}
	$(document).ready(function () {
		$(".menu__catalogy").on("mouseover", showMenu);
		$(".header__menu").on("mouseleave", hideMenu);
	});
}


// Slider на главной
$('.info-sl__slider').slick({
	arrows: false,
	dots: true,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	autoplay: true,
	autoplaySpeed: 1800,
	adaptiveHeight: true
});


// Slider вертикальный
$('.sidebar-slider').slick({
	arrows: true,
	dots: false,
	infinite: true,
	speed: 1000,
	slidesToShow: 1,
	autoplay: true,
	// autoplaySpeed: 1800,
	adaptiveHeight: true,
	vertical: true
});


// Slider Товара
$('.select-prod-slider').slick({
	arrows: false,
	dots: false,
	infinite: true,
	speed: 1000,
	slidesToShow: 4,
	slidesToScroll: 1,
	centerMode: true,
	focusOnSelect: true,
	autoplaySpeed: 1800,
	asNavFor: ".select-slider-big",
	adaptiveHeight: true
});
$('.select-slider-big').slick({
	arrows: false,
	dots: false,
	fade: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	draggable: false,
	asNavFor: ".select-prod-slider"
});


// Выбо колличества
$('.minus').click(function () {
	var $input = $(this).parent().find('input');
	var count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
	$input.change();
	return false;
});
$('.plus').click(function () {
	var $input = $(this).parent().find('input');
	$input.val(parseInt($input.val()) + 1);
	$input.change();
	return false;
});


// Маска телефона
var inputmask_phone = { "mask": "+9(999)999-99-99" };
jQuery("input[type=tel]").inputmask(inputmask_phone);


// Маска телефона на JS
// function setCursorPosition(pos, elem) {
// 	elem.focus();
// 	if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
// 	else if (elem.createTextRange) {
// 		var range = elem.createTextRange();
// 		range.collapse(true);
// 		range.moveEnd("character", pos);
// 		range.moveStart("character", pos);
// 		range.select()
// 	}
// }
// function mask(event) {
// 	var matrix = "+7 (___) ___ ____",
// 		i = 0,
// 		def = matrix.replace(/\D/g, ""),
// 		val = this.value.replace(/\D/g, "");
// 	if (def.length >= val.length) val = def;
// 	this.value = matrix.replace(/./g, function (a) {
// 		return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
// 	});
// 	if (event.type == "blur") {
// 		if (this.value.length == 2) this.value = ""
// 	} else setCursorPosition(this.value.length, this)
// };
// var input = document.querySelector("#tel");
// input.addEventListener("input", mask, false);
// input.addEventListener("focus", mask, false);
// input.addEventListener("blur", mask, false);

// var inputTel = document.querySelector("#tel2");
// inputTel.addEventListener("input", mask, false);
// inputTel.addEventListener("focus", mask, false);
// inputTel.addEventListener("blur", mask, false);

// var inputTelpopup = document.querySelector("#tel3");
// inputTelpopup.addEventListener("input", mask, false);
// inputTelpopup.addEventListener("focus", mask, false);
// inputTelpopup.addEventListener("blur", mask, false);

// var inputTelpopup = document.querySelector("#tel4");
// inputTelpopup.addEventListener("input", mask, false);
// inputTelpopup.addEventListener("focus", mask, false);
// inputTelpopup.addEventListener("blur", mask, false);


//Валидация телефона + Отправщик
jQuery('.header__form button').click(function (e) {
	e.preventDefault();

	let persPhone = jQuery('.header__form input[name=tel]').val();
	if ((persPhone == "") || (persPhone.indexOf("_") > 0)) {
		$(this).siblings('input[name=tel]').css("background-color", "#ff91a4")
		return;
	}

	var jqXHR = jQuery.post(
		"../sender/send.php",
		{
			phone: jQuery('.header__form input[name=tel]').val(),
			name: jQuery('.header__form input[name=name]').val(),
			mail: jQuery('.header__form textarea[name=text]').val(),
		}

	);


	jqXHR.done(function (responce) {
		console.log(responce);
		document.location.href = "../thank-you.html";
		jQuery('.header__form input[name=tel]').val("");
		jQuery('.header__form input[name=name]').val("");
		jQuery('.header__form textarea[name=text]').val("");
	});

	jqXHR.fail(function (responce) {
		console.log(responce);
		alert("Произошла ошибка попробуйте позднее!");
	});

});


//Валидация телефона + Отправщик нескольких одинаковых окон на странице
// jQuery(".form__btn").click(function (e) {
// 	e.preventDefault();

// 	let formmsg = jQuery(this).data("formmsg");
// 	let name = $(this).siblings('input[name=name]').val();
// 	let persPhone = $(this).siblings('input[name=tel]').val();
// 	let time = $(this).siblings('input[name=time]').val();
// 	if ((persPhone == "") || (persPhone.indexOf("_") > 0)) {
// 		$(this).siblings('input[name=name]').css("background-color", "#ff91a4")
// 		$(this).siblings('input[name=tel]').css("background-color", "#ff91a4")
// 		return;
// 	}
// 	console.log('persPhone: ', persPhone);
// 	console.log('formmsg: ', formmsg);

// 	var jqXHR = jQuery.post(
// 		"sender/send.php",
// 		{
// 			formmsg: formmsg,
// 			name: name,
// 			phone: persPhone,
// 			time: time,
// 		}

// 	);


// 	jqXHR.done(function (responce) {
// 		console.log(responce);
// 		document.location.href = "../thank-you.html";
// 		jQuery('input[name=name]').val("");
// 		jQuery('input[name=tel]').val("");
// 		jQuery('textarea[name=text]').val("");
// 	});

// 	jqXHR.fail(function (responce) {
// 		console.log(responce);
// 		alert("Произошла ошибка попробуйте позднее!");
// 	});

// });


$(".fancybox").fancybox();

//ZOOM
if ($('.gallery').length > 0) {
	baguetteBox.run('.gallery', {
		// Custom options
	});
}
/*
CLOUD-ZOOM
<a rel="position:'right',adjustX:25,adjustY:0,Width: 432" href="img/product/zoom.jpg" class="cloud-zoom product-main-mainimage__item">
	<img class="cloudzoom-gallery" src="img/product/zoom.jpg" alt="" />
</a>
*/


// Popup JS
// let unlock = true;
// let popup_link = document.querySelectorAll('._popup-link');
// let popups = document.querySelectorAll('.popup');
// for (let index = 0; index < popup_link.length; index++) {
// 	const el = popup_link[index];
// 	el.addEventListener('click', function (e) {
// 		if (unlock) {
// 			let item = el.getAttribute('href').replace('#', '');
// 			let video = el.getAttribute('data-video');
// 			popup_open(item, video);
// 		}
// 		e.preventDefault();
// 	})
// }
// for (let index = 0; index < popups.length; index++) {
// 	const popup = popups[index];
// 	popup.addEventListener("click", function (e) {
// 		if (!e.target.closest('.popup__body')) {
// 			popup_close(e.target.closest('.popup'));
// 		}
// 	});
// }
// function popup_open(item, video = '') {
// 	let activePopup = document.querySelectorAll('.popup._active');
// 	if (activePopup.length > 0) {
// 		popup_close('', false);
// 	}
// 	let curent_popup = document.querySelector('.popup_' + item);
// 	if (curent_popup && unlock) {
// 		if (video != '' && video != null) {
// 			let popup_video = document.querySelector('.popup_video');
// 			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
// 		}
// 		if (!document.querySelector('.menu__body._active')) {
// 			body_lock_add(500);
// 		}
// 		curent_popup.classList.add('_active');
// 		history.pushState('', '', '#' + item);
// 	}
// }
// function popup_close(item, bodyUnlock = true) {
// 	if (unlock) {
// 		if (!item) {
// 			for (let index = 0; index < popups.length; index++) {
// 				const popup = popups[index];
// 				let video = popup.querySelector('.popup__video');
// 				if (video) {
// 					video.innerHTML = '';
// 				}
// 				popup.classList.remove('_active');
// 			}
// 		} else {
// 			let video = item.querySelector('.popup__video');
// 			if (video) {
// 				video.innerHTML = '';
// 			}
// 			item.classList.remove('_active');
// 		}
// 		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
// 			body_lock_remove(500);
// 		}
// 		history.pushState('', '', window.location.href.split('#')[0]);
// 	}
// }
// let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
// if (popup_close_icon) {
// 	for (let index = 0; index < popup_close_icon.length; index++) {
// 		const el = popup_close_icon[index];
// 		el.addEventListener('click', function () {
// 			popup_close(el.closest('.popup'));
// 		})
// 	}
// }
// document.addEventListener('keydown', function (e) {
// 	if (e.code === 'Escape') {
// 		popup_close();
// 	}
// });


//POPUP
$('.pl').click(function (event) {
	var pl = $(this).attr('href').replace('#', '');
	var v = $(this).data('vid');
	popupOpen(pl, v);
	return false;
});
function popupOpen(pl, v) {
	$('.popup').removeClass('active').hide();
	if (!$('.menu__body').hasClass('active')) {
		//$('body').data('scroll',$(window).scrollTop());
	}
	if (!isMobile.any()) {
		$('body').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() }).addClass('lock');
		$('.pdb').css({ paddingRight: $(window).outerWidth() - $('.wrapper').outerWidth() });
	} else {
		setTimeout(function () {
			$('body').addClass('lock');
		}, 300);
	}
	history.pushState('', '', '#' + pl);
	if (v != '' && v != null) {
		$('.popup-' + pl + ' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/' + v + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
	}
	$('.popup-' + pl).fadeIn(300).delay(300).addClass('active');

	if ($('.popup-' + pl).find('.slick-slider').length > 0) {
		$('.popup-' + pl).find('.slick-slider').slick('setPosition');
	}
}
function openPopupById(popup_id) {
	$('#' + popup_id).fadeIn(300).delay(300).addClass('active');
}
function popupClose() {
	$('.popup').removeClass('active').fadeOut(300);
	if (!$('.menu__body').hasClass('active')) {
		if (!isMobile.any()) {
			setTimeout(function () {
				$('body').css({ paddingRight: 0 });
				$('.pdb').css({ paddingRight: 0 });
			}, 200);
			setTimeout(function () {
				$('body').removeClass('lock');
				//$('body,html').scrollTop(parseInt($('body').data('scroll')));
			}, 200);
		} else {
			$('body').removeClass('lock');
			//$('body,html').scrollTop(parseInt($('body').data('scroll')));
		}
	}
	$('.popup-video__value').html('');

	history.pushState('', '', window.location.href.split('#')[0]);
}
$('.popup-close,.popup__close').click(function (event) {
	popupClose();
	return false;
});
$('.popup').click(function (e) {
	if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
		popupClose();
		return false;
	}
});
$(document).on('keydown', function (e) {
	if (e.which == 27) {
		popupClose();
	}
});

$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');
	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.menu__body').hasClass('active')) {
		$('.menu__body,.icon-menu').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});


function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();


//Клик вне области
$(document).on('click touchstart', function (e) {
	if (!$(e.target).is(".select *")) {
		$('.select').removeClass('active');
	};
});

//UP
$(window).scroll(function () {
	var w = $(window).width();
	if ($(window).scrollTop() > 50) {
		$('#up').fadeIn(300);
	} else {
		$('#up').fadeOut(300);
	}
});
$('#up').click(function (event) {
	$('body,html').animate({ scrollTop: 0 }, 300);
});

$('body').on('click', '.tab__navitem', function (event) {
	var eq = $(this).index();
	if ($(this).hasClass('parent')) {
		var eq = $(this).parent().index();
	}
	if (!$(this).hasClass('active')) {
		$(this).closest('.tabs').find('.tab__navitem').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
		if ($(this).closest('.tabs').find('.slick-slider').length > 0) {
			$(this).closest('.tabs').find('.slick-slider').slick('setPosition');
		}
	}
});
$.each($('.spoller.active'), function (index, val) {
	$(this).next().show();
});
$('body').on('click', '.spoller', function (event) {
	if ($(this).hasClass('mob') && !isMobile.any()) {
		return false;
	}

	if ($(this).parents('.one').length > 0) {
		$(this).parents('.one').find('.spoller').not($(this)).removeClass('active').next().slideUp(300);
		$(this).parents('.one').find('.spoller').not($(this)).parent().removeClass('active');
	}

	if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
		$.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
			$(this).removeClass('active');
			$(this).next().slideUp(300);
		});
	}
	$(this).toggleClass('active').next().slideToggle(300, function (index, val) {
		if ($(this).parent().find('.slick-slider').length > 0) {
			$(this).parent().find('.slick-slider').slick('setPosition');
		}
	});
	return false;
});



function scrolloptions() {
	var scs = 100;
	var mss = 50;
	var bns = false;
	if (isMobile.any()) {
		scs = 10;
		mss = 1;
		bns = true;
	}
	var opt = {
		cursorcolor: "#fff",
		cursorwidth: "4px",
		background: "",
		autohidemode: true,
		cursoropacitymax: 0.4,
		bouncescroll: bns,
		cursorborderradius: "0px",
		scrollspeed: scs,
		mousescrollstep: mss,
		directionlockdeadzone: 0,
		cursorborder: "0px solid #fff",
	};
	return opt;
}
function scroll() {
	$('.scroll-body').niceScroll('.scroll-list', scrolloptions());
}
if (navigator.appVersion.indexOf("Mac") != -1) {
} else {
	if ($('.scroll-body').length > 0) { scroll(); }
}


// function scrollwhouse(){
// 		var scs=100;
// 		var mss=50;
// 		var bns=false;
// 	if(isMobile.any()){
// 		scs=10;
// 		mss=1;
// 		bns=true;
// 	}
// 	var opt={
// 		cursorcolor:"#afafaf",
// 		cursorwidth: "5px",
// 		background: "",
// 		autohidemode:false,
// 		railalign: 'left',
// 		cursoropacitymax: 1,
// 		bouncescroll:bns,
// 		cursorborderradius: "0px",
// 		scrollspeed:scs,
// 		mousescrollstep:mss,
// 		directionlockdeadzone:0,
// 		cursorborder: "0px solid #fff",
// 	};
// 	return opt;
// }
// $('.whouse-content-body').niceScroll('.whouse-content-scroll',scrollwhouse());
// $('.whouse-content-body').scroll(function(event) {
// 		var s=$(this).scrollTop();
// 		var r=Math.abs($(this).outerHeight()-$('.whouse-content-scroll').outerHeight());
// 		var p=s/r*100;
// 	$('.whouse-content__shadow').css({opacity:1-1/100*p});
// });



if ($('.t,.tip').length > 0) {
	tip();
}
function tip() {
	$('.t,.tip').webuiPopover({
		placement: 'top',
		trigger: 'hover',
		backdrop: false,
		//selector:true,
		animation: 'fade',
		dismissible: true,
		padding: false,
		//hideEmpty: true
		onShow: function ($element) { },
		onHide: function ($element) { },
	}).on('show.webui.popover hide.webui.popover', function (e) {
		$(this).toggleClass('active');
	});
}

//scrollToFixed Фиксовая шапка
  // $(".header").scrollToFixed({
  //   marginTop: -1
  // });