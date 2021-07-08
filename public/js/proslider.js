$(document).ready(function () {
  $(".product_slider").owlCarousel({
    items: 4,
    nav: true,
    navText: [
      "<i class='fas fa-angle-left'></i>",
      "<i class='fas fa-angle-right'></i>",
    ],
    dots: false,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1150: {
        items: 3,
      },
      1500: {
        items: 4,
      },
    },
  });
});
