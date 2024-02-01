(() => {
  document.addEventListener('DOMContentLoaded', () => {

    // case slider
    $('.case__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      prevArrow: false,
      nextArrow: '<button type="button" id="case__slider__btn" class="slick-next"><svg width="24" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l20 20L2 42" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
    });

    // case slide margin
    $(document).ready(function () {
      var slider = $('.case__slider');

      slider.slick();

      slider.find('.slick-slide').css('margin', '0 100px 0 0');

      slider.slick('setPosition');
    });

    // case tab
    document.getElementById("case__tab1").addEventListener("click", function () {
      document.getElementById("case__tab1").classList.add("active");
      document.getElementById("case__tab2").classList.remove("active");

      document.getElementById("case__slider1").classList.add("active");
      document.getElementById("case__slider2").classList.remove("active");
    });

    document.getElementById("case__tab2").addEventListener("click", function () {
      document.getElementById("case__tab2").classList.add("active");
      document.getElementById("case__tab1").classList.remove("active");

      document.getElementById("case__slider1").classList.remove("active");
      document.getElementById("case__slider2").classList.add("active");
    });

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
            slidesToScroll: 1
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
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M2 2L8 8L2 14" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
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


          // calculator
          let price = document.getElementById("pre-price");
          let slider = document.getElementById("range");
          let output = document.getElementById("calc");

          let endPrice;

          if (calcId == 'econom') endPrice = 45000;
          if (calcId == 'basic') endPrice = 50000;
          if (calcId == 'standart') endPrice = 60000;
          if (calcId == 'premium') endPrice = 75000;

          output.value = slider.value;
          slider.value = output.value;

          slider.oninput = function () {
            output.value = this.value;
            price.innerHTML = slider.value * endPrice;
          }

          output.oninput = function () {
            slider.value = this.value;
            price.innerHTML = slider.value * endPrice;
          };
        });
      });
    })();

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

  });
})();