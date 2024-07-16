const pValue = document.querySelectorAll('.value')
const icons = document.querySelectorAll('i')
const modals = document.querySelectorAll('site-product-modal')
const logOutBtn = document.querySelector('.log-out')
const headerComponent = document.querySelector('site-header')

let regex = /(0?9)\d{8,9}/


const checkLogin = () => {
    if (!document.cookie.includes('userID')) {
        location.href = 'http://127.0.0.1:5500/'
    }
}

checkLogin()

const getUserData = async () => {
    const phoneNumberP = document.getElementById('phone')
    const userNameP = document.getElementById('user-name')

    if (document.cookie.includes('userID')) {
        let findIndexCookie = document.cookie.indexOf('=')

        let userID =  document.cookie.slice(findIndexCookie + 1,)

        let res = await fetch('https://itsrealdatabase-default-rtdb.firebaseio.com/phone.json')
        let jsonUser = await res.json()

        let arr = Object.entries(jsonUser)

        let findID = arr.find(i => +userID === i[1].id)

        phoneNumberP.innerHTML = findID[1].phoneNumber
        userNameP.innerHTML = findID[1].userName
        headerComponent.shadowRoot.querySelector('.login-btn').innerHTML = findID[1].userName
    }
    
    isValueInP()
}
// const getUserData = async () => {
//     const phoneNumberP = document.getElementById('phone')
//     const userNameP = document.getElementById('user-name')

//     let res = await fetch('https://itsrealdatabase-default-rtdb.firebaseio.com/phone.json')
//     let jsonUser = await res.json()

//     if (jsonUser) {
//         let arr = Object.entries(jsonUser)

//         arr.forEach(i => {
//             phoneNumberP.innerHTML = i[1].phoneNumber
//             userNameP.innerHTML = i[1].userName
//             headerComponent.shadowRoot.querySelector('.login-btn').innerHTML = i[1].userName
            
//         })
//     } 
    
//     isValueInP()
// }

getUserData()

let pValueArray = [...pValue]
let modalsArray = [...modals]

let icon = null

const isValueInP = () => {
    pValueArray.forEach(i => {
        icon = i.parentElement.nextElementSibling
    
        if (!i.innerHTML) {
            icon.className = 'bi bi-plus-lg'
        } else {
            icon.className = 'bi bi-pencil-fill'
        }
    })
}

icons.forEach(i => {
    i.addEventListener('click',() => {
        openModal(i)
    })
})

const openModal = i => {
    let findModal = modalsArray.find(modal => i.id == modal.id)
        
    if (findModal) {
        findModal.style.display = 'block'
        let closeModal = findModal.shadowRoot.querySelector('i')
        document.querySelector('section').style.filter = 'blur(5px)'

        document.body.classList.add('active')
        
        
        closeModal.addEventListener('click',() => {
            findModal.style.display = 'none'
            document.querySelector('section').style.filter = 'none'
            document.body.classList.remove('active')
        })
    }
}
let inputCofrim = null

modals.forEach(modal => {
    let btn = modal.shadowRoot.querySelector('.confirm')
    
    btn.addEventListener('click',() => {

        if(modal.id === 'name-lastname') {

            inputCofrim = modal.shadowRoot.querySelector('input')
            editUserName()
            if (inputCofrim.value.trim()) {
                closeModalBtn(modal)
            }
            
            
        } else {
            inputCofrim = modal.shadowRoot.querySelector('input')
            editPhoneNumber(modal)
        }


    })
})
const editUserName = async () => {

    if (document.cookie.includes('userID')) {
        let findIndexCookie = document.cookie.indexOf('=')

        let userID =  document.cookie.slice(findIndexCookie + 1,)


        let res = await fetch('https://itsrealdatabase-default-rtdb.firebaseio.com/phone.json')
        let jsonUser = await res.json()

        let arr = Object.entries(jsonUser)

        let findID = arr.find(i => +userID === i[1].id)

        putOnAPI(findID)

    }

}

const putOnAPI = async id => {
    

    let newObj = id[1]
    newObj.userName = inputCofrim.value

    let res = await fetch(`https://itsrealdatabase-default-rtdb.firebaseio.com/phone/${id[0]}.json`,{
        method : 'PUT',
        headers : {
            'Content-type' : 'application/json'
        } ,
        body:JSON.stringify(newObj)
    })

    getUserData()

}

const editPhoneNumber = async (modal) => {
    if (document.cookie.includes('userID')) {
        if (regex.test(inputCofrim.value) && (inputCofrim.value.length === 11 || inputCofrim.value.length === 10)) {

            let findIndexCookie = document.cookie.indexOf('=')

            let userID =  document.cookie.slice(findIndexCookie + 1,)
    
    
            let res = await fetch('https://itsrealdatabase-default-rtdb.firebaseio.com/phone.json')
            let jsonUser = await res.json()
    
            let arr = Object.entries(jsonUser)

            let isPhoneIncludes = arr.some(i => i[1].phoneNumber == inputCofrim.value)

            if (!isPhoneIncludes) {
                let findID = arr.find(i => +userID === i[1].id)
    
                let newObj = findID[1]
                newObj.phoneNumber = inputCofrim.value
        
                await fetch(`https://itsrealdatabase-default-rtdb.firebaseio.com/phone/${findID[0]}.json`,{
                    method : 'PUT',
                    headers : {
                        'Content-type' : 'application/json'
                } ,
                    body:JSON.stringify(newObj)
                })

                inputCofrim.style.border = '1px solid rgb(174, 174, 174)'
                closeModalBtn(modal)
                
                getUserData()
            } else {
                inputCofrim.style.border = '1px solid rgb(189, 0, 0)'
            }

        } else {
            inputCofrim.style.border = '1px solid rgb(189, 0, 0)'
        }
    }
}





// const ns = async () => {
//     let findIndexCookie = document.cookie.indexOf('=')

//     let userID =  document.cookie.slice(findIndexCookie + 1,)
    
    
//     let res = await fetch('https://itsrealdatabase-default-rtdb.firebaseio.com/phone.json')
//     let jsonUser = await res.json()
    
//     let arr = Object.entries(jsonUser)
    
    

    

// }




// ns()









const closeModalBtn = (modal) => {
    modal.style.display = 'none'
    document.querySelector('section').style.filter = 'none'
    document.body.classList.remove('active')
}


const logOutUser = () => {
    if (document.cookie.includes('userID')) {
        let time = new Date()

        time.setTime(time.getTime() - 1 * 24 * 60 * 60 * 1000)
    
        document.cookie = `userID=a;path=/;expires=${time}`

        location.href = 'http://127.0.0.1:5500/'
    }
}

logOutBtn.addEventListener('click',logOutUser)