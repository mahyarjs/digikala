const template = document.createElement('template')

template.innerHTML = `<link rel="stylesheet" href="Components/Profile Modal/profileModal.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<div class="modal">
        <div class="header">
            <p id="title"></p>
            <i class="bi bi-x-lg"></i>
        </div>
        <input type="text">
        <div class="confirm">
            <button>تایید</button>
        </div>
    </div>`

class ProfileModal extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode : 'open'})

        this.shadowRoot.append(template.content.cloneNode(true))
    }
    connectedCallback () {
        this.shadowRoot.querySelector('#title').innerHTML = this.getAttribute('name')
    }
}

export { ProfileModal }