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

    $('.stages__slider').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true
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
    output.value = slider.value;
    slider.value = output.value;

    slider.oninput = function () {
      output.value = this.value;
    }

    output.oninput = function () {
      slider.value = this.value;
    }

  });
})();