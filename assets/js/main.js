
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

/** 
 * Search 
*/
function searchFunction() {
  // var searchTerm = document.getElementById("searchInput").value;
  // do something with the searchTerm

  var searchTerm = $("#searchInput").val();
  
}

$("#search-icon-svg").on("click", function(e){

  e.preventDefault();

  var form = $("#search-form");
  var input = $("#searchInput");
  var button = $("#submit-button");
  var searchIcon = $("#search-icon-svg");

  // $(this).hide();
  input.show();
  // input.toggle({ direction: "left" }, 15000);
  button.css({
              "position":"absolute",
              "background":"#21579C",
            });

  searchIcon.css({"fill":"white"});

});



/** Carousel
*/
var carouselIndex = 0;
var carouselImages;

window.onload = function() {
    carouselImages = document.querySelectorAll(".carousel-container img");
    carouselImages[carouselIndex].style.display = "block";
    setInterval(nextImage, 60000); // call the nextImage function every 3 seconds
    var prevBtn = document.getElementById("prev-arrow");
    prevBtn.addEventListener("click", prevImage);
    var nextBtn = document.getElementById("next-arrow");
    nextBtn.addEventListener("click", nextImage);
}

function prevImage() {
    carouselImages[carouselIndex].style.display = "none";
    carouselIndex--;
    if(carouselIndex < 0) {
        carouselIndex = carouselImages.length - 1;
    }
    carouselImages[carouselIndex].style.display = "block";
}

function nextImage() {
    carouselImages[carouselIndex].style.display = "none";
    carouselIndex++;
    if(carouselIndex >= carouselImages.length) {
        carouselIndex = 0;
    }
    carouselImages[carouselIndex].style.display = "block";
}

function acceptCookies() {
  document.cookie = "cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
  document.getElementById("cookies").style.display = "none";
}
/**
 * 
 * Login / Registration
 */

  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

    /**
     * Skills animation
     */
    let skilsContent = select('.skills-content');
    if (skilsContent) {
      new Waypoint({
        element: skilsContent,
        offset: '80%',
        handler: function(direction) {
          let progress = select('.progress .progress-bar', true);
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%'
          });
        }
      })
    }

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()