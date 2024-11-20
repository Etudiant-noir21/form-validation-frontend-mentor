// recuperer le formulaire
const form = document.querySelector('form');
console.log(form)
// recuperer les inputs
const firstname = document.getElementById('firstName')
const lastName = document.getElementById('lastName')

const email = document.getElementById('email')

const inputRadios = document.querySelectorAll('#selectRadio input')
console.log(inputRadios)

const error = document.getElementsByClassName('error')
console.log(error)

let msg = ''

let isValid = true

// let isChecked = true

// let isChecked = false
const button = document.querySelector('button')
console.log(button)

// button.addEventListener('click', function(){
//     validationFOrm()
// })

function validationFOrm(){
    NameValidation()
    emailValidation()
    checkQuery()
    messageValidation()
    consentValidation()

}

// validationFOrm()
// console.log(validationFOrm())

function NameValidation(){
    if(firstname.value===''){
        isValid = false
        msg = 'This field is required'
        error[0].innerHTML = msg
    }else{
        error[0].innerHTML = ''
    }

    // LAStName

    if(lastName.value===''){
        isValid = false
        msg = 'This field is required'
        error[1].innerHTML = msg
    }else{
        error[1].innerHTML = ''
    }

    return isValid
}

// fonction email
function emailValidation(){
    let regexpMail = /^[a-z0-9._-]+@gmail\.com$/

    if(regexpMail.test(email.value)){
        isValid = true
        error[2].innerHTML = ''
    }else{
        msg = 'Please enter a valid email address'
        error[2].innerHTML = msg
    }
    return isValid
}

// fonction check

function checkQuery(){

    inputRadios.forEach(radio => {
        if(radio.checked){
            isValid = true
        }
    })

    if(!isValid){
        msg = 'Please select a query'
        error[3].innerHTML = msg
    }else{
        error[3].innerHTML = ''
    }
    return isValid
}

// fonction message
function messageValidation(){
    const message = document.getElementById('message')
    if(message.value ===''){
        isValid = false
        msg = 'Please enter a message'
        error[4].innerHTML = msg
    }else{
        error[4].innerHTML = ''
        // isValid = true

    }

    return isValid
}

// fonction consent 
function consentValidation(){
  let  isChecked = true
    const consent = document.getElementById('consent')
    if(consent.checked === false){
        isValid = false
        msg = 'Please accept the terms and conditions'
        error[5].innerHTML = msg
    }else{
        error[5].innerHTML = ''
        isChecked 
    }
    return isValid
    }

    // fonction submit
    form.addEventListener('submit', function(e){
        e.preventDefault()
        validationFOrm()
        if(isValid){
            form.submit()
            alert('Your message has been sent')
        }
    })