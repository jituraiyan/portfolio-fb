(function(){

	'use strict'

	$(document).ready(function(){

		// Dropdown Menu

		$('nav > ul > li').hover(function(){
			if($(window).width() > 575 ){
				$('nav ul li ul, nav ul li .sub-menu').fadeOut()

				$(this).find('ul, .sub-menu').fadeIn()
			}
		}, function(){
			if($(window).width() > 575 ){
				$(this).find('ul, .sub-menu').fadeOut()
			}
		})

		$('nav > ul > li').on('click', function(){
			if($(window).width() < 576 ){
				$(this).find('ul, .sub-menu').slideToggle()
			}
		})

		// Toggle Mobile Menu

		$('.menu-togler').on('click', function(){
			$('nav').slideToggle()
			isMenuOpen = !isMenuOpen
		})

	})

	// Resizing Menu

	var isMenuOpen = false

	$(window).on('resize', function(){
		if( $(window).width() > 575 ){
			$('nav').show()
		}else{
			if(isMenuOpen) {
				$('nav').show()
			}else{
				$('nav').hide()
			}
		}
	})

	// Collapse Header on Scroll

	$(window).on('load scroll', function(){

		console.log($(window).scrollTop())

		if( $(window).scrollTop() > 100 ) {
			$('header').addClass('small-header')
		}else{
			$('header').removeClass('small-header')
		}
	})


})()