$('document').ready(() => {
  $('.arg-vid-slider').slick({
    vertical: true,
    slidesToShow: 2,
    infinite: false,
    arrows: false,
  });
  const createSlider = (cls) => {
    $(cls).slick({
      slidesToShow: 5,
      infinite: true,
      arrows: true,
      centerMode: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,

          }
        },
      ]
    });

    if(window.innerWidth > 1100) {
      $(cls).on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(`${cls} .slick-slide`).removeClass('slick-active-center');
        $(`${cls} .slick-active`).eq(2).addClass('slick-active-center');
      }).trigger('afterChange');
    }
    
  }

  createSlider('#experts-slider');
  createSlider('#experts-slider2');
  
  $('a[data-slide]').click(function (e) {
    e.preventDefault();

    const slideno = $(this).data('slide');
    // const count = $('a[data-slide]').length;
    $('.item__badge').removeClass('active');
    $('.item__desc').removeClass('active');
    $(this).find('.item__badge').addClass('active');
    $(this).find('.item__desc').addClass('active');
    // console.log($('.site .q')[1]);
    console.log($('.site img').height());
    switch (+slideno) {
      case 2:
        return fnGoTOSlide(80);
      case 3:
        return fnGoTOSlide(180);
      case 4:
        return fnGoTOSlide(700);
      case 5:
        return fnGoTOSlide(820);
      case 6:
        return fnGoTOSlide(1300);
      case 7:
        return fnGoTOSlide(3500);
      case 8:
        return fnGoTOSlide(3180);
      // return fnGoTOSlide($('.site img').height());
      default:
        return fnGoTOSlide(0);
    }

    function fnGoTOSlide(n) {
      // $('.site').animate({ scrollTop: $('.site').scrollTop() + n });
      $('.site').animate({
        scrollTop: n,
      });
    }

    // $('.arg-vid-slider').slick(
    //   'slickGoTo',
    //   +slideno > 3 ? slideno - 2 : slideno - 1
    // );
  });

  $('.slideRev').slick({
    infinite: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,

        }
      },
    ]
  });
});
