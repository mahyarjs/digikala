import { Header } from "./Components/Header/header.js";
import { Navbar } from "./Components/NavBar/navbar.js";
import { Story } from "./Components/Story/story.js";
import { Slider } from "./Components/Slider/slider.js";
import { Icons } from "./Components/Icons/icon.js";
import { Product } from "./Components/Product Slider/product.js";
import { Footer } from "./Components/Footer/footer.js";
import { Modal } from "./Components/Modal/modal.js";
import { MobileHeader } from "./Components/ProductHeader/header2.js";
import { ProductDetials } from "./Components/ProductPage/details.js";
import { Icon } from "./Components/ProductIcons/icon.js";
import { ProfileModal } from "./Components/Profile Modal/profileModal.js";


window.customElements.define('site-header', Header)
window.customElements.define('site-navbar', Navbar)
window.customElements.define('site-story', Story)
window.customElements.define('site-slider', Slider)
window.customElements.define('site-icons', Icons)
window.customElements.define('site-product', Product)
window.customElements.define('site-footer', Footer)
window.customElements.define('site-modal', Modal)
window.customElements.define('site-mobile-header', MobileHeader)
window.customElements.define('site-product-details', ProductDetials)
window.customElements.define('site-product-icon', Icon)
window.customElements.define('site-product-modal', ProfileModal)

const loader = document.querySelector('.digi-kala-loader')

window.addEventListener('load',() => {
    loader.style.display = 'none'
})