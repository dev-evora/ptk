/* eslint-disable operator-linebreak */
/* eslint-disable no-inner-declarations */

const viewportFix = (width) => {
  const meta = $('meta[name="viewport"]');
  meta.attr('content', 'user-scalable=no, width=' + (screen.width <= width ? width : 'device-width'));
};

viewportFix(475);

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
      slidesPerView: 6,
      direction: 'vertical',
      breakpoints: {
        1200: {
          slidesPerView: 7,
        },
      },
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
  spaceBetween: 20,
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.product-next',
    prevEl: '.product-prev',
  },
  pagination: {
    el: '.product-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      spaceBetween: 30,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

const workThumbs = new Swiper('.work-second', {
  observer: true,
  observeParents: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.work-next',
    prevEl: '.work-prev',
  },
  pagination: {
    el: '.work-pagination',
    clickable: true,
  },
});

const workMain = new Swiper('.work-main', {
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.work-next',
    prevEl: '.work-prev',
  },
  thumbs: {
    swiper: workThumbs,
  },
});

const uniqSlider = new Swiper('.uniq-slider', {
  observer: true,
  observeParents: true,
  watchSlidesProgress: true,
  spaceBetween: 20,
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.uniq-next',
    prevEl: '.uniq-prev',
  },
  pagination: {
    el: '.uniq-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      spaceBetween: 30,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

$('.section-tabs li').click(function () {
  const id = $(this).attr('data-id');

  $('.section-tabs li').removeClass('active');
  $('.section-tabs li[data-id=' + id + ']').addClass('active');

  $('.section-tab').removeClass('active');
  $('.section-tab[data-id=' + id + ']').addClass('active');
});

const goodsThumbs = new Swiper('.goods-gallery__thumbs', {
  observer: true,
  observeParents: true,
  watchSlidesProgress: true,
  spaceBetween: 15,
  slidesPerView: 4,
  direction: 'vertical',
});

const goodsMain = new Swiper('.goods-gallery__main', {
  watchSlidesProgress: true,
  thumbs: {
    swiper: goodsThumbs,
  },
});

if ($('body').width() >= 768) {
  $('.js-dropdown').hover(function () {
    const dropdown = $(this).attr('data-dropdown');
    $('.header-dropdown[data-dropdown=' + dropdown + ']').slideDown(200);
  });

  $('.header-dropdown').mouseleave(function () {
    $(this).slideUp(200);
  });

  $('.header-dropdown__menu li').hover(function () {
    const dropdown = $(this).attr('data-submenu');
    if ($(this).hasClass('js-submenu')) {
      $('.header-dropdown__submenu[data-submenu=' + dropdown + ']').fadeIn(200);
    } else {
      $('.header-dropdown__submenu').fadeOut(200);
    }
  });

  $('.header-dropdown__submenu').mouseleave(function () {
    $(this).fadeOut(200);
  });
} else {
  $('.js-dropdown[data-dropdown=menu]').click(function () {
    $('.header-dropdown[data-dropdown=menu]').slideToggle(200);
  });
}

// CONSTRUCTOR

let image = $('.constructor-type input:checked + img').attr('src');
$('.constructor-decor__house').attr('style', 'background-image: url(' + image + ')');

$('.constructor-type input').change(function () {
  if ($(this).prop('checked')) {
    image = $('+ img', this).attr('src');
  }
  $('.constructor-decor__house').attr('style', 'background-image: url(' + image + ')');
});

let title = $('.constructor-el__type input:checked').attr('data-title');
let text = $('.constructor-el__type input:checked').attr('data-text');
$('.constructor-el__title .title-md').text(title);
$('.constructor-el__title p').text(text);

$('.constructor-el__type input').change(function () {
  if ($(this).prop('checked')) {
    title = $(this).attr('data-title');
    text = $(this).attr('data-text');
  }
  $('.constructor-el__title .title-md').text(title);
  $('.constructor-el__title p').text(text);
});

const calcAmount = () => {
  $('.constructor-calc__amount').each(function (i, item) {
    const min = 1;
    let val = Number($('> input', item).val());

    $('> input', item).change(function () {
      val = Number($(this).val());
    });

    $('> .minus', item).click(function () {
      if (val <= min && !$(this).hasClass('none')) {
        $(this).parent().parent().remove();
      }
      val--;
      $('> input', item).val(val);
      calc();
    });

    $('> .plus', item).click(function () {
      val++;
      $('> input', item).val(val);
      calc();
    });
  });
};

const addCalc = (type) => {
  $('.item-zero[data-type=' + type + ']')
    .clone()
    .appendTo('.item-list[data-type=' + type + ']')
    .removeClass('item-zero')
    .addClass('item-single');

  calcAmount();
};

$('.constructor-calc__add').click(function () {
  const type = $(this).attr('data-type');
  addCalc(type);
  calc();
});

function calc() {
  calcWall();
  calcWindow();
  calcDoor();
  calcCorner();
}

$(document).on('change', '.item-single[data-type="wall"] input', function () {
  calcWall();
});

$(document).on('change', '.item-single[data-type="window"] input', function () {
  calcWindow();
});

$(document).on('change', '.item-single[data-type="door"] input', function () {
  calcDoor();
});

function calcWall() {
  const resSum = [];
  const perimeter = [];

  $('.item-single[data-type="wall"]').each(function (i, item) {
    const width = $('.width', item).val();
    const height = $('.height', item).val();
    const amount = $('.amount', item).val();

    const formula = width * height * amount;

    const res = $('.res', item);
    res.val(formula);

    res.each(function (i, el) {
      resSum.push(Number($(el).val()));
    });

    const per = width * amount;
    perimeter.push(per);
  });

  const summa = resSum.reduce(function (prev, next) {
    return prev + next;
  }, 0);
  $('#wall').text(summa);

  const per = perimeter.reduce(function (prev, next) {
    return prev + next;
  }, 0);
  $('#perimeter').text(per);
}

function calcWindow() {
  const resSum = [];
  const amountSum = [];

  $('.item-single[data-type="window"]').each(function (i, item) {
    const width = $('.width', item).val();
    const height = $('.height', item).val();
    const amount = $('.amount', item).val();

    const formula = width * height * amount;

    const res = $('.res', item);
    res.val(formula);

    res.each(function (i, el) {
      resSum.push(Number($(el).val()));
    });

    $('.amount', item).each(function (i, el) {
      amountSum.push(Number($(el).val()));
    });
  });

  const summa = resSum.reduce(function (prev, next) {
    return prev + next;
  }, 0);
  $('#window').text(summa);

  const amount = amountSum.reduce(function (prev, next) {
    return prev + next;
  }, 0);
  $('#windowSum').text(amount);
}

function calcDoor() {
  const resSum = [];
  const amountSum = [];

  $('.item-single[data-type="door"]').each(function (i, item) {
    const width = $('.width', item).val();
    const height = $('.height', item).val();
    const amount = $('.amount', item).val();

    const formula = width * height * amount;

    const res = $('.res', item);
    res.val(formula);

    res.each(function (i, el) {
      resSum.push(Number($(el).val()));
    });

    $('.amount', item).each(function (i, el) {
      amountSum.push(Number($(el).val()));
    });
  });

  const summa = resSum.reduce(function (prev, next) {
    return prev + next;
  }, 0);
  $('#door').text(summa);

  const amount = amountSum.reduce(function (prev, next) {
    return prev + next;
  }, 0);
  $('#doorSum').text(amount);
}

function calcCorner() {
  const amountSum = [];

  $('.item-single[data-type="corner"]').each(function (i, item) {
    const amount = $('.amount', item).val();
    $('.amount', item).each(function (i, el) {
      amountSum.push(Number($(el).val()));
    });
  });

  const amount = amountSum.reduce(function (prev, next) {
    return prev + next;
  }, 0);
  $('#cornerSum').text(amount);
}

$('.constructor-file__upload input').change(function () {
  const names = [];
  const sizes = [];

  for (let i = 0; i < $(this).get(0).files.length; ++i) {
    names.push($(this).get(0).files[i].name);
    const size = $(this).get(0).files[i].size / 1000000;
    sizes.push(size.toFixed(2));
  }

  $('.order-constructor__files').empty();

  names.forEach((value, index) => {
    $('.order-constructor__files').append(
      '<li>' + names.slice(index, index + 1) + '<span>(' + sizes[index] + ' МБ)</span></li>'
    );
  });
});

$('.header-icons__search').click(function () {
  $('.header-search').fadeIn(200);
});

const animPromo = () => {
  const elem = $('.promo');
  const pos = elem.offset();
  const elemLeft = pos.left;
  const elemTop = pos.top;
  const elemWidth = elem.width();
  const elemHeight = elem.height();

  let xCenter;
  let yCenter;

  $('body').mousemove(function (e) {
    xCenter = elemWidth / 2 - (e.pageX - elemLeft);
    yCenter = elemHeight / 2 - (e.pageY - elemTop);

    const speed = -2;
    let xPos = Math.round(((-1 * xCenter) / 20) * speed);
    let yPos = Math.round((yCenter / 20) * speed);

    if (xPos > 150) xPos = 150;
    if (yPos > 150) yPos = 150;

    $('.promo-img').css('transform', 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0px)');
  });
};

animPromo();
