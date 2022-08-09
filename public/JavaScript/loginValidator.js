const qs = (selector) => document.querySelector(selector)

window.addEventListener ('load', () => {
    let login = qs('#form'),
        email = qs('#email'),
        pass = qs('#password'),
        errorEmail = qs('#errorEmail'),
        errorPass = qs('#errorPass'),
        regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

        let errores= false;


        email.addEventListener('blur', () => {
            switch (true) {
                case email.value.length == 0:
                    email.classList.remove('isValid')
                    errorEmail.innerHTML = 'El campo es obligarorio'
                    email.classList.add('notValid')
                    errores = true
                break;
                case !regExEmail.test(email.value):
                    email.classList.remove('isValid')
                    email.classList.add('notValid')
                    errorEmail.innerHTML = 'El mail no es valido'
                    errores = true
                    break;
                default:
                    email.classList.remove('notValid')
                    email.classList.add('isValid')
                    errorEmail.innerHTML = ''
                    errores = false
                    break;
        }
    })
    pass.addEventListener('blur', () => {
        switch (true) {
            case pass.value.length === 0:
                pass.classList.remove('isValid')
                pass.classList.add('notValid')
                errorPass.innerHTML = 'El campo es obligarorio'
                errores = true
                break;
            case !regExPass.test(pass.value):
                pass.classList.remove('isValid')
                pass.classList.add('notValid')
                errorPass.innerHTML = 'La contraseña no es válida'
                errores = true
                break;
            default:
                pass.classList.remove('notValid')
                pass.classList.add('isValid')
                errorPass.innerHTML = ''
                errores = false
                break;
        }
        })
        login.addEventListener('submit', (e) => {
            e.preventDefault()
            
            
        })

})