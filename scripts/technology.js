const locationTabContainerEl = document.querySelector(
  ".locations__tab-container"
);
const tabs = document.querySelectorAll(".locations__tab");
const tabContents = document.querySelectorAll(".locations__content");
const imageContents = document.querySelectorAll(".image__content");

/////////////////////////////////////////////
//////////////////////////////////////////////////
//handling location clicked
locationTabContainerEl.addEventListener("click", function (e) {
  const clicked = e.target.closest(".locations__tab");
  console.log(clicked);

  //Guard clause
  if (!clicked) return;
  //remove active tab
  tabs.forEach((t) => t.classList.remove("locations__tab--active"));
  clicked.classList.add("locations__tab--active");
  tabContents.forEach((c) => c.classList.remove("locations__content--active"));
  imageContents.forEach((c) => c.classList.remove("image--active"));

  //Activate content area
  document
    .querySelector(`.locations__content--${clicked.dataset.tab}`)
    .classList.add("locations__content--active");
  document
    .querySelector(`.image--${clicked.dataset.tab}`)
    .classList.add("image--active");
});
