$(function () {
  $('.open-modal').click(function () {
    event.preventDefault();
    $('body').addClass('overlay');
    $(`#${$(this).data('modal-id')}`).addClass('opened');
  });

  $('.close-modal').click(function () {
    $('body').removeClass('overlay');
    $(this).parents('.modal-box').removeClass('opened');
  });

  $('.photo-cart').click(function () {
    $('.photo-cart.choosed').removeClass('choosed');
    $(this).toggleClass('choosed');
    $(this).css('background', $('.color.choosed').css('background'));
  });

  $('.color').click(function () {
    $('.color.choosed').removeClass('choosed');
    $('.photo-cart.choosed').css('background', $(this).css('background'));
    $(this).addClass('choosed');
  });

  $('.reviews-control').slick({
    asNavFor: '.reviews',
    focusOnSelect: true,
    accessibility: true,
    arrows: true,
    slidesToShow: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    centerMode: true
  });

  $('.reviews').slick({
    asNavFor: '.reviews-control',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });


  $('.round-button.play').click(function () {
    event.preventDefault();

    let videoPreviewId = $(this).data('videoPreview');
    if (!videoPreviewId) { return };

    $('body').addClass('overlay');
    $(`#video-preview-${videoPreviewId}`).addClass('show');
  });

  $('.close-link').click(function () {
    $(this).parents(".video-modal-box").find("iframe").attr('src', $('iframe').attr('src'));
    $(this).parents(".video-modal-box").removeClass('show');
    if ($('.modal-box.opened').length == 0) {
      $('body').removeClass('overlay');
    }
  });

  // TODO remove!! Only for test sample
  (function myLoop(i) {
    setTimeout(function () {
      $('.photo-cart.uploading').find('.percents').text(`${i}%`);
      $('.photo-cart.uploading').find('.progress-value').css('width', `${i}%`);

      i += Math.round(Math.random(8));

      if (i <= 100) {
        myLoop(i)
      } else {
        $('.photo-cart.uploading').removeClass('uploading');
        $('#send-images').removeClass('disabled');
      };
    }, 20)
  })(0);
  // TODO remove!! Only for test sample

});
