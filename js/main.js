"use strict";

const main__products = document.body.querySelector('.main__products-items')
const main__desktop = document.body.querySelector('.main__desktop')
const nav__products = nav_products.querySelector('.nav__products_items')
const nav__products_info = nav_products.querySelector('.nav__products_info')
const info = nav__products_info.querySelector('span')
const delete__all = nav__products_info.querySelector('button')
const nav__products_close = nav_products.querySelector('.nav__products_close')

class Store {
  constructor({ initState, reducer }) {
    this.reducer = reducer;
    this.state = initState;
    this.consumers = [];
  }

  dispatchEvent(actions) {
    const newState = actions.reduce(
      (state, action) => this.reducer(state, action),
      this.state
    );
    this.consumers.forEach((item) => item(newState));
    this.state = newState;
  }

  getSelector(callback) {
    return callback({ ...this.state });
  }

  addConsumer(callback) {
    this.consumers.push(callback);
  }

  render() {
    this.consumers.forEach((item) => item(this.state));
  }
}

const initState = {
  products: {
    novelty: [
      {
        id: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_1",
        price: 6000,
      },
      {
        id: 2,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_2",
        price: 4800,
      },
      {
        id: 3,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_3",
        price: 5290,
      },
      {
        id: 4,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_4",
        price: 2800,
      },
      {
        id: 5,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_5",
        price: 3400,
      },
      {
        id: 6,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_6",
        price: 6000,
      },
      {
        id: 7,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_7",
        price: 4800,
      },
      {
        id: 8,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_7",
        price: 5290,
      },
      {
        id: 9,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_8",
        price: 2800,
      },
      {
        id: 10,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_9",
        price: 3400,
      },
      {
        id: 11,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_6",
        price: 6000,
      },
      {
        id: 12,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_7",
        price: 4800,
      },
      {
        id: 13,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_7",
        price: 5290,
      },
      {
        id: 14,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_8",
        price: 2800,
      },
      {
        id: 15,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_9",
        price: 3400,
      },
    ],
    available: [
      {
        id: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_1",
        price: 6000,
      },
      {
        id: 2,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_2",
        price: 4800,
      },
      {
        id: 3,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_3",
        price: 5290,
      },
      {
        id: 4,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_4",
        price: 2800,
      },
      {
        id: 5,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_5",
        price: 3400,
      },
      {
        id: 6,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_6",
        price: 6000,
      },
    ],
    contract: [
      {
        id: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_1",
        price: 6000,
      },
      {
        id: 2,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_2",
        price: 4800,
      },
      {
        id: 3,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_3",
        price: 5290,
      },
      {
        id: 4,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_4",
        price: 2800,
      },
      {
        id: 5,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_5",
        price: 3400,
      },
      {
        id: 6,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_6",
        price: 6000,
      },
    ],
    exclusive: [
      {
        id: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_1",
        price: 6000,
      },
      {
        id: 2,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_2",
        price: 4800,
      },
      {
        id: 3,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_3",
        price: 5290,
      },
      {
        id: 4,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_4",
        price: 2800,
      },
      {
        id: 5,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_5",
        price: 3400,
      },
      {
        id: 6,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_6",
        price: 6000,
      },
    ],
    sale: [
      {
        id: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_1",
        price: 6000,
      },
      {
        id: 2,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_2",
        price: 4800,
      },
      {
        id: 3,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_3",
        price: 5290,
      },
      {
        id: 4,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_4",
        price: 2800,
      },
      {
        id: 5,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_5",
        price: 3400,
      },
      {
        id: 6,
        title: "Краска Wallquest, Brownsone MS90102",
        img: "photo_6",
        price: 6000,
      },
    ],
  },
  korzina: [
    {
      id: 1,
      title: "Краска Wallquest, Brownsone MS90102",
      img: "photo_2",
      amount: 2,
      price: 9600,
      delete: false
    },
    {
      id: 2,
      title: "Краска Wallquest, Brownsone MS90102",
      img: "photo_6",
      amount: 1,
      price: 4800,
      delete: false
    },
    {
      id: 3,
      title: "Краска Wallquest, Brownsone MS90102",
      img: "photo_7",
      amount: 1,
      price: 4800,
      delete: true
    },
  ],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "CHANGE_STATUS_PRODUCT": {
      return {
        ...state,
        korzina: state.korzina.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                delete: !item.delete
              }
            : item
        ),
      };
    }
    case "DELETE_PRODUCT": {
      return {
        ...state,
        korzina: state.korzina.filter((item) => !item.delete),
      };
    }
    case "PREDELETE_PRODUCT_ALL": {
        return {
          ...state,
          korzina: state.korzina.map((item) => ({
            ...item,
            delete: true
          })),
        };
    }
    case "ADD_PRODUCT": {
      return {
        ...state,
        korzina: [
          ...state.korzina,
          {
            id: state.korzina.length,
            title: payload.title,
            img: payload.img,
            amount: 1,
            price: payload.price,
            delete: false
          },
        ],
      };
    }
    case "PLUS_PRODUCT": {
        return {
            ...state,
            korzina: state.korzina.map((item) =>
              item.id === payload.id
                ? {
                    ...item,
                    amount: item.amount + 1
                  }
                : item
            ),
        };
    }
    case "MINUS_PRODUCT": {
        return {
            ...state,
            korzina: state.korzina.map((item) =>
              item.id === payload.id
                ? {
                    ...item,
                    amount: item.amount === 1 ? 1 : item.amount - 1
                  }
                : item
            ),
        };
    }
  }
  return state;
};

