'use strict';

//selecting element 
const navBarEl = document.querySelector('.nav-bar');
const navEl = document.querySelector('nav');


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


