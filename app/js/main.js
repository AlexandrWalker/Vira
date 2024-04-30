(() => {
  document.addEventListener('DOMContentLoaded', () => {

    // case slider
    $('.case__slider-1').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: false,
      nextArrow: '<button type="button" class="slick-next"><svg width="24" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l20 20L2 42" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      responsive: [
        {
          breakpoint: 971,
          settings: {
            nextArrow: '<button type="button" class="slick-next"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L12 12L2 22" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
          }
        }
      ]
    });

    $('.case__slider-2').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: false,
      nextArrow: '<button type="button" class="slick-next"><svg width="24" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l20 20L2 42" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      responsive: [
        {
          breakpoint: 971,
          settings: {
            nextArrow: '<button type="button" class="slick-next"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L12 12L2 22" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
          }
        }
      ]
    });

    // stages slider
    $('.stages__slider').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      draggable: true,
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M8 2L2 8L8 14" stroke="#A7A7A7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M2 2L8 8L2 14" stroke="#A7A7A7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      asNavFor: '.stages__content',
      focusOnSelect: true,
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
          breakpoint: 481,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });

    $('.stages__content').slick({
      infinite: false,
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      swipe: false,
      fade: true,
      asNavFor: '.stages__slider',
    });

    // built slider
    $('.built__slider').slick({
      infinite: false,
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
            dots: true,
            centerMode: false,
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

    // command slider
    $('.command__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M8 2L2 8L8 14" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none"><path d="M2 2L8 8L2 14" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            infinite: false,
            slidesToShow: 1.3,
            arrows: false,
            dots: true
          }
        }
      ]
    });

    // projection-composition slider
    $('.projection-composition__slider').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 620,
          settings: {
            infinite: false,
            slidesToShow: 1.15,
            arrows: false,
            dots: true
          }
        }
      ]
    });

    // services slider
    $('.services__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          }
        }
      ]
    });

    // project slider
    $('.project__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      prevArrow: '<button type="button" class="slick-prev"><svg width="24" height="44" viewBox="0 0 24 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L2 22L22 42" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg width="24" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l20 20L2 42" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            prevArrow: '<button type="button" class="slick-prev"><svg width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 2L2 16L16 30" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L16 16L2 30" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
          }
        }
      ]
    });

    // plan slider
    $('.plan__slider').slick({
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      asNavFor: '.plan__list',
    });
    $('.plan__list').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      vertical: true,
      asNavFor: '.plan__slider',
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none"><path d="M14 7L8 2L2 7" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none"><path d="M14 2L8 7L2 2" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            vertical: false,
          }
        }
      ]
    });

    // work slider
    $('.work__slider').slick({
      arrows: false,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      asNavFor: '.work__list',
    });
    $('.work__list').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      vertical: true,
      asNavFor: '.work__slider',
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none"><path d="M14 7L8 2L2 7" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none"><path d="M14 2L8 7L2 2" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      responsive: [
        {
          breakpoint: 769,
          settings: {
            vertical: false,
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 630,
          settings: {
            vertical: false,
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 530,
          settings: {
            vertical: false,
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 530,
          settings: {
            vertical: false,
            slidesToShow: 2,
          }
        }
      ]
    });

    // case tab
    $(function () {
      let case__tab = document.querySelector(".case__tab");
      if (!case__tab) {
        return;
      } else {
        var case__tab1 = document.getElementById("case__tab1"),
          case__tab2 = document.getElementById("case__tab2"),
          case__wrapper_1 = document.querySelector(".slider__wrapper-1"),
          case__wrapper_2 = document.querySelector(".slider__wrapper-2");

        case__tab1.addEventListener("click", function () {
          case__tab1.classList.add("active");
          case__tab2.classList.remove("active");

          case__wrapper_1.classList.add("active");
          case__wrapper_2.classList.remove("active");
          $(".case__slider-1").slick('reinit');
        });

        case__tab2.addEventListener("click", function () {
          case__tab1.classList.remove("active");
          case__tab2.classList.add("active");

          case__wrapper_1.classList.remove("active");
          case__wrapper_2.classList.add("active");
          $(".case__slider-2").slick('reinit');
        });
      }
    });

    // map
    ymaps.ready(function () {
      let mapBlock = document.getElementById('map');
      if (!mapBlock) {
        return;
      } else {
        var map = new ymaps.Map("map", {
          center: [55.743796, 37.647989],
          zoom: 16
        });
        if (map) {
          ymaps.modules.require(['Placemark', 'Circle'], function (Placemark, Circle) {
            var placemark = new Placemark([55.743796, 37.647989], {}, {
              iconLayout: 'default#image',
              iconImageHref: '//f.nodacdn.net/577874',
              iconImageSize: [60, 68],
              iconImageOffset: [-59, -67],
            });

            map.controls.remove('geolocationControl'); // удаляем геолокацию
            map.controls.remove('searchControl'); // удаляем поиск
            map.controls.remove('trafficControl'); // удаляем контроль трафика
            map.controls.remove('typeSelector'); // удаляем тип
            map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
            map.controls.remove('rulerControl'); // удаляем контрол правил
            map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

            map.geoObjects.add(placemark);
          });
        }
      }
    });

    // Fancybox
    $('[data-fancybox="gallery"]').fancybox({
      loop: true,
    });

    // inputmask
    let inputs = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask('+7 (999) 999-99-99');
    im.mask(inputs);

    // Modal
    (function () {
      var close = document.querySelectorAll('.modal__close-btn');
      var openBtn = document.querySelectorAll('.modal-call');

      Array.from(openBtn, openButton => {
        openButton.addEventListener('click', e => {
          let modalId = e.target.getAttribute('data-id');
          document.getElementById(modalId).classList.add("open");

          Array.from(close, closeButton => {
            closeButton.addEventListener('click', e => document.getElementById(modalId).classList.remove("open"));

            window.addEventListener('keydown', (e) => {
              if (e.key === "Escape") {
                document.getElementById(modalId).classList.remove("open")
              }
            });

            document.querySelector(".modal.open .modal__box").addEventListener('click', event => {
              event._isClickWithInModal = true;
            });

            document.getElementById(modalId).addEventListener('click', event => {
              if (event._isClickWithInModal) return;
              event.currentTarget.classList.remove('open');
            });
          });
        });
      });
    })();

    // file
    let inputsFile = document.querySelectorAll('input[type="file"]');
    Array.prototype.forEach.call(inputsFile, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.file__text').innerText;

      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;

        if (countFiles)
          label.querySelector('.file__text').innerText = 'Файлов: ' + countFiles;
        else
          label.querySelector('.file__text').innerText = labelVal;
      });
    });

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
        e.stopPropagation();
      });
    })();

    // sorting
    (function () {
      var sorting = document.getElementById('sorting');
      var sortingBtn = document.getElementById('sortingBtn');
      var sortingClose = document.getElementById('sortingClose');

      if (!sorting) {
        return;
      } else {
        sortingBtn.addEventListener('click', function (e) {
          sorting.classList.toggle('sorting-active');
          document.body.classList.toggle('no-scroll');
        });

        sortingClose.addEventListener('click', function (e) {
          sorting.classList.remove('sorting-active');
          document.body.classList.remove('no-scroll');
        });

        document.getElementById("sorting").addEventListener('click', event => {
          event._isClickWithInMenu = true;
        });
        document.getElementById("sortingBtn").addEventListener('click', event => {
          event._isClickWithInMenu = true;
        });
        document.body.addEventListener('click', event => {
          if (event._isClickWithInMenu) return;
          sorting.classList.remove('sorting-active');
          document.body.classList.remove('no-scroll');
        });
      }
    })();

    // pagination
    (function () {
      let pagination = document.querySelector('.pagination');
      if (!pagination) {
        return;
      } else {
        var pagItem = document.querySelectorAll('.pagination__item-link'),
          pagActive = document.getElementsByClassName('pagination-active');

        Array.from(pagItem).forEach(function (item, i, pagItem) {
          item.addEventListener('click', function (e) {
            if (pagActive.length > 0 && pagActive[0] !== this)
              pagActive[0].classList.remove('pagination-active');

            this.classList.add('pagination-active');

            var paginationFirst = document.querySelector('.pagination-first');
            var paginationLast = document.querySelector('.pagination-last');
            var paginationPrev = document.querySelector('.pagination__prev');
            var paginationNext = document.querySelector('.pagination__next');

            if (!paginationFirst.classList.contains('pagination-active')) {
              paginationPrev.classList.remove('disabled');
            } else {
              paginationPrev.classList.add('disabled');
            }

            if (!paginationLast.classList.contains('pagination-active')) {
              paginationNext.classList.remove('disabled');
            } else {
              paginationNext.classList.add('disabled');
            }
          });
        });
      }
    })();

    // built-info
    (function () {
      document.querySelectorAll('.built__options-info').forEach((element) => {
        element.addEventListener('click', () => {
          element.parentNode.classList.toggle('show');
        });
      });
    })();

    // calculater tab
    (function () {
      let calculation = document.querySelector('.calculation');
      if (!calculation) {
        return;
      } else {
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

            let calcId = this.getAttribute('data-id'),
              calcPrice = this.getAttribute('data-price'),
              sliderRange = document.getElementById("range");

            document.getElementById(calcId).classList.add('calculation__show');
            document.getElementById("pre-price").innerHTML = space(calcPrice * sliderRange.value);

            calculator(calcPrice);
          });
        });
      }
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

    // calculator
    function calculator(calcPrice) {

      let price = document.getElementById("pre-price");
      let slider = document.getElementById("range");
      let output = document.getElementById("calc");

      output.value = slider.value;
      slider.value = output.value;

      slider.oninput = function () {
        output.value = this.value;
        let priceValue = slider.value * calcPrice;

        price.innerHTML = space(priceValue);
      }

      output.oninput = function () {
        slider.value = this.value;
        price.innerHTML = slider.value * calcPrice;
      };
    };

    function space(priceValue) {
      var point = "";
      var x = String(priceValue).replace(/(\.|,)\d+/, function (m) { point = m; return ""; });

      x = x.split("").reverse().join("")
        .replace(/(\d{3})/g, "$1 ")
        .split("").reverse().join("");
      return x + point;
    };

    (function () {
      let calculation = document.querySelector('.calculation');
      if (!calculation) {
        return;
      } else {
        calculator(document.querySelector('.calculation__tab-item').getAttribute('data-price'));
      }
    });

    // filter dropdown
    let filter = document.querySelector('.filter');
    if (!filter) {
      return;
    } else {
      (function () {
        document.querySelectorAll('.filter__item-btn').forEach((el) => {
          el.addEventListener('click', () => {
            el.classList.toggle('filter__item-btn--active');
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

                el.classList.remove('filter__item-btn--active');
                el.parentNode.classList.remove("filter__item-active");
              });
            });
          });

          el.addEventListener('click', event => {
            event._isClickWithInMenu = true;
          });
          document.body.addEventListener('click', event => {
            if (event._isClickWithInMenu) return;
            el.classList.remove('filter__item-btn--active');
            el.parentNode.classList.remove("filter__item-active");
          });
        });
      })();

      var filterBtn = document.getElementById('filterBtn'),
        sidebar = document.getElementById('sidebar'),
        sidebarClose = document.getElementById('sidebarClose');

      filterBtn.onclick = filterOpen;
      sidebarClose.onclick = filterClose;

      function filterOpen() {
        sidebar.classList.add('show');
        document.body.classList.add('no-scroll');
      };

      function filterClose() {
        sidebar.classList.remove('show');
        document.body.classList.remove('no-scroll');
      };

      window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
          filterClose();
        }
      });

      document.getElementById("sidebar").addEventListener('click', event => {
        event._isClickWithInMenu = true;
      });
      document.getElementById("filterBtn").addEventListener('click', event => {
        event._isClickWithInMenu = true;
      });
      document.body.addEventListener('click', event => {
        if (event._isClickWithInMenu) return;
        filterClose();
      });

      document.querySelectorAll('.sidebar__checkbox').forEach((e) => {
        e.addEventListener('click', () => {

          var filterEtagi = document.getElementById('filterEtagi');

          if (e.checked) {
            let name = e.getAttribute('name');
            let value = e.getAttribute('value');

            if (name == "etagi") {
              filterEtagi.classList.add('active');
            }

            if (value == '1') {
              filterEtagi.innerHTML = 'Один этаж';
            }

            if (value == '2') {
              filterEtagi.innerHTML = 'Два этажа';
            }

            if (value == '3') {
              filterEtagi.innerHTML = 'Три этажа';
            }

            if (value == '4') {
              filterEtagi.innerHTML = 'Больше трех';
            }
          } else {
            filterEtagi.classList.remove('active');
          }

          filterEtagi.addEventListener('click', function () {
            filterEtagi.classList.remove('active');
            e.checked = false;
          });
        });
      });
    }

    (function () {
      var sidebarCount = document.querySelectorAll('.sidebar__list-count'),
        sidebarActive = document.getElementsByClassName('sidebar-active');

      /*document.querySelectorAll('.sidebar__list-long').forEach((elem) => {
        elem.insertAdjacentHTML('afterend', '<a class="sidebar__list-count" href="#!">Показать всё</a>');
      });*/

      Array.from(sidebarCount).forEach(function (item, i, sidebarCount) {
        item.addEventListener('click', function (e) {
          if (sidebarActive.length > 0 && sidebarActive[0] !== this)
            sidebarActive[0].parentNode.classList.remove('sidebar-active');

          this.parentNode.classList.toggle('sidebar-active');
          this.classList.toggle('count-active');
        });
      });
    })();

  });
})();