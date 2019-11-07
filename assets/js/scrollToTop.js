function setupScrollToTopButton() {
  var topButton = $('#scrollToTop');
  topButton.hide();
  topButton.click(function() {
    topButton.fadeOut(200);
    $('html, body').animate({ scrollTop: 0 }, 200);
    return false;
  });

  var lastScrollTop = 0;
  $(window).scroll(function() {
    if (topButton.is(':animated')) {
      return;
    }

    if ($(this).scrollTop() > 100 && $(this).scrollTop() < lastScrollTop) {
      topButton.fadeIn(200);
    } else {
      topButton.fadeOut(200);
    }

    lastScrollTop = $(this).scrollTop();
  });
}
