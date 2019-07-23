$(function () {
  $('.open-modal').click(function () {
    $('body').addClass('overlay');
    $(`#${$(this).data('modal-id')}`).addClass('opened');
  });

  $('.close-modal').click(function () {
    $('body').removeClass('overlay');
    $(this).parents('.modal-box').removeClass('opened');
  });
});
