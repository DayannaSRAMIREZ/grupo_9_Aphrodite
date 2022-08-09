
const qs = (selector) => document.querySelector(selector)

window.addEventListener('load', ()=>{
let alert = qs('.alert-name'); 
let alertSurname = qs('.alert-surname');
let alertEmail = qs('.alert-email');
let name = qs('#name'); 
let surname = qs('#surname'); 
let email = qs('#email'); 
let password = qs('#password'); 
let password2 = qs('#password2'); 
let date = qs('#date'); 
let country = qs('#country'); 
let gender = document.getElementsByName('gender'); 
let terminos = qs('#terminos'); 


//funciones
const verifyEmail = async (email) => {
    try {
        let response = await fetch('/users/api/check-email', {
            method : 'POST',
            body : JSON.stringify({
                email: email
            }),
            headers : {
                'Content-Type': 'application/json' 
            }
            
        })
        let result = await response.json();
        return result.data;
       
    } catch (error) {
        console.error
    }
}


//expresiones regulares
const regExLetter = /^[a-zA-Z\s]+$/;
const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;


name.addEventListener('blur', (e) => { 

switch (true) {
    case !e.target.value.trim():
        name.classList.remove('isValid')
        alert.innerHTML = 'Debes ingresar un nombre'
        name.classList.add('notValid')
        break;
    case e.target.value.trim().length<3 ||  e.target.value.trim().length>50:
            name.classList.remove('isValid')
            alert.innerHTML = 'Debes ingresar un apellido con más de 3 caracteres y menos de 50'
            name.classList.add('notValid')
            break;
    case !regExLetter.test(name.value):
            name.classList.remove('isValid')
                alert.innerHTML = 'Solo se permiten letras y espacios'
                name.classList.add('notValid')
                break;
    default:
        alert.innerHTML = ''; 
        name.classList.add('isValid')
        name.classList.remove('notValid')
        break;
}

}); 
    surname.addEventListener('blur', (e) => { 

        switch (true) {
            case !e.target.value.trim():
                surname.classList.remove('isValid')
                alertSurname.innerHTML = 'Debes ingresar un apellido'
                surname.classList.add('notValid')
                break;
            case e.target.value.trim().length<3 ||  e.target.value.trim().length>50:
                surname.classList.remove('isValid')
                    alertSurname.innerHTML = 'Debes ingresar un nombre con más de 3 caracteres y menos de 50'
                    surname.classList.add('notValid')
                    break;
            case !regExLetter.test(name.value):
                    surname.classList.remove('isValid')
                        alertSurname.innerHTML = 'Solo se permiten letras'
                        surname.classList.add('notValid')
                        break;
            default:
                alertSurname.innerHTML = ''; 
                surname.classList.add('isValid')
                surname.classList.remove('notValid')
                break;
        }
        })


        email.addEventListener('blur',async (e)=>{
            switch (true) {
                case !e.target.value.trim():
                    email.classList.remove('isValid')
                    alertEmail.innerHTML = 'Debes ingresar un email'
                    email.classList.add('notValid')
                    break;
                    case await verifyEmail(email.value.trim()) :
                    email.classList.remove('isValid')
                        alertEmail.innerHTML = 'El email ya se encuentra registrado'
                        email.classList.add('notValid')
                        break;
                case !regExEmail.test(email.value):
                        email.classList.remove('isValid')
                            alertEmail.innerHTML = 'Email invalido'
                            email.classList.add('notValid')
                            break;
                default:
                    alertEmail.innerHTML = ''; 
                    email.classList.add('isValid')
                    email.classList.remove('notValid')
                    break;
            }
        })


})