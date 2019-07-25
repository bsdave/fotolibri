$(function () {
  $('.open-modal').click(function () {
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
        $('.button.disabled').removeClass('disabled');
      };
    }, 20)
  })(0);
  // TODO remove!! Only for test sample

});
