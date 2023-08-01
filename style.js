$.fn.commentCards = function () {
  return this.each(function () {
    var $this = $(this),
      $cards = $this.find('.card'),
      $current = $cards.filter('.card--current'),
      $next;

    $cards.on('click', function () {
      if (!$current.is(this)) {
        const offset = $('section').first().offset();
        $('html').animate({ scrollTop: offset.top - 100 }, 200);
        $cards.removeClass('card--current card--out card--next card--up');
        $current = $(this).addClass('card--current');
        $next = $current.next();
        $next = $next.length ? $next.addClass('card--next') : $cards.first().addClass('card--next');
        $next.next().length ? $next.next().addClass('card--out') : $cards.first().addClass('card--out');
      } else {
        if ($('.card--up').is(this)) {
          $next = $cards.filter('.card--next');
          const offset = $('section').first().offset();
          $('html').animate({ scrollTop: offset.top - 100 }, 200);
          $cards.removeClass('card--current card--out card--next card--up');
          $current = $next.addClass('card--current');
          $next = $current.next().length ? $current.next().addClass('card--next') : $cards.first().addClass('card--next');
          $next.next().length ? $next.next().addClass('card--out') : $cards.first().addClass('card--out');
        }
      }
    });

    $('container > footer').hover(
      function () {
        $('#snackbar').html('다음 페이지');
        $current.addClass('card--up');
        $('#snackbar').removeClass('hide');
        $('#snackbar').addClass('show');
      },
      function () {
        $current.removeClass('card--up');
        $('#snackbar').removeClass('show');
        $('#snackbar').addClass('hide');
      },
    );

    if (!$current.length) {
      $current = $cards.last();
      $cards.first().trigger('click');
    }

    $this.addClass('cards--active');
  });
};

$('.cards').commentCards();

/** Second Page */
$('.detail').fadeOut();
$('.simple').click(function () {
  var $detail = $(this).next();
  if ($detail.css('display') == 'none') {
    $('.detail').fadeOut();
    $detail.fadeIn();
  }
});

$('.simple').hover(
  function () {
    var $details = $('.detail'),
      $flag = false,
      i;

    for (i = 0; i < $details.length; i++) {
      if ($($details[i]).css('display') == 'block') {
        $flag = true;
      }
    }

    if ($flag == false) {
      $('#snackbar').html('자세히 보기');
      $('#snackbar').removeClass('hide');
      $('#snackbar').addClass('show');
    }
  },
  function () {
    $('#snackbar').removeClass('show');
    $('#snackbar').addClass('hide');
  },
);

$('.close').click(function () {
  $('.detail').fadeOut();
});
