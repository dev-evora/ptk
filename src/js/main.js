/* eslint-disable operator-linebreak */
/* eslint-disable no-inner-declarations */

// const viewportFix = (width) => {
//   const meta = $('meta[name="viewport"]');
//   meta.attr('content', 'user-scalable=no, width=' + (screen.width <= width ? width : 'device-width'));
// };

// viewportFix(375);

$('[data-fancybox]').fancybox({
  touch: false,
  autoFocus: false,
  backFocus: false,
  closeExisting: true,
});

const maskPhone = () => {
  const maskedElements = [];
  const el = document.querySelectorAll('.masked');
  if (el.length > 0) {
    const mask = {
      mask: '+7 (000) 000-00-00',
    };
    el.forEach((item) => {
      maskedElements.push(new IMask(item, mask));
    });
  }
  $('.masked').click(function () {
    if ($(this).val() == '') $(this).val('+7 ');
  });
};

maskPhone();

$('.decor-list li').each(function (i, item) {
  $(item).attr('data-id', i);
});

$('.decor-content').each(function (i, item) {
  $(item).attr('data-id', i);
});

$('.decor-list li[data-id=0]').addClass('active');
$('.decor-content[data-id=0]').addClass('active');

$('.decor-list li').click(function () {
  const id = $(this).attr('data-id');

  $('.decor-list li').removeClass('active');
  $('.decor-list li[data-id=' + id + ']').addClass('active');

  $('.decor-content').removeClass('active');
  $('.decor-content[data-id=' + id + ']').addClass('active');
});

if ($('.decor-slider').length) {
  $('.decor-slider').each(function (i, item) {
    $('.decor-slider__thumbs', item).attr('id', 'thumbs-' + i);
    $('.decor-slider__main', item).attr('id', 'main-' + i);
  });

  $('.decor-slider').each(function (i, item) {
    const thumbs = new Swiper('.decor-slider__thumbs#thumbs-' + i, {
      observer: true,
      observeParents: true,
      watchSlidesProgress: true,
      spaceBetween: 20,
      slidesPerView: 7,
      direction: 'vertical',
    });

    const main = new Swiper('.decor-slider__main#main-' + i, {
      watchSlidesProgress: true,
      thumbs: {
        swiper: thumbs,
      },
    });
  });
}

const productSlider = new Swiper('.product-slider', {
  observer: true,
  observeParents: true,
  watchSlidesProgress: true,
  spaceBetween: 30,
  slidesPerView: 3,
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.control-next',
    prevEl: '.control-prev',
  },
  pagination: {
    el: '.control-pagination',
    clickable: true,
  },
});
