$(function () {
  var element = $('body#static_pages.index section.header');
  var bottom = element.offset().top + element.height();
  $(document).scroll(function(event) {
    var scroll = $(document).scrollTop();
    if (scroll <= bottom) {
      var percentVisible = (bottom - scroll) / bottom;
      // y begins at 50% and increases a bit based on space available
      var yOffsetInitial = 50;
      var yOffsetDelta = 30;
      var yOffset = (yOffsetInitial + yOffsetDelta * (1 - percentVisible)) + '%';
      element.css({'background-position': '50% ' + yOffset});
    }
  });
});