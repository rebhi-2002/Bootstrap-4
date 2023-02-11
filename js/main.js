$(function () {
  ("use strict");
  // Adjust Slider Height
  var winH = $(window).height(), // document.documentElement.clientHeight
    upperH = $(".upper-bar").innerHeight(), // document.querySelector(".upper-bar").scrollHeight
    navH = $(".navbar").innerHeight(); // document.querySelector(".navbar").scrollHeight
  $(".slider, .carousel-item").height(winH - (upperH + navH));

  // Featured Work Shuffle
  $(".featured-work ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") === "all") {
      $(".shuffle-imgs .col-md").css("opacity", 1);
    } else {
      $(".shuffle-imgs .col-md").css("opacity", ".08");
      $($(this).data("class")).parent().css("opacity", 1);
    }
  });
});

// document.querySelectorAll(".featured-work ul li").forEach((li) => {
//   li.addEventListener("click", function () {
//     document.querySelectorAll(".featured-work ul li").forEach((e) => {
//       e.classList.remove("active");
//     });
//     li.classList.add("active");
//   });
// });
