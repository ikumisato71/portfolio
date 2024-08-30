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

// リップルを追加
$(document).ready(function () {
  try {
    $(".mv-photo").ripples({
      resolution: 512,
      dropRadius: 20, //px
      perturbance: 0.04,
    });
    $(".mv-photo").ripples({
      resolution: 128,
      dropRadius: 10, //px
      perturbance: 0.04,
      interactive: false,
    });
  } catch (e) {
    $(".error").show().text(e);
  }

  $(".js-ripples-disable").on("click", function () {
    $(".mv-photo").ripples("destroy");
    $(this).hide();
  });

  $(".js-ripples-play").on("click", function () {
    $(".mv-photo").ripples("play");
  });

  $(".js-ripples-pause").on("click", function () {
    $(".mv-photo").ripples("pause");
  });

  // Automatic drops
  setInterval(function () {
    var $el = $(".mv-photo");
    var x = Math.random() * $el.outerWidth();
    var y = Math.random() * $el.outerHeight();
    var dropRadius = 20;
    var strength = 0.04 + Math.random() * 0.04;

    $el.ripples("drop", x, y, dropRadius, strength);
  }, 400);
});
