(function ($) {})(jQuery);

(function ($) {
  "use strict";

  /*  ===================================
        Data Background Image
  ======================================= */
  $("[data-bg-image]").each(function () {
    const img = $(this).data("bg-image");
    $(this).css({
      backgroundImage: `url(${img})`,
    });
  });

  
  /*  ===================================
        Parallax
  ======================================= */
  $(".parallaxie").parallaxie({
    speed: 0.9,
    offset: 0,
  });

  /*  ===================================
        Hover Animation Another
  ======================================= */
  $(".multi-side-hover").each(function () {
    $(this).hoverdir({
      hoverDelay: 5,
    });
  });

  // CustomHeader
  $(".sticky-header").addClass("sticky-on");
})(jQuery);
