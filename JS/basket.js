const productContainer = document.querySelector('.product')
const showPrices = document.querySelectorAll('.show-total-price-span')

let productsArrayGlobal = null

function commafy( num ) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}

const getData = async () => {
    if(document.cookie.includes('userID')) {
        productContainer.innerHTML = ''
        let findIndexCookie = document.cookie.indexOf('=')

        let userID =  document.cookie.slice(findIndexCookie + 1,)

        let res = await fetch('https://itsrealdatabase-default-rtdb.firebaseio.com/phone.json')
        let jsonUser = await res.json()

        let arr = Object.entries(jsonUser)

        let findID = arr.find(i => +userID === i[1].id)

        let getProductsObj = findID[1].products

        if (getProductsObj) {
            let productsArray = Object.entries(getProductsObj)

            if (productsArray) {
                productsArray.forEach(i => {
                let elem = `<div class="product-item" id="p-c" data-id="${i[1].id}">
    
    <div class="image">
        <img src="${i[1].img}" alt="">
    
        <div class="count">
            <span style="cursor: pointer;" onclick="plusCount(this)">+</span>
            <span class="show-count">${i[1].count}</span>
            <span style="cursor: pointer;" onclick="lowCount(this)">-</span>
        </div>
    </div>
    
    <div class="details">
        <p id="product-title">${i[1].name}</p>
    
        <p id="price" class="sh-price">${commafy(i[1].price.toString().slice(0,-1))} <span>تومان</span></p>
    </div>
    
    </div>`
    
            productContainer.insertAdjacentHTML('afterbegin',elem)
    
            });
                sumPrice(productsArray)
            } 
        } 
        else {
            showPrices.forEach(span => {
                span.innerHTML = '0'
            })
        }
    }
}

const sumPrice = arr => {
    showPrices.forEach(span => {
        span.innerHTML = ''
    })

    let totalPrice = arr.reduce((prev,current) => {
        return +current[1].price * +current[1].count  + prev

    },0)

    showPrices.forEach(span => {
        span.insertAdjacentHTML('afterbegin',commafy(totalPrice.toString().slice(0,-1)))
    })
}

getData()


const lowCount = async elem => {
    +elem.previousElementSibling.innerHTML--

    let res = await findProduct(elem)
    changeCountProduct(res,+elem.previousElementSibling.innerHTML)


    if (+elem.previousElementSibling.innerHTML < 1) {
        let userRes = await findUser()

        await fetch(`https://itsrealdatabase-default-rtdb.firebaseio.com/phone/${userRes}/products/${res[0]}.json`,{
            method : 'DELETE',
        })

        getData()
    }

}

const plusCount = async elem => {
    +elem.nextElementSibling.innerHTML++

    let res = await findProduct(elem)
    changeCountProduct(res,+elem.nextElementSibling.innerHTML)
}

const findProduct = async elem => {
    let productID = elem.parentElement.parentElement.parentElement.dataset.id

    let userRes = await findUser()

    let res = await fetch(`https://itsrealdatabase-default-rtdb.firebaseio.com/phone/${userRes}.json`)
    let jsonProduct = await res.json()
    
    if (jsonProduct.products) {
        let arr = Object.entries(jsonProduct.products)

        let findProductsArray = arr
    
        let findProductFromAPI = findProductsArray.find(i => i[1].id === +productID)

        return findProductFromAPI
    }
}

const changeCountProduct = async (product,countNum) => {
    let res = await findUser()

    let dataObj = {...product[1]}
    dataObj.count = countNum

    if (countNum > 0) {
        let ress =  await fetch(`https://itsrealdatabase-default-rtdb.firebaseio.com/phone/${res}/products/${product[0]}.json`,{
            method : 'PUT',
            headers : {
                'Content-type' : 'application/json'
            } ,
            body : JSON.stringify(dataObj)
        })

        getData()

    }

}
const findUser = async () => {
    if (document.cookie.includes('userID')) {
        let findIndexCookie = document.cookie.indexOf('=')

        let userID =  document.cookie.slice(findIndexCookie + 1,)


        let res = await fetch('https://itsrealdatabase-default-rtdb.firebaseio.com/phone.json')
        let jsonUser = await res.json()

        let arr = Object.entries(jsonUser)

        let findID = arr.find(i => +userID === i[1].id)

        return findID[0]

    }
}
