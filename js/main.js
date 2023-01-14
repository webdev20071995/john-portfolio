const elLoader = document.querySelector(".js-loader");
elToggler = document.querySelector(".js-toggler"),
elSitenav = document.querySelector(".js-sitenav");

// LOADER
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    elLoader.classList.add("loader-wrapper--none")
  }, 800);
});