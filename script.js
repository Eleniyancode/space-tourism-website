'use strict';

//selecting element 
const navBarEl = document.querySelector('.nav-bar');
const navEl = document.querySelector('nav');
const locationTabContainerEl = document.querySelector('.locations__tab-container');
const tabs = document.querySelectorAll('.locations__tab');
const tabContents = document.querySelectorAll('.locations__content');
const imageContents = document.querySelectorAll('.image__content')


console.log(navBarEl);


//activating the navigation for mobile users
let clicked = 'true';
navBarEl.addEventListener('click', function() {
    if (clicked) {
        navBarEl.style.backgroundImage = 'url(./assest/icons8-close-50.png)';
        navBarEl.style.backgroundPosition = 'center';
        navBarEl.style.backgroundSize = 'contain'
        navEl.classList.remove('hidden')
        // navBarEl.style.display = 'none';
    } else {
        navBarEl.style.backgroundImage = 'url(./assest/icons8-menu-30.png)';
        navBarEl.style.backgroundPosition = 'center';
        navBarEl.style.backgroundSize = 'contain';
        navEl.classList.add('hidden')
    }
    clicked = !clicked
    console.log('clicked');
})

//handling location clicked

locationTabContainerEl.addEventListener('click', function(e) {
  const clicked = e.target.closest('.locations__tab');
  console.log(clicked);

  //Guard clause
  if (!clicked) return
  //remove active tab
  tabs.forEach(t => t.classList.remove('locations__tab--active')); 
  clicked.classList.add('locations__tab--active');
  tabContents.forEach(c => c.classList.remove('locations__content--active'));
  imageContents.forEach(c => c.classList.remove('image--active'))
  
  //Activate content area
  document
  .querySelector(`.locations__content--${clicked.dataset.tab}`).classList.add('locations__content--active');
  document.querySelector(`.image--${clicked.dataset.tab}`).classList.add('image--active');
})