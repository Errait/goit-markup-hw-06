$('.mobile-menu-button').on('click', function() {
  $('.mobile-menu-overlay').addClass('is-open');
});

$('.mobile-exit-button').on('click', function() {
  $('.mobile-menu-overlay').removeClass('is-open');
});