$(function () {
  var parallax = (function() {
    var header = $('body#static_pages.index section.header');
    var header_bottom = header.offset().top + header.height();

    return {
      update: function(opts) {
        opts = opts || {};
        var scroll = opts.scroll || $(document).scrollTop();
        if (scroll <= header_bottom) {
          var percentVisible = (header_bottom - scroll) / header_bottom;
          // y begins at 50% and increases a bit based on space available
          var yOffsetInitial = 50;
          var yOffsetDelta = 30;
          var yOffset = (yOffsetInitial + yOffsetDelta * (1 - percentVisible)) + '%';
          header.css({'background-position': '50% ' + yOffset});
        }
      }
    };
  })();

  var stickyNavigation = (function() {
    var nav = $('body#static_pages.index nav');
    var navTop = null;

    return {
      update: function(opts) {
        opts = opts || {};
        var scroll = opts.scroll || $(document).scrollTop();
        var force = opts.force;

        // for some reason the value of the offset wasn't right when calculated
        // before the first scroll event. this was seen in Safari 6.0.5 on OS
        // X 10.8.4 and was not tested on other browsers.
        if (!navTop || force) {
          nav.removeClass('sticky');
          navTop = nav.offset().top;
        }
        if (scroll > navTop && !nav.hasClass('sticky')) {
          nav.addClass('sticky');
        }
        else if (scroll <= navTop && nav.hasClass('sticky')) {
          nav.removeClass('sticky');
        }
      }
    };
  })();

  var navigationActiveSection = (function() {
    var name = 'story';

    return {
      update: function(opts) {
        opts = opts || {};
        var scroll = opts.scroll || $(document).scrollTop();
        var scrollBottom = scroll + $(window).height();

        var element = $('body#static_pages.index section.' + name);
        console.log(scrollBottom + ' ' + element.offset().top);

        // TODO: remove class active from everything
        if (scrollBottom - 100 > element.offset().top) {
          console.log('adding');
          $('nav li.' + name + ' a').addClass('active');
        }
      }
    };
  })();

  $(document).scroll(function(event) {
    var scroll = $(document).scrollTop();
    parallax.update({ 'scroll': scroll });
    stickyNavigation.update({ 'scroll': scroll });
    navigationActiveSection.update({ 'scroll': scroll });
  });
  $(window).resize(function() {
    stickyNavigation.update({ 'force': true });
  });

  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 400);
  });
});

