const template = document.createElement('template')

template.innerHTML = `<link rel="stylesheet" href="Components/Product Slider/product.css">
<div class="container">
<ul>

    <li class="static">
        <a href="" draggable="false">
        <img src="image/DigiKala-1-1024x1024.jpg" alt="" draggable="false">

            <div class="timer">
            <div class="s"></div>
            <span>:</span>
            <div class="m"></div>
            <span>:</span>
            <div class="h"></div>
            </div>

            <div class="discount-logo">%</div>
            
            <div class="see-all">
                مشاهده ی همه
                <i class="gg-chevron-left"></i>
            </div>
        </a>
    </li>

    <div class="product-c">
    <li class="product li-default">

        <a href="" class="default" draggable="false">
            <div class="icon">
                <div class="see">
                    <i class="gg-arrow-left"></i>
                </div>
                مشاهده همه
            </div>
        </a>
    </li>
    </div>

</ul>
</div>`


class Product extends HTMLElement {
    constructor () {
        super()
        
        this.attachShadow({mode : 'open'})

        this.shadowRoot.append(template.content.cloneNode(true))
    }
    connectedCallback () {
        
        fetch("https://api.digikala.com/v1/categories/apparel/")
            .then(res=>res.json())
            .then(item =>{
                item.data.incredible_offers.products.forEach(i => {
                    this.createElem(i)
                });
                
            })

            this.setTimer()
    }

    commafy ( num ) {
        var str = num.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }

    createElem (product) {
        // console.log(product);
        const container = this.shadowRoot.querySelector('.product-c')

        let price = product.default_variant.price.rrp_price.toString().slice(0,-1)

        let elem = `<li class="product">

        <a href="product.html?id=${product.id}" draggable="false">
            <div class="info">
                <img src="${product.images.main.url[0]}" alt="" id="product-img" draggable="false">

                <p id="desc">${product.title_fa}</p>
                
            </div>

            <div class="price">
                <div class="discount">
                    <span>50%</span>
                </div>

                <p id="price">${this.commafy(price.toString().slice(0,-1))} <span>تومان</span></p>
            </div>

        </a>
    </li>`

        container.insertAdjacentHTML('afterbegin',elem)

        this.containerScroll()
    }

    containerScroll () {
        const elem = this.shadowRoot.querySelector('ul')

        let pressed = false
        let startX = 0

        elem.addEventListener('mousedown',e => {
            pressed = true
            startX = e.clientX
        })

        elem.addEventListener('mouseleave',() => {
            pressed = false
        })

        elem.addEventListener('mouseup',() => {
            pressed = false
        })

        elem.addEventListener('mousemove',e => {
            if (!pressed) {
                return
            }
            elem.scrollLeft += startX - e.clientX
        })
    }

    setTimer () {
        const h = this.shadowRoot.querySelector('.h')
        const m = this.shadowRoot.querySelector('.m')
        const s = this.shadowRoot.querySelector('.s')

        let horse = 24
        let min = 59
        let second = 60

        let time = setInterval(() => {
            second--

            if (second < 0) {
                second = 60
                min--
            }

            if (min < 0) {
                min = 60
                horse--
            }

            if (horse < 0) {
                clearInterval(time)
            }

            h.innerHTML = horse
            m.innerHTML = min
            s.innerHTML = second
        },1000)
    }
}

export {Product}