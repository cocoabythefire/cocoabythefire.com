$(function () {
  var header = $('body#static_pages.index section.header');
  var nav = $('body#static_pages.index nav');
  var header_bottom = header.offset().top + header.height();
  var navTop = null;
  $(document).scroll(function(event) {
    var scroll = $(document).scrollTop();
    if (scroll <= header_bottom) {
      var percentVisible = (header_bottom - scroll) / header_bottom;
      // y begins at 50% and increases a bit based on space available
      var yOffsetInitial = 50;
      var yOffsetDelta = 30;
      var yOffset = (yOffsetInitial + yOffsetDelta * (1 - percentVisible)) + '%';
      header.css({'background-position': '50% ' + yOffset});
    }

    // for some reason the value of the offset wasn't right when calculated
    // before the first scroll event. this was seen in Safari 6.0.5 on OS
    // X 10.8.4 and was not tested on other browsers.
    if (!navTop) { navTop = nav.offset().top; }
    if (scroll > navTop && !nav.hasClass('sticky')) {
      nav.addClass('sticky');
    }
    else if (scroll <= navTop && nav.hasClass('sticky')) {
      nav.removeClass('sticky');
    }
  });
});