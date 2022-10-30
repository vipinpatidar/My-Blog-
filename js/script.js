let nav = document.querySelector(".nav");
let toggleIcon = document.querySelector(".toggle-icons");

toggleIcon.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("collapse");
});

const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  960: {
    items: 3,
  },
};
$(document).ready(function () {
  // owl-Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2500,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    responsive: responsive,
  });
  // click to top
  $(".move-up span").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
});
// Aos
AOS.init();
// let moveUp = document.querySelector(".move-up span");
// moveUp.addEventListener("click", function () {
//   document.documentElement.scrollTop = 0;
//   document.body.scrollTop = 0;
// });
