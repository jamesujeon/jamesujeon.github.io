var lastScrollTop = 0;

function setupScrollToTopButton() {
  var topButton = $('#scrollToTop');
  topButton.hide();
  topButton.click(function() {
    $('html, body').animate({ scrollTop: 0 }, 200);
    return false;
  });

  $(window).scroll(function() {
    if ($('html, body').scrollTop() > 100 && $('html, body').scrollTop() < lastScrollTop) {
      topButton.fadeIn(200);
    } else {
      topButton.fadeOut(200);
    }

    lastScrollTop = $('html, body').scrollTop();
  });
}
