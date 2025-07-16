//slider functionality
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const slideImage = document.querySelectorAll(".slide-image");
  const slider = document.querySelector(".slider");
  const dotContainer = document.querySelector(".dots");
  let currslid = 0;
  let maxslid = slides.length;

  //Functions
  const creatDot = function () {
    slides.forEach((s, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide=${i}></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document.querySelectorAll(".dots__dot").forEach((dot) => {
      dot.classList.remove("dots__dot--active");
    });

    document
      .querySelector(`.dots__dot[data-slide="${slide}"`)
      .classList.add("dots__dot--active");
  };

  const gotoslide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });

    slideImage.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    console.log("clicked");
    if (currslid === maxslid - 1) {
      currslid = 0;
    } else {
      currslid++;
    }
    gotoslide(currslid);
    activateDot(currslid);
  };

  const prevSlide = function () {
    if (currslid === 0) {
      currslid = maxslid - 1;
    } else {
      currslid--;
    }
    gotoslide(currslid);
    activateDot(currslid);
  };

  const init = function () {
    gotoslide(0);
    creatDot();
    activateDot(0);
  };
  init();

  //Event handlers

  //functionality for the arrow right and left key slide
  document.addEventListener("keydown", function (e) {
    // console.log(e);
    if (e.key === "ArrowRight") nextSlide();
    e.key === "ArrowLeft" && prevSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      console.log("DOT");
      console.log(e.target);
      currslid = Number(e.target.dataset.slide);
      console.log(currslid);
      gotoslide(currslid);
      activateDot(currslid);
    }
  });
};

slider();
