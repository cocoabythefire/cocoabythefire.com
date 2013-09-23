$(function () {
  var header = $('body#static_pages.index section.header');
  var nav = $('body#static_pages.index nav');
  var header_bottom = header.offset().top + header.height();
  var nav_top = nav.offset().top;
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

    if (scroll > nav_top && !nav.hasClass('sticky')) {
      // console.log('yay! hello lovie');
      nav.addClass('sticky');
    }
    else if (scroll <= nav_top && nav.hasClass('sticky')) {
      nav.removeClass('sticky');
    }
  });
});