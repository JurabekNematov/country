var elChangeThemeDarkOrLightBtn = document.querySelector(".js-theme-toggle");

elChangeThemeDarkOrLightBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
})