const template = document.createElement('template')

template.innerHTML = `<link rel="stylesheet" href="Components/Icons/icon.css">
    <li>
        <a href="">
            <img src="">
            <p></p>
        </a>
    </li>`


class Icons extends HTMLElement {
    constructor () {
        super()
        
        this.attachShadow({mode : 'open'})

        this.shadowRoot.append(template.content.cloneNode(true))
    }
    connectedCallback () {
        const img = this.shadowRoot.querySelector('img')
        const p = this.shadowRoot.querySelector('p')

        img.src = this.getAttribute('src')
        p.innerHTML = this.getAttribute('text')
    }
}

export {Icons}