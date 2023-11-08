document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    pagination: false,
    width: "100%",
    padding: "0",
    trimSpace: true,
  });
  splide.mount();
});
