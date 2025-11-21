$('.hero-button').on('click', function() {
  $('.modal-overlay').addClass('is-open');
});

$('.modal-exit-button').on('click', function() {
  $('.modal-overlay').removeClass('is-open');
});