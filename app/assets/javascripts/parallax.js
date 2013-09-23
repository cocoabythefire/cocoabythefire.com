$(function () {
  $(document).scroll(function(event) {
    var element = $('body#static_pages.index section.header');
    var scroll = $(document).scrollTop();
    var bottom = element.offset().top + element.height();
    var percentVisible = (bottom - scroll) / bottom;
    // y begins at 50% and increases a bit based on space available
    var yOffset = (50 + 20 * (1 - percentVisible)) + '%';
    element.css({'background-position': '50% ' + yOffset});
  });
});