$(function () {
  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 300);
    return false;
  });
});

const button = document.getElementsByClassName("mv-container")[0];

button.addEventListener("mousemove", (e) => {
  const rect = button.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / button.clientWidth) * 100;
  const y = ((e.clientY - rect.top) / button.clientHeight) * 100;

  button.style.background = `radial-gradient(circle closest-corner 
    at ${x}% ${y}%,
    var(--ripple-color), var(--bg-color))`;
});

button.addEventListener("mouseleave", (event) => {
  button.style.removeProperty("background");
});
