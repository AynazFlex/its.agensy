"use strict"

const nav_burger = document.body.querySelector('.nav__burger')
const nav_checkboxes = document.body.querySelector('.nav__checkboxes-for-mobile')
const nav_checkboxes_wrapper = nav_checkboxes.querySelector('.nav__checkboxes-for-mobile-wrapper')
const nav_products = document.body.querySelector('.nav__products')
const nav_korzina = document.body.querySelector('.nav__korzina')
const nav_products_container = nav_products.querySelector('.nav__products_container')
const nav_checkboxes_line = nav_checkboxes_wrapper.querySelector('.nav__checkboxes-line')

nav_burger.onclick = () => {
    nav_checkboxes.classList.add('nav__active-1')
    nav_checkboxes_wrapper.classList.add('nav__active-2')
    document.body.style.overflow = 'hidden'
}

nav_checkboxes.onclick = e => {
    if(!e.target.closest('.nav__checkboxes-for-mobile-wrapper')) closeModal()
}

nav_korzina.onclick = () => {
    nav_products.classList.add('nav__active-3')
    nav_products_container.classList.add('nav__active-4')
}

nav_products.onclick = (e) => {
    const elem = e.target
    if(!elem.closest('.nav__products_container') || elem.closest('.nav__products_close')) {
        animEnd(nav_products_container).then(() => nav_products.classList.remove('nav__active-3'))
        nav_products_container.classList.remove('nav__active-4')
    }
}

nav_checkboxes_line.ontouchstart = (e) => {
    const start_Y = e.changedTouches[0].clientY
    const start_Top = nav_checkboxes_wrapper.getBoundingClientRect().top
    nav_checkboxes_wrapper.style.transition = '0ms';
    let delta_Y = 0

    document.body.ontouchmove = (e) => {
        delta_Y = start_Y - e.changedTouches[0].clientY
        nav_checkboxes_wrapper.style.top = `${start_Top - delta_Y}px`
        if(parseInt(nav_checkboxes_wrapper.style.top) < 160) nav_checkboxes_wrapper.style.top = '160px'
    }

    document.body.ontouchend = () => {
        nav_checkboxes_wrapper.style = null
        if(delta_Y < -100) closeModal()
        document.body.ontouchmove = null
        document.body.ontouchend = null
    }
}

novelty_mbl.onchange = (e) => {
    console.log(novelty_mbl.checked)
}

function closeModal() {
    animEnd(nav_checkboxes_wrapper).then(() => nav_checkboxes.classList.remove('nav__active-1'))
    nav_checkboxes_wrapper.classList.remove('nav__active-2')
    document.body.style.overflow = 'auto'
}

function animEnd(elem) {
    return new Promise((res) => {
        elem.addEventListener('transitionend', res, {
            once: true
        })
    })
}