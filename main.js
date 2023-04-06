const sliderTarget = document.body.querySelector("#slider")

class Slider {
    constructor({init, next, prev, pagination, label}) {
        this.init = init;
        this.next = next;
        this.prev = prev;
        this.pagination = pagination;
        this.activeId = 0;
        this.prevId = 0;
        this.label = label
        this.slides = this.init.querySelectorAll(".slider__item")
        this.length = this.slides.length;
    }

    _move(index) {
        const width = this.init.getBoundingClientRect().width
        this.activeId = index
        this.init.scrollTo({
            left: index*width,
            behavior: "smooth",
        })
    }

    start() {
        this.next.onclick = () => {
            if(this.activeId < this.length-1) {
                this._move(this.prevId + 1)
            }
        }

        this.prev.onclick = () => {
            if(this.activeId > 0) {
                this._move(this.prevId - 1)
            }
        }

        Array.from(this.pagination).forEach((item, i) => {
            item.onclick = () => {
                this._move(i)
            }
        });

        this.init.onscroll = () => {
            clearTimeout(window.scrollEndTimer)
            window.scrollEndTimer = setTimeout(() => {
                this.pagination[this.prevId].classList.remove('slider__pag-ball--active')
                this.pagination[this.activeId].classList.add('slider__pag-ball--active')
                this.prevId = this.activeId
                this.label.textContent = this.slides[this.activeId].querySelector(".slider__item-title").textContent
            }, 100)
        }

        window.onresize = () => {
            this.init.scrollTo({
                left: this.init.getBoundingClientRect().width*this.prevId
            })
        }
    }
}

const slider = new Slider({
    init: sliderTarget.querySelector(".slider__items"),
    next: sliderTarget.querySelector(".slider__next"),
    prev: sliderTarget.querySelector(".slider__prev"),
    pagination: sliderTarget.querySelectorAll(".slider__pag-ball"),
    label: sliderTarget.querySelector(".slider__label>span"),
})

slider.start()