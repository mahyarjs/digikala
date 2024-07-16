const template = document.createElement('template')

template.innerHTML = `<link rel="stylesheet" href="Components/Slider/slider.css">
    <div class="slider">
        <div class="images">
            <img src="">
        </div>

        <div class="btns">
            <button id="prev">
                <i class="gg-chevron-right"></i>
            </button>

            <button id="next">
                <i class="gg-chevron-left"></i>
            </button>
        </div>

        <div class="doted"></div>
    </div>`

class Slider extends HTMLElement {
    constructor () {
        super()
        
        this.attachShadow({mode : 'open'})

        this.shadowRoot.append(template.content.cloneNode(true))

        this.getImage()
    }

    async getImage () {
        let imageArray = []

        let res = await fetch('https://itsrealdatabase-default-rtdb.firebaseio.com/image.json')
        let jsonImage = await res.json()
        
        await jsonImage.forEach(image => {
            imageArray.push(image.src)
            
        });

        this.createSlider(imageArray)
    }

    createSlider (array) {
        const img = this.shadowRoot.querySelector('img')
        const prevBtn = this.shadowRoot.getElementById('prev')
        const nextBtn = this.shadowRoot.getElementById('next')

        let index = 0

        prevBtn.addEventListener('click',() => {
            index--

            if (index < 0) {
                index = array.length - 1
            }
            
            img.src = array[index]
        })

        nextBtn.addEventListener('click',() => {
            index++

            if (index > array.length - 1) {
                index = 0
            }
            img.src = array[index]
        })

        setInterval(() => {
            index++

            if (index > array.length - 1) {
                index = 0
            }

            img.src = array[index]
        }, 3000);

        img.src = array[index]
    }
}

export { Slider }