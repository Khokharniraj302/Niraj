// ---- ---- Const ---- ---- //
let inputBox = document.querySelector('.input-box'),
searchIcon = document.querySelector('.search'),
closeIcon = document.querySelector('.close-icon');

// ---- ---- Open Input ---- ---- //
searchIcon.addEventListener('click', () => {
inputBox.classList.add('open');
});
// ---- ---- Close Input ---- ---- //
closeIcon.addEventListener('click', () => {
inputBox.classList.remove('open');
});



// ---- ---- cauntar ---- ---- //

$('.counter').counterUp({
  delay: 10,
  time: 2000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');


// ---- ---- slider---- ---- //

jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: true, /* use rewind if you don't want loop */
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 2
      },
  
      1024: {
        items: 2
      },
  
      1366: {
        items: 2
      }
    }
  });

  jQuery(document).ready(function($) {
      "use strict";
      $('#customers-testimonials').owlCarousel( {
          loop: true,
          center: true,
          items: 3,
          margin: 30,
          autoplay: true,
          dots:true,
          nav:true,
          autoplayTimeout: 3000,
          smartSpeed: 450,
          navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
          responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            1170: {
              items: 3
            }
          }
        });
      });



      jQuery(document).ready(function ($) {

        $('#checkbox').change(function(){
          setInterval(function () {
              moveRight();
          }, 3000);
        });
        
        var slideCount = $('#slider ul li').length;
        var slideWidth = $('#slider ul li').width();
        var slideHeight = $('#slider ul li').height();
        var sliderUlWidth = slideCount * slideWidth;
        
        $('#slider').css({ width: slideWidth, height: slideHeight });
        
        $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
        
          $('#slider ul li:last-child').prependTo('#slider ul');
      
          function moveLeft() {
              $('#slider ul').animate({
                  left: + slideWidth
              }, 200, function () {
                  $('#slider ul li:last-child').prependTo('#slider ul');
                  $('#slider ul').css('left', '');
              });
          };
      
          function moveRight() {
              $('#slider ul').animate({
                  left: - slideWidth
              }, 200, function () {
                  $('#slider ul li:first-child').appendTo('#slider ul');
                  $('#slider ul').css('left', '');
              });
          };
      
          $('a.control_prev').click(function () {
              moveLeft();
          });
      
          $('a.control_next').click(function () {
              moveRight();
          });
      
      });    
      
// ---- ---- slider-2 ---- ---- //

      $(document).ready(function(){

        $('#owl-one').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          loop:true,
          autoplay:true,
          autoplayTimeout: 5000,
          smartSpeed: 1000,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
        });
      });





      // ---- ---- cursor ---- ---- //


      const body = document.body;

      const MathUtils = {
        lineEq: (y2, y1, x2, x1, currentVal) => {
          // y = mx + b
          var m = (y2 - y1) / (x2 - x1),
            b = y1 - m * x1;
          return m * currentVal + b;
        },
        lerp: (a, b, n) => (1 - n) * a + n * b,
        getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
      };
      
      const getMousePos = e => {
        let posx = 0;
        let posy = 0;
        if (!e) e = window.event;
        if (e.pageX || e.pageY) {
          posx = e.pageX;
          posy = e.pageY;
        } else if (e.clientX || e.clientY) {
          posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
          posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
        }
        return { x: posx, y: posy };
      };
      
      let winsize;
      const calcWinsize = () =>
        (winsize = { width: window.innerWidth, height: window.innerHeight });
      calcWinsize();
      window.addEventListener("resize", calcWinsize);
      
      let mousepos = { x: winsize.width / 2, y: winsize.height / 2 };
      window.addEventListener("mousemove", ev => (mousepos = getMousePos(ev)));
      
      // Custom cursor
      class Cursor {
        constructor(el) {
          this.DOM = { el: el };
          this.DOM.circle = this.DOM.el.querySelector(".js-cursor-inner");
          this.DOM.arrows = {
            right: this.DOM.el.querySelector(".js-cursor-right"),
            left: this.DOM.el.querySelector(".js-cursor-left")
          };
          this.bounds = this.DOM.circle.getBoundingClientRect();
          this.lastMousePos = { x: 0, y: 0 };
          this.scale = 1;
          this.lastScale = 1;
          requestAnimationFrame(() => this.render());
        }
        render() {
          this.lastMousePos.x = MathUtils.lerp(
            this.lastMousePos.x,
            mousepos.x - this.bounds.width / 2,
            0.2
          );
          this.lastMousePos.y = MathUtils.lerp(
            this.lastMousePos.y,
            mousepos.y - this.bounds.height / 2,
            0.2
          );
          this.lastScale = MathUtils.lerp(this.lastScale, this.scale, 0.15);
          this.DOM.circle.style.transform = `translateX(${
            this.lastMousePos.x
          }px) translateY(${this.lastMousePos.y}px) scale(${this.lastScale})`;
          requestAnimationFrame(() => this.render());
        }
        enter() {
          this.scale = 1.9;
        }
        leave() {
          this.scale = 1;
        }
        click() {
          this.lastScale = 0.4;
        }
        showArrows() {
          TweenMax.to(Object.values(this.DOM.arrows), 1, {
            ease: Expo.easeOut,
            startAt: { x: i => (i ? 10 : -10) },
            opacity: 1,
            x: 0
          });
        }
        hideArrows() {
          TweenMax.to(Object.values(this.DOM.arrows), 1, {
            ease: Expo.easeOut,
            x: i => (i ? 10 : -10),
            opacity: 0
          });
        }
      }
      
      // Custom mouse cursor
      const cursor = new Cursor(document.querySelector(".js-cursor"));
      
      // Activate the enter/leave/click methods of the custom cursor when hovering in/out on every <a> (and the close content ctrl)
      const links = document.querySelectorAll(".js-link");
      
      [...links].forEach(link => {
          link.addEventListener("mouseenter", () => cursor.enter());
          link.addEventListener("mouseleave", () => cursor.leave());
        });
      
      