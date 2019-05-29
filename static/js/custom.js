/*
	Template:  websiteUtil - Personal Portfolio Template
	Author: mital_04
	Design and Developed by: mital_04
*/
(function($){
	"use strict"
	let websiteUtil = {};
	
	/*--------------------
		* Skill
	----------------------*/
	websiteUtil.SkillBar = function() {
		$('.skillbar').skillBars({
				from: 0,
				speed: 4000, 
				interval: 100,
				decimals: 0,
		});
	}

	/*--------------------
		* Pre Load
	----------------------*/
	websiteUtil.WebLoad = function(){
		document.getElementById("loading").style.display = "none"; 
	}

	websiteUtil.HeaderScroll = function(){
        $('header a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              let target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 65,
                      }, 1000);
                      return false;
                  }
            }
        });
    }

	/*--------------------
		* Type It
	----------------------*/
	websiteUtil.mTypeIt = function(){
		new TypeIt('#type-it', {
	        speed: 200,
	        loop:true,
	        strings: [
	          'Developer.',
						
	        ],
	        breakLines: false
    	});	
	}
	


	/*--------------------
		* Header Fixed
	----------------------*/
	websiteUtil.HeaderFixed = function(){
		if ($(window).scrollTop() >= 70) {
	       $('header').addClass('fixed-header');
				 $('body').addClass('fixed-header-body');
				 $('footer').addClass('footer-visible');
	    }
	    else {
	       $('header').removeClass('fixed-header');
				 $('body').removeClass('fixed-header-body');
				 $('footer').removeClass('footer-visible');
	    }
	}
	/*--------------------
		* Header Fixed
	----------------------*/
	websiteUtil.FullScreen = function(){
		$(".full-screen").height($(window).height());	
	}

	/*--------------------
		* Counter JS
	----------------------*/
	let a = 0;
	websiteUtil.Counter = function(){
		let oTop = $('.counter-box').offset().top - window.innerHeight;
		  if (a == 0 && $(window).scrollTop() > oTop) {
		    $('.count').each(function () {
		          $(this).prop('Counter',0).animate({
		              Counter: $(this).text()
		          }, {
		              duration: 4000,
		              easing: 'swing',
		              step: function (now) {
		                  $(this).text(Math.ceil(now));
		              }
		          });
		      });
		    a = 1;
		  }
	}

	/*--------------------
		* owl Slider
	----------------------*/
	websiteUtil.PortfolioSlider = function(){
		let testimonials_slider = $('#portfolio-slider-single');
	    testimonials_slider.owlCarousel({
	        loop: true,
	        margin: 0,
	        nav:false,
	        responsive: {
	          0: {
	            items: 1
	          },
	          768: {
	            items: 2
	          },
	          991: {
	            items: 3
	          },
	          1140: {
	            items: 3
	          },
	          1650: {
	            items: 4
	          }
	        }
	    });
	}

	websiteUtil.ClientSlider = function(){
		let testimonials_slider = $('#client-slider-single');
	    testimonials_slider.owlCarousel({
	        loop: true,
	        margin: 0,
	        nav:false,
	        items:1
	    });
	}


	/*--------------------
	| * Modal
	---------------------*/
	let modal = document.getElementById('myModal');
	let images = document.getElementsByClassName('myImages');
	let modalImg = document.getElementById("img01");

	for (let i = 0; i < images.length; i++) {
		let img = images[i];
		img.onclick = function() {
			$("body").addClass("modal-open");
			modal.style.display = "block";
			modalImg.src = this.src;
		}
	}

	// Allows user to close modal by clicking outside the picture
	window.onclick = function (event) {
		if (event.target == modal) {
			$("body").removeClass("modal-open");
			modal.style.display = "none";
		}
	}

	// Allows user to close modal using the ESC button
	$(document).keydown(function (event) {
		if (event.keyCode == 27) {
			$('#myModal').hide();
		}
	});

	$('.modal-content').click(() => {
				$("body").removeClass("modal-open");
				modal.style.display = "none";
	});


	/*--------------------
		* websiteUtil function
	----------------------*/
	// Window on Load
	$(window).on("load", function(){
		websiteUtil.WebLoad();
	});
	// Document on Ready
	$(document).on("ready", function(){
		websiteUtil.mTypeIt(),
		websiteUtil.HeaderScroll(),
		websiteUtil.SkillBar(),
		websiteUtil.PortfolioSlider(),
		websiteUtil.ClientSlider(),
		websiteUtil.FullScreen();
	});

	// Document on Scrool
	$(window).on("scroll", function(){
		websiteUtil.Counter(),
		websiteUtil.HeaderFixed();
	});

	// Window on Resize
	$(window).on("resize", function(){
		websiteUtil.FullScreen();
	});

	// Skill Icon Hover effects
	// React
	$('.skill-react-icon').mouseover(function () {
		$('.skill-react-icon').removeClass('devicon-react-original');
		$('.skill-react-icon').addClass('devicon-react-original-wordmark colored');
	})
	$('.skill-react-icon').mouseleave(function () {
		$('.skill-react-icon').removeClass('devicon-react-original-wordmark colored');
		$('.skill-react-icon').addClass('devicon-react-original');
	})

	// JavaScript
	$('.skill-js-icon').mouseover(function () {
		$('.skill-js-icon').removeClass('devicon-javascript-plain');
		$('.skill-js-icon').addClass('devicon-javascript-plain colored');
	})
	$('.skill-js-icon').mouseleave(function () {
		$('.skill-js-icon').removeClass('devicon-javascript-plain colored');
		$('.skill-js-icon').addClass('devicon-javascript-plain');
	})

	// Rails
	$('.skill-rails-icon').mouseover(function () {
		$('.skill-rails-icon').removeClass('devicon-rails-plain');
		$('.skill-rails-icon').addClass('devicon-rails-plain-wordmark colored');
	})
	$('.skill-rails-icon').mouseleave(function () {
		$('.skill-rails-icon').removeClass('devicon-rails-plain-wordmark colored');
		$('.skill-rails-icon').addClass('devicon-rails-plain');
	})

	// Ruby
	$('.skill-ruby-icon').mouseover(function () {
		$('.skill-ruby-icon').removeClass('devicon-ruby-plain');
		$('.skill-ruby-icon').addClass('devicon-ruby-plain-wordmark colored');
	})
	$('.skill-ruby-icon').mouseleave(function () {
		$('.skill-ruby-icon').removeClass('devicon-ruby-plain-wordmark colored');
		$('.skill-ruby-icon').addClass('devicon-ruby-plain');
	})

	// HTML5 & CSS3
	$('.skill-html5-icon').mouseover(function () {
		$('.skill-html5-icon').removeClass('devicon-html5-plain');
		$('.skill-html5-icon').addClass('devicon-html5-plain-wordmark colored');
	})
	$('.skill-html5-icon').mouseleave(function () {
		$('.skill-html5-icon').removeClass('devicon-html5-plain-wordmark colored');
		$('.skill-html5-icon').addClass('devicon-html5-plain');
	})
	$('.skill-css3-icon').mouseover(function () {
		$('.skill-css3-icon').removeClass('devicon-css3-plain');
		$('.skill-css3-icon').addClass('devicon-css3-plain-wordmark colored');
	})
	$('.skill-css3-icon').mouseleave(function () {
		$('.skill-css3-icon').removeClass('devicon-css3-plain-wordmark colored');
		$('.skill-css3-icon').addClass('devicon-css3-plain');
	})

	// PostgreSQL
	$('.skill-psql-icon').mouseover(function () {
		$('.skill-psql-icon').removeClass('devicon-postgresql-plain');
		$('.skill-psql-icon').addClass('devicon-postgresql-plain-wordmark colored');
	})
	$('.skill-psql-icon').mouseleave(function () {
		$('.skill-psql-icon').removeClass('devicon-postgresql-plain-wordmark colored');
		$('.skill-psql-icon').addClass('devicon-postgresql-plain');
	})

	// Mongo
	$('.skill-mongo-icon').mouseover(function () {
		$('.skill-mongo-icon').removeClass('devicon-mongodb-plain');
		$('.skill-mongo-icon').addClass('devicon-mongodb-plain-wordmark colored');
	})
	$('.skill-mongo-icon').mouseleave(function () {
		$('.skill-mongo-icon').removeClass('devicon-mongodb-plain-wordmark colored');
		$('.skill-mongo-icon').addClass('devicon-mongodb-plain');
	})

	// Node
	$('.skill-node-icon').mouseover(function () {
		$('.skill-node-icon').removeClass('devicon-nodejs-plain');
		$('.skill-node-icon').addClass('devicon-nodejs-plain-wordmark colored');
	})
	$('.skill-node-icon').mouseleave(function () {
		$('.skill-node-icon').removeClass('devicon-nodejs-plain-wordmark colored');
		$('.skill-node-icon').addClass('devicon-nodejs-plain');
	})

	// Node
	$('.skill-git-icon').mouseover(function () {
		$('.skill-git-icon').removeClass('devicon-git-plain');
		$('.skill-git-icon').addClass('devicon-git-plain-wordmark colored');
	})
	$('.skill-git-icon').mouseleave(function () {
		$('.skill-git-icon').removeClass('devicon-git-plain-wordmark colored');
		$('.skill-git-icon').addClass('devicon-git-plain');
	})

	// D3
	$('.skill-d3-icon').mouseover(function () {
		$('.skill-d3-icon').addClass('colored');
	})
	$('.skill-d3-icon').mouseleave(function () {
		$('.skill-d3-icon').removeClass('colored');
	})

	// Python
	$('.skill-python-icon').mouseover(function () {
		$('.skill-python-icon').removeClass('devicon-python-plain');
		$('.skill-python-icon').addClass('devicon-python-plain-wordmark colored');
	})
	$('.skill-python-icon').mouseleave(function () {
		$('.skill-python-icon').removeClass('devicon-python-plain-wordmark colored');
		$('.skill-python-icon').addClass('devicon-python-plain');
	})


})(jQuery);