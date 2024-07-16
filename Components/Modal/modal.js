const template = document.createElement('template')

template.innerHTML = `<link rel="stylesheet" href="Components/Modal/modal.css">
<div class="container">
<div class="close">

    <div class="product-added">
        <svg id="close" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
        </svg>
        <p>این کالا به سبد خرید شما اضافه شد!</p>
    </div>

    <svg id="close-modal" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    </svg>
</div>

<div class="product">
    <div class="image">
        <img id="modal-img" src="/image/6fa326f7dcd8475cdc7656a9752bc6f483241939_1716238915.png" alt="">
    </div>
    <div class="details">
        <p id="desc">/image/6fa326f7dcd8475cdc7656a9752bc6f483241939_1716238915.png</p>
    </div>
</div>

<a href="basket.html">
    <div class="btn">برو به سبد خرید</div>
</a>
</div>`

class Modal extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode : 'open'})
        this.shadowRoot.append(template.content.cloneNode(true))
    }
    connectedCallback () {
        const closeIcon = this.shadowRoot.getElementById('close-modal')
        const main = document.querySelector("main");

        closeIcon.addEventListener('click',() => {
            this.style.display = 'none'
            main.style.filter = 'none'

        })
    }
}

export { Modal }