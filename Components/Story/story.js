const template = document.createElement('template')

template.innerHTML = `<link rel="stylesheet" href="Components/Story/story.css">

        <div class="story">
            <ul id="story-list">
                
            </ul>
        </div>`
    

class Story extends HTMLElement {
    constructor () {
        super()
        
        this.attachShadow({mode : 'open'})

        this.shadowRoot.append(template.content.cloneNode(true))
    }
    connectedCallback () {

        const storyListContainer = this.shadowRoot.getElementById('story-list')

        fetch('https://itsrealdatabase-default-rtdb.firebaseio.com/users.json')
            .then(res => res.json())
            .then(user => {
                user.forEach(i => {
                    storyListContainer.insertAdjacentHTML('afterbegin',
                    `<li>
                        <a href="" draggable="false">
                            <div class="image">
                                <img draggable="false" src="image/digikala_logo.webp">
                            </div>
                            <p>${i.name}</p>
                        </a>
                    </li>`
                    )
                });
        })

        let pressed = false
        let startX = 0

        storyListContainer.addEventListener('mousedown',e => {
            pressed = true
            startX = e.clientX
        })

        storyListContainer.addEventListener('mouseleave',() => {
            pressed = false
        })

        storyListContainer.addEventListener('mouseup',() => {
            pressed = false
        })

        storyListContainer.addEventListener('mousemove',e => {
            if (!pressed) {
                return
            }
            storyListContainer.scrollLeft += startX - e.clientX
            console.log('m');
        })
    }
}

export {Story}