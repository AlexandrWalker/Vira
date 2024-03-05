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
          breakpoint: 769,
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
          breakpoint: 769,
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
    $('.services__items').slick({
      responsive: [
        {
          breakpoint: 9999,
          settings: "unslick"
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1.15,
            slidesToScroll: 1,
            arrows: false,
            dots: true
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

    // inputmask
    let inputs = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask('+7 (999) 999-99-99');
    im.mask(inputs);

    // wheel
    // надписи и цвета на секторах
    const prizes = [
      {
        text: "Беседка открытого типа",
        color: "#34B57D",
      },
      {
        text: "50% на фундамент",
        color: "#007B43",
      },
      {
        text: "20% на мебель от партнеров",
        color: "#0D8B53",
      },
      {
        text: "Входная дверь",
        color: "#179860",
      },
      {
        text: "Бесплатный проект дома",
        color: "#20A169",
      }
    ];

    // создаём переменные для быстрого доступа ко всем объектам на странице — блоку в целом, колесу, кнопке и язычку
    const wheel = document.querySelector(".deal-wheel");
    const spinner = wheel.querySelector(".spinner");
    const trigger = wheel.querySelector(".btn-spin");
    const ticker = wheel.querySelector(".ticker");

    // на сколько секторов нарезаем круг
    const prizeSlice = 360 / prizes.length;
    // на какое расстояние смещаем сектора друг относительно друга
    const prizeOffset = Math.floor(180 / prizes.length);
    // прописываем CSS-классы, которые будем добавлять и убирать из стилей
    const spinClass = "is-spinning";
    const selectedClass = "selected";
    // получаем все значения параметров стилей у секторов
    const spinnerStyles = window.getComputedStyle(spinner);

    // переменная для анимации
    let tickerAnim;
    // угол вращения
    let rotation = 0;
    // текущий сектор
    let currentSlice = 0;
    // переменная для текстовых подписей
    let prizeNodes;

    // расставляем текст по секторам
    const createPrizeNodes = () => {
      // обрабатываем каждую подпись
      prizes.forEach(({ text, color, reaction }, i) => {
        // каждой из них назначаем свой угол поворота
        const rotation = ((prizeSlice * i) * -1) - prizeOffset;
        // добавляем код с размещением текста на страницу в конец блока spinner
        spinner.insertAdjacentHTML(
          "beforeend",
          // текст при этом уже оформлен нужными стилями
          `<li class="prize" data-reaction=${reaction} style="--rotate: ${rotation}deg">
        <span class="text">${text}</span>
      </li>`
        );
      });
    };

    // рисуем разноцветные секторы
    const createConicGradient = () => {
      // устанавливаем нужное значение стиля у элемента spinner
      spinner.setAttribute(
        "style",
        `background: conic-gradient(
      from -90deg,
      ${prizes
          // получаем цвет текущего сектора
          .map(({ color }, i) => `${color} 0 ${(100 / prizes.length) * (prizes.length - i)}%`)
          .reverse()
        }
    );`
      );
    };

    // создаём функцию, которая нарисует колесо в сборе
    const setupWheel = () => {
      // сначала секторы
      createConicGradient();
      // потом текст
      createPrizeNodes();
      // а потом мы получим список всех призов на странице, чтобы работать с ними как с объектами
      prizeNodes = wheel.querySelectorAll(".prize");
    };

    // определяем количество оборотов, которое сделает наше колесо
    const spinertia = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // функция запуска вращения с плавной остановкой
    const runTickerAnimation = () => {
      // взяли код анимации отсюда: https://css-tricks.com/get-value-of-css-rotation-through-javascript/
      const values = spinnerStyles.transform.split("(")[1].split(")")[0].split(",");
      const a = values[0];
      const b = values[1];
      let rad = Math.atan2(b, a);

      if (rad < 0) rad += (2 * Math.PI);

      const angle = Math.round(rad * (180 / Math.PI));
      const slice = Math.floor(angle / prizeSlice);

      // анимация язычка, когда его задевает колесо при вращении
      // если появился новый сектор
      if (currentSlice !== slice) {
        // убираем анимацию язычка
        ticker.style.animation = "none";
        // и через 10 миллисекунд отменяем это, чтобы он вернулся в первоначальное положение
        setTimeout(() => ticker.style.animation = null, 10);
        // после того, как язычок прошёл сектор - делаем его текущим 
        currentSlice = slice;
      }
      // запускаем анимацию
      tickerAnim = requestAnimationFrame(runTickerAnimation);
    };

    // функция выбора призового сектора
    const selectPrize = () => {
      const selected = Math.floor(rotation / prizeSlice);
      prizeNodes[selected].classList.add(selectedClass);
    };

    // отслеживаем нажатие на кнопку
    trigger.addEventListener("click", () => {
      // делаем её недоступной для нажатия
      trigger.disabled = true;
      // задаём начальное вращение колеса
      rotation = Math.floor(Math.random() * 360 + spinertia(2000, 5000));
      // убираем прошлый приз
      prizeNodes.forEach((prize) => prize.classList.remove(selectedClass));
      // добавляем колесу класс is-spinning, с помощью которого реализуем нужную отрисовку
      wheel.classList.add(spinClass);
      // через CSS говорим секторам, как им повернуться
      spinner.style.setProperty("--rotate", rotation);
      // возвращаем язычок в горизонтальную позицию
      ticker.style.animation = "none";
      // запускаем анимацию вращение
      runTickerAnimation();
    });

    // отслеживаем, когда закончилась анимация вращения колеса
    spinner.addEventListener("transitionend", () => {
      // останавливаем отрисовку вращения
      cancelAnimationFrame(tickerAnim);
      // получаем текущее значение поворота колеса
      rotation %= 360;
      // выбираем приз
      selectPrize();
      // убираем класс, который отвечает за вращение
      wheel.classList.remove(spinClass);
      // отправляем в CSS новое положение поворота колеса
      spinner.style.setProperty("--rotate", rotation);
      // делаем кнопку снова активной
      trigger.disabled = false;
    });

    // подготавливаем всё к первому запуску
    setupWheel();

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

    // built-info
    (function () {
      document.querySelectorAll('.built__options-info').forEach((element) => {
        element.addEventListener('click', () => {
          element.parentNode.classList.toggle('show');
        });
      });
    })();

    // case tab
    $(function () {
      var case__tab1 = document.getElementById("case__tab1"),
        case__tab2 = document.getElementById("case__tab2"),
        case__slider1 = document.getElementById("case__slider1"),
        case__slider2 = document.getElementById("case__slider2");

      case__tab1.addEventListener("click", function () {
        case__tab1.classList.add("active");
        case__tab2.classList.remove("active");

        case__slider1.classList.add("active");
        case__slider2.classList.remove("active");

        $('case__slider-1').slick('reinit');
        $('case__slider-2').slick('unslick');
      });

      case__tab2.addEventListener("click", function () {
        case__tab1.classList.remove("active");
        case__tab2.classList.add("active");

        case__slider1.classList.remove("active");
        case__slider2.classList.add("active");

        $('case__slider-1').slick('unslick');
        $('case__slider-2').slick('reinit');
      });
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

  });
})();