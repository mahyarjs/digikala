const form = document.querySelector('form')
const input = document.querySelector('input')
const span = document.querySelector('span')
const button = document.querySelector('button')

const checkLogin = () => {
    if (document.cookie.includes('userID')) {
        location.href = 'http://127.0.0.1:5500/profile.html'
    }
}

checkLogin()

let regex = /(0?9)\d{8,9}/
let isIncludes = false

const checkInputValue = () => {
    if (regex.test(input.value) && (input.value.length === 11 || input.value.length === 10)) {
        input.style.border = '1px solid rgb(174, 174, 174)'
        span.innerHTML = ''
        return true
    } else {
        input.style.border = '1px solid rgb(189, 0, 0)'
        span.innerHTML = 'لطفا این قسمت را درست پر کنید'
        return false
    }
}

const setCookie = elem => {

    checkInculedsNumber(elem)
    
}

const checkForSetCookie = () => {
    if (checkInputValue) {
        setCookie(input)
    } else {
        checkInputValue()
    }
}

const checkInculedsNumber = async elem => {
    let result = null
    let res = await fetch('https://itsrealdatabase-default-rtdb.firebaseio.com/phone.json')
    let jsonUser = await res.json()

    if (jsonUser) {
        let arr = Object.entries(jsonUser)

        arr.forEach(i => {
            result = arr.some(i => elem.value === i[1].phoneNumber)
        })
        console.log('nns');

        if (result) {
            setUserToken(arr,elem)
            location.href = 'http://127.0.0.1:5500/'
        } else {
            postDataAPI(elem)
        }
        
        
    } else {
        postDataAPI(elem)
    }
}

const postDataAPI = async i => {

    let randomID = Math.floor(Math.random() * 1000)

    await fetch('https://itsrealdatabase-default-rtdb.firebaseio.com/phone.json',{
        method : 'POST',
        headers:{
            'Content-application':'application/json'
        },
        body : JSON.stringify({id:randomID,phoneNumber:i.value , userName:'کاربر',products:{}})
    })
    
    let time = new Date()

    time.setTime(time.getTime() + 30 * 24 * 60 * 60 * 1000)

    document.cookie = `userID=${randomID};path=/;expires=${time}`

    location.href = 'http://127.0.0.1:5500/profile.html'
}



const setUserToken = (arr,elem) => {
    let findID = arr.find(i => elem.value === i[1].phoneNumber)

    let time = new Date()

    time.setTime(time.getTime() + 30 * 24 * 60 * 60 * 1000)

    document.cookie = `userID=${findID[1].id};path=/;expires=${time}`
}


input.addEventListener('keyup',e => {
    
    checkInputValue()
})

input.addEventListener('blur',() => {
    checkInputValue()
})

form.addEventListener('submit',e => {
    e.preventDefault()
})

button.addEventListener('click',() => {
    checkForSetCookie()
})