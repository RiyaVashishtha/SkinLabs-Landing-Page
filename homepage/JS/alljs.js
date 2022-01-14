$(document).ready(function () {
    $('#top-bar').owlCarousel({
        margin:0,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true,
            },
            600: {
                items: 1,
                nav: false,
            },
            1000: {
                items:1,
                nav: false,
            }
        }
    })
    $('.js-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        stagePadding:4,
        nav:true,
        margin:10,
        autoplaySpeed:1000,
        smartSpeed:1500,
        dots:true,
        responsiveClass:true,
        autoplayHoverPause:true,
        items:3,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true
            },
            600:{
                items:2,
                nav:false,
                loop:true,
                dots:true
            },
            1000:{
                items:3,
                nav:true,
                loop:true,
                dots:3
            }
        }
    })

    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        autoplay:true,
        responsiveClass: true,
        autoplaySpeed:1000,
        smartSpeed:1500,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            600: {
                items: 1,
                loop: true
            },
            1000: {
                items: 1,
                loop: true
            }
        }
    })
    $('#testimonial-carousel').owlCarousel({
        autoplay:true,
        dots:true,
        nav:true,
        loop:true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        items:1,
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
    })
    



    $("#certificate-icon").owlCarousel({
        loop: true,
        items: 5,
        margin: 3,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 3,
                nav: true,
            },
            600: {
                items: 3,
                nav: true,
            },
            1000: {
                items: 5,
                nav: true,
                loop: true,
            },
        },
    });
});




function openNav() {
    document.getElementById("mySidenav").style.width = "80%";
    document.getElementById("main").style.marginLeft = "80%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  
  
  function increment(inputEl) {
    let currentValue = parseInt(inputEl.value, 10);
  
    inputEl.value = currentValue + 1;
  }
  
  function decrement(inputEl) {
    let currentValue = parseInt(inputEl.value, 10);
  
    if (currentValue === 0) {
      console.warn('You can\'t order less than 0 things.');
      return;
    }
  
    inputEl.value = currentValue - 1;
  }
  
  function handleClick(event) {
    let incrementButton = event.target.closest('[data-increment]');
    let decrementButton = event.target.closest('[data-decrement]');
  
    if (!incrementButton && !decrementButton) return;
  
    let inputId = '';
  
    incrementButton !== null ?
      inputId = incrementButton.getAttribute('data-increment') :
      inputId = decrementButton.getAttribute('data-decrement');
  
  
    if (incrementButton && incrementButton !== null) {
      let inputToIncrement = document.querySelector('#' + inputId);
  
      increment(inputToIncrement);
    }
  
    if (decrementButton && decrementButton !== null) {
      let inputToDecrement = document.querySelector('#' + inputId);
  
      decrement(inputToDecrement);
    }
  }
  
  document.addEventListener('click', handleClick, false);
  

const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});



function openNav(){
    document.getElementById('nav').style.width = "100%";
}

function closeNav(){
    document.getElementById('nav').style.width = "0%";
}


