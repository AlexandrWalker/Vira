(() => {
  document.addEventListener('DOMContentLoaded', () => {

    $('.project__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      centerMode: true,
      prevArrow: false,
      nextArrow: '<button type="button" id="project__slider__btn" class="slick-next"><svg width="24" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2l20 20L2 42" stroke="#2E2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
    });

    document.getElementById("project__tab1").addEventListener("click", function () {
      document.getElementById("project__tab1").classList.add("active");
      document.getElementById("project__tab2").classList.remove("active");

      document.getElementById("project__slider1").classList.add("active");
      document.getElementById("project__slider2").classList.remove("active");
    });

    document.getElementById("project__tab2").addEventListener("click", function () {
      document.getElementById("project__tab2").classList.add("active");
      document.getElementById("project__tab1").classList.remove("active");

      document.getElementById("project__slider1").classList.remove("active");
      document.getElementById("project__slider2").classList.add("active");
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



    let slider = document.getElementById("range");
    let output = document.getElementById("calc");
    output.innerHTML = slider.value;

    slider.oninput = function () {
      output.innerHTML = this.value;
    }

    const calcRange = document.getElementById('calculator-range-1')

    if (calcRange) {
      noUiSlider.create(calcRange, {
        start: 86,
        connect: 'lower',
        step: 1,
        range: {
          'min': 10,
          'max': 300
        }
      });

      const input = document.getElementById('calculator-input-1');

      calcRange.noUiSlider.on('update', function (values) {
        input.value = Math.round(values);
      });
    }

  });
})();