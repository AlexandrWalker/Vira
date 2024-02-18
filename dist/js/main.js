(() => {
  document.addEventListener('DOMContentLoaded', () => {

    // Menu
    (function () {
      var menuLink = document.querySelectorAll('.menu__dropdown'),
        active = document.getElementsByClassName('menu-active');

      Array.from(menuLink).forEach(function (item, i, menuLink) {
        item.addEventListener('click', function (e) {
          if (active.length > 0 && active[0] !== this)
            active[0].classList.remove('menu-active');

          this.classList.toggle('menu-active');
        });
      });
    })();

    // Burger
    (function () {
      var burgerBtn = document.getElementById('burger');
      var menu = document.getElementById('menu');
      var header = document.getElementById('header');

      burgerBtn.addEventListener('click', function (e) {
        burgerBtn.classList.toggle('active');
        burgerBtn.parentNode.classList.toggle('active');
        menu.classList.toggle('active');
        menu.parentNode.classList.toggle('active');
        header.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
      });
    })();

    // Projects-info
    (function () {
      document.querySelectorAll('.projects__options-info').forEach((element) => {
        element.addEventListener('click', () => {
          element.parentNode.classList.toggle('show');
        });
      });
    })();

    // case slider
    $('.case__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      prevArrow: false,
      nextArrow: '<button type="button" id="case__slider__btn" class="slick-next"><svg width="24" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l20 20L2 42" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            nextArrow: '<button type="button" id="case__slider__btn" class="slick-next"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L12 12L2 22" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
          }
        }
      ]
    });

    // case slide margin
    $(document).ready(function () {
      var slider = $('.case__slider');

      slider.slick();

      slider.find('.slick-slide').css('margin', '0 100px 0 0');

      slider.slick('setPosition');
    });

    // case tab
    (function () {
      const case__tab1 = document.getElementById("case__tab1");
      const case__tab2 = document.getElementById("case__tab2");
      const case__slider1 = document.getElementById("case__slider1");
      const case__slider2 = document.getElementById("case__slider2");

      case__tab1.addEventListener("click", function () {
        case__tab1.classList.add("active");
        case__tab2.classList.remove("active");

        case__slider1.classList.add("active");
        case__slider2.classList.remove("active");
      });

      case__tab2.addEventListener("click", function () {
        case__tab1.classList.remove("active");
        case__tab2.classList.add("active");

        case__slider1.classList.remove("active");
        case__slider2.classList.add("active");
      });
    })();

    // stages slider
    $('.stages__slider').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M8 2L2 8L8 14" stroke="#A7A7A7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M2 2L8 8L2 14" stroke="#A7A7A7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1
          }
        }
      ]
    });

    // projects slider
    $('.projects__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M8 2L2 8L8 14" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M2 2L8 8L2 14" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    });

    // payment slider
    $('.payment__slider').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 3.2,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 660,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    });

    // calculater tab
    (function () {
      var calсTab = document.querySelectorAll('.calculation__tab-item'),
        calcItem = document.querySelectorAll('.calculation__content-item'),
        calcShow = document.getElementsByClassName('calculation__show'),
        show = document.getElementsByClassName('show');

      Array.from(calсTab).forEach(function (item, i, calсTab) {

        item.addEventListener('click', function (e) {
          if (show.length > 0 && show[0] !== this)
            show[0].classList.remove('show');

          this.classList.add('show');

          Array.from(calcItem).forEach(function (item, i, calcItem) {
            if (calcShow.length > 0 && calcShow[0] !== this)
              calcShow[0].classList.remove('calculation__show');
          });

          let calcId = this.getAttribute('data-id');
          document.getElementById(calcId).classList.add('calculation__show');

          calculator(calcId);
        });
      });
    })();

    // calculator
    function calculator(calcId) {
      let price = document.getElementById("pre-price");
      let slider = document.getElementById("range");
      let output = document.getElementById("calc");

      if (calcId == 'econom') var endPrice = 45000;
      if (calcId == 'basic') var endPrice = 50000;
      if (calcId == 'standart') var endPrice = 60000;
      if (calcId == 'premium') var endPrice = 75000;

      output.value = slider.value;
      slider.value = output.value;

      slider.oninput = function () {
        output.value = this.value;
        let priceValue = slider.value * endPrice;

        function space(priceValue) {
          var point = "";
          var x = String(priceValue).replace(/(\.|,)\d+/, function (m) { point = m; return ""; });

          x = x.split("").reverse().join("")
            .replace(/(\d{3})/g, "$1 ")
            .split("").reverse().join("");
          return x + point;
        }

        price.innerHTML = space(priceValue);
      }

      output.oninput = function () {
        slider.value = this.value;
        price.innerHTML = slider.value * endPrice;
      };
    };

    calculator('econom');

    // blog slider
    $('.blog__slider').slick({
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      swipe: false,
      speed: 0,
      asNavFor: '.blog__list',
      responsive: [
        {
          breakpoint: 769,
          settings: {
            dots: true,
            swipe: true,
            fade: true,
            speed: 300
          }
        }
      ]
    });

    $('.blog__list').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      asNavFor: '.blog__slider',
    });

    // faq accardion
    (function () {
      var faqItem = document.querySelectorAll('.faq__item'),
        active = document.getElementsByClassName('faq__item-active');

      Array.from(faqItem).forEach(function (item, i, faqItem) {
        item.addEventListener('click', function (e) {
          if (active.length > 0 && active[0] !== this)
            active[0].classList.remove('faq__item-active');

          this.classList.toggle('faq__item-active');
        });
      });
    })();

    // command slider
    $('.command__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M8 2L2 8L8 14" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M2 2L8 8L2 14" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
    });

    // services slider
    $('.services__items').slick({
      responsive: [
        {
          breakpoint: 9999,
          settings: "unslick"
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.15,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    });

    // filter dropdown
    (function () {
      document.querySelectorAll('.filter__btn').forEach((el) => {
        el.addEventListener('click', () => {
          el.classList.toggle('filter__btn-active');
          el.parentNode.classList.toggle('filter__item-active');

          let parentElement = el.parentNode;

          parentElement.querySelectorAll('.filter__list-link').forEach((elem) => {
            elem.addEventListener('click', () => {
              let dataValue = elem.getAttribute('data-value');

              if (isNaN(dataValue)) {
                el.innerHTML = dataValue;
              } else {
                el.innerHTML = "Показать: " + dataValue;
              }

              el.setAttribute('data-value', dataValue);

              el.classList.remove('filter__btn-active');
              el.parentNode.classList.remove("filter__item-active");
            });
          });
        });

        el.addEventListener('click', event => {
          event._isClickWithInMenu = true;
        });
        document.body.addEventListener('click', event => {
          if (event._isClickWithInMenu) return;
          el.classList.remove('filter__btn-active');
          el.parentNode.classList.remove("filter__item-active");
        });
      });
    })();

  });
})();