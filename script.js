'use strict';

//selecting element 
const navBarEl = document.querySelector('.nav-bar');
const navEl = document.querySelector('nav');


console.log(navBarEl);


//activating the navigation for mobile users
let clicked = 'true';
navBarEl.addEventListener('click', function() {
    if (clicked) {
        navBarEl.style.background = 'url(./assest/close-svgrepo-com.svg)';
        navBarEl.style.backgroundPosition = 'center';
        navBarEl.style.backgroundSize = 'contain'
        navEl.classList.remove('hidden')
        // navBarEl.style.display = 'none';
    } else {
        navBarEl.style.background = 'url(/assest/global-navigation-svgrepo-com.svg)';
        navBarEl.style.backgroundPosition = 'center';
        navBarEl.style.backgroundSize = 'contain';
        navEl.classList.add('hidden')
    }
    clicked = !clicked
    console.log('clicked');
})