$(document).ready(function () {
  /* ------------ STICKY NAV ------------ */
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  /* ------------ SCROLL ON BUTTONS ------------ */
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });
  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  /* ------------ NAVIGATION SCROLL ------------ */
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  /* ------------ ANIMATIONS ON SCROLL ------------ */
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    },
    {
      offset: "50%",
    }
  );

  /* ------------ MOBILE NAV ------------ */
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon ion-icon");

    nav.slideToggle(200);
    if (icon.attr("name") === "menu") {
      icon.attr("name", "close");
    } else {
      icon.attr("name", "menu");
    }
  });

  /* ------------ WINDOW RESIZING DISPLAY ------------ */
  $(window).resize(function () {
    var nav = $(".js--main-nav");

    var icon = $(".js--nav-icon i");

    if ($(window).width() > 767) {
      nav.css("display", "block");

      icon.addClass("ion-close-round");

      icon.removeClass("ion-navicon-round");
    } else {
      nav.css("display", "none");

      icon.addClass("ion-navicon-round");

      icon.removeClass("ion-close-round");
    }
  });
});
