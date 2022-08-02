const qs = (selector) => document.querySelector (selector)

window.addEventListener ('load', () => {
    let register = qs('#register'),
        name = qs('#name'),
        surname = qs('#surname'),
        email = qs('#email'),
        pass = qs('#password'),
        pass2 = qs('#password2'),
        errorEmail = qs('#errorEmail'),
        errorPass = qs('#errorPass'),
        regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
        errores;
        
        name.addEventListener('blur', ()=> {
            switch (true) {
                 case name.value.length == 0:
                    errorName.innerHTML = 'Campo requerido';
                    name.classList.add('is-invalid');
                    errores = true
                    break;
                case name.value.length <= 2 :
                    errorName.innerHTML = 'minimo 3 caracteres';
                    name.classList.add('is-invalid');
                    errores = true;
                    break;
                default:
                    name.classList.remove('is-invalid');
                    name.classList.add('is-valid');
                    errorName.innerHTML = "";
                    errores = false
                    break;
            }
            
        })
        surname.addEventListener('blur', ()=> {
            switch (true) {
                case surname.value.length == 0:
                    errorSurname.innerHTML = 'Campo requerido';
                    surname.classList.add('is-invalid');
                    break;
                case surname.value.length <= 2 :
                    errorSurname.innerHTML = 'minimo 3 caracteres';
                    surname.classList.add('is-invalid');
                    break;
                default:
                    surname.classList.remove('is-invalid');
                    surname.classList.add('is-valid');
                    errorSurname.innerHTML = "";
                    break;
            }
            
        })
        email.addEventListener('blur', () =>{
            switch (true) {
                case email.value.length == 0:
                    errorEmail.innerHTML = "El campo email es obligatorio";
                    email.classList.add('is-invalid');
                    errores = true;
                    break;
                case !regExEmail.test(email.value):
                    errorEmail.innerHTML = "Escriba un mail válido";
                    email.classList.add('is-invalid');
                    errores = true;
                    break;
                default:
                    email.classList.remove('is-invalid');
                    email.classList.add('is-valid');
                    errorEmail.innerHTML = "";
                    errores = false
                    break;
            }
        })
        
})