const products = new Store({ initState, reducer });

products.addConsumer((state) => {
    const prod = Object.keys(state.products)
    .reduce((acum, key) => {
      if (checkKeys(key)) {
        return acum.concat(state.products[key]);
      }
      return acum;
    }, [])
    .map((item) =>
    `<div class="main__product">
          <img src="./assets/img/${item.img}.png" alt="">
          <h2>${item.title}</h2>
          <div class="main__product-info">
              <span>${item.price} ₽</span>
              <button data-img="${item.img}" data-title="${item.title}" data-price="${item.price}">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 4.16663V15.8333" stroke="#1F2020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4.16699 10H15.8337" stroke="#1F2020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>                                    
              </button>
          </div>
      </div>`
    )
    main__products.innerHTML = prod.join('')
    main__desktop.textContent = `${prod.length} товаров`
});

products.addConsumer(state => {
    const prod = Object.values(state.korzina).map(item => `
        <div class="nav__product">
            <img class="nav__product_img${item.delete ? ' nav__product--04op' : ''}" src="./assets/img/${item.img}.png" alt="">
            <div class="nav__product_info${item.delete ? ' nav__product--02op' : ''}">
                <a href="#" class="nav__product_title">${item.title}</a>
                <div class="nav__product_price">${item.price} ₽</div>
            </div>
            <div class="nav__product_panel${item.delete ? ' nav__product--02op' : ''}">
                <button data-id=${item.delete || item.id} class="nav__product_button-minus">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.3335 8H12.6668" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                                    
                </button>
                <div class="nav__product_amount">${item.amount}</div>
                <button data-id=${item.delete || item.id} class="nav__product_button-plus">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 3.33325V12.6666" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.3335 8H12.6668" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                                    
                </button>
            </div>
            <button data-id=${item.id} class="nav__product_btn">
                ${item.delete ? (
                    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 1L21 5L17 9" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 11V9C3 7.93913 3.42143 6.92172 4.17157 6.17157C4.92172 5.42143 5.93913 5 7 5H21" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 23L3 19L7 15" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 13V15C21 16.0609 20.5786 17.0783 19.8284 17.8284C19.0783 18.5786 18.0609 19 17 19H3" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'
                ) : (
                    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.2"><path d="M18 6L6 18" stroke="#1F2020" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 6L18 18" stroke="#1F2020" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></g></svg>'
                )}                               
            </button>
        </div>
    `)

    nav_korzina.textContent = prod.length
    info.textContent = `${prod.length} товара`
    nav__products.innerHTML = prod.join('')
})

main__products.onclick = (e) => {
    const elem = e.target.closest('.main__product-info>button')
    if(elem) {
        products.dispatchEvent([{
            type: "ADD_PRODUCT",
            payload: {
                img: elem.dataset.img,
                title: elem.dataset.title,
                price: elem.dataset.price
            }
        }])
    }
}

delete__all.onclick = () => {
    products.dispatchEvent([{
        type: "PREDELETE_PRODUCT_ALL",
    }])
}

nav__products.onclick = (e) => {
    const elem = e.target
    if(elem.closest('.nav__product_button-plus')) {
        const id = elem.closest('.nav__product_button-plus').dataset.id
        id !== true && products.dispatchEvent([{ 
            type: 'PLUS_PRODUCT',
            payload: {
                id: +id
            }
        }])
    }
    if(elem.closest('.nav__product_button-minus')) {
        const id = elem.closest('.nav__product_button-minus').dataset.id
        id !== true && products.dispatchEvent([{ 
            type: 'MINUS_PRODUCT',
            payload: {
                id: +id
            }
        }])
    }
    if(elem.closest('.nav__product_btn')) {
        products.dispatchEvent([{ 
            type: 'CHANGE_STATUS_PRODUCT',
            payload: {
                id: +elem.closest('.nav__product_btn').dataset.id
            }
        }])
    }
}

nav__products_close.onclick = () => {
    products.dispatchEvent([{
        type: "DELETE_PRODUCT",
    }])
}

novelty.onchange = () => {
    novelty_mbl.checked = novelty.checked
    products.render()
};
novelty_mbl.onchange = () => {
    novelty.checked = novelty_mbl.checked
    products.render()
};
available.onchange = () => {
    available_mbl.checked = available.checked
    products.render()
};
available_mbl.onchange = () => {
    available.checked = available_mbl.checked
    products.render()
};
contract.onchange = () => {
    contract_mbl.checked = contract.checked
    products.render()
};
contract_mbl.onchange = () => {
    contract.checked = contract_mbl.checked
    products.render()
};
exclusive.onchange = () => {
    exclusive_mbl.checked = exclusive.checked
    products.render()
};
exclusive_mbl.onchange = () => {
    exclusive.checked = exclusive_mbl.checked
    products.render()
};
sale.onchange = () => {
    sale_mbl.checked = sale.checked
    products.render()
};
sale_mbl.onchange = () => {
    sale.checked = sale_mbl.checked
    products.render()
};

products.render();

function checkKeys(key) {
  return document.body.querySelector(`#${key}`).checked;
}
