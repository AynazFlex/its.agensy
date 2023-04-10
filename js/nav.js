"use strict"

const nav_burger = document.body.querySelector('.nav__burger')
const nav_checkboxes = document.body.querySelector('.nav__checkboxes-for-mobile')
const nav_checkboxes_wrapper = nav_checkboxes.querySelector('.nav__checkboxes-for-mobile-wrapper')


nav_burger.onclick = () => {
    nav_checkboxes.classList.add('nav__active-1')
    nav_checkboxes_wrapper.classList.add('nav__active-2')
}

nav_checkboxes.onclick = e => {
    if(!e.target.closest('.nav__checkboxes-for-mobile-wrapper')) {
        animEnd(nav_checkboxes_wrapper).then(() => nav_checkboxes.classList.remove('nav__active-1'))
        nav_checkboxes_wrapper.classList.remove('nav__active-2')
    }
}

function animEnd(elem) {
    return new Promise((res) => {
        elem.addEventListener('transitionend', res, {
            once: true
        })
    })
}