"use strict"

const select = document.body.querySelector('.main__sort')
console.log(select)
const select_items = select.querySelector('.main__sort-items')
const select_selected = select.querySelector('.main__sort-selected')


select.onclick = (e) => {
    const elem = e.target.closest('.main__sort-items>span')
    if(elem) {
        select_selected.textContent = elem.textContent
    }
    select_items.classList.toggle('main__close')
}