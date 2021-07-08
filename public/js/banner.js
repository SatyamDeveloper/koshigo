$(document).ready(function () {
  $(".banner-slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: ["<svg viewBox='0 0 256 512'><path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'/></svg>", "<svg viewBox='0 0 256 512'><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'/></svg>"],
    responsive: {
      0: {
        dots: false,
      },
      700: {
        dots: true,
      }
    }
  })
})