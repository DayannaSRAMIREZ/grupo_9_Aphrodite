
const qs = (selector) => document.querySelector (selector)

window.addEventListener ('load', () => {
    let form = qs('#form'),
        email = qs('#email'),
        pass = qs('#password'),
        errorEmail = qs('#errorEmail'),
        errorPass = qs('#errorPass'),
        regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
        errores;


        email.addEventListener('blur', () => {
            switch (true) {
                case email.value.length == 0:
                    errorEmail.innerHTML = 'El campo es obligarorio'
                    email.classList.add('')
                    errores = true
                break;

                case !regExEmail.test(email.value):
                    errorEmail.innerHTML = 'El mail no es valido'
                    email.classList.add('is-invalid')
                    errores = true
                    break;
                default:
                    email.classList.remove('is-invalid')
                    email.classList.add('is-valid')
                    errorEmail.innerHTML = ''
                    errores = false
                    break;
        }
    })
    pass.addEventListener('blur', () => {
        switch (true) {
            case pass.value.length == 0:
                errorPass.innerHTML = 'el campo es obligarorio'
                pass.classList.add('is-invalid')
                errores = true
                break;
            case !regExPass.test(pass.value):
                errorPass.innerHTML = 'la contraseña no es válida'
                pass.classList.add('is-invalid')
                errores = true
                break;
            default:
                pass.classList.remove('is-invalid')
                pass.classList.add('is-valid')
                errorPass.innerHTML = ''
                errores = false
                break;
        }
        })
        login.addEventListener('submit', (event) => {
            e.preventDefault()
            switch (true) {
                case email.value.length == 0:
                    errorEmail.innerHTML = 'el campo es obligatorio'
                    email.classList.add('is-invalid')
                    errores = true
                    break;
                case !regExEmail.test(email.value):
                    errorEmail.innerHTML = 'escriba un mail valido'
                    email.classList.add('is-invalid')
                    errores = true
                    break;
                case pass.value.length == 0:
                    errorPass.innerHTML = 'el campo es obligarorio'
                    pass.classList.add('is-invalid')
                    errores = true
                    break;
                case !regExPass.test(pass.value):
                    errorPass.innerHTML = 'escriba un Password valido'
                    pass.classList.add('is-invalid')
                    errores = true
                    break;
                default:
                    if(!errores){
                        login.submit()
                        errores = false
                    }else{
                        errores = true
                    }
                break;
            }
        })

})