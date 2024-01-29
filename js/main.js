(() => {
  document.addEventListener('DOMContentLoaded', () => {

    $('.case__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      prevArrow: false,
      nextArrow: '<button type="button" id="case__slider__btn" class="slick-next"><svg width="24" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l20 20L2 42" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
    });

    $(document).ready(function () {
      var slider = $('.case__slider');

      slider.slick();

      slider.find('.slick-slide').css('margin', '0 100px 0 0');

      slider.slick('setPosition');
    });

    $('.stages__slider').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M8 2L2 8L8 14" stroke="#A7A7A7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M2 2L8 8L2 14" stroke="#A7A7A7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
    });

    $('.projects__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M8 2L2 8L8 14" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M2 2L8 8L2 14" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
    });

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

    (function () {
      var calTab = document.querySelectorAll('.calculation__tab-item'),
        active = document.getElementsByClassName('tab__active');

      Array.from(calTab).forEach(function (item, i, calTab) {
        item.addEventListener('click', function (e) {
          if (active.length > 0 && active[0] !== this)
            active[0].classList.remove('tab__active');

          this.classList.toggle('tab__active');
        });
      });
    })();

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

    let price = document.getElementById("pre-price");
    let slider = document.getElementById("range");
    let output = document.getElementById("calc");

    let basic = 50000;

    output.value = slider.value;
    slider.value = output.value;

    slider.oninput = function () {
      output.value = this.value;
      price.innerHTML = slider.value * basic;
    }

    output.oninput = function () {
      slider.value = this.value;
      price.innerHTML = slider.value * basic;
    };

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