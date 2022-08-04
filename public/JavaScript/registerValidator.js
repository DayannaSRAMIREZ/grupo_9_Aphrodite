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
        errorPass2 = qs('#errorPass2'),
        regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/,
        errores;
        
        name.addEventListener('blur', ()=> {
            switch (true) {
                 case name.value.length == 0:
                    errorName.innerHTML = 'Campo requerido';
                    name.classList.add('is-invalid');
                    errores = true
                    break;
                case name.value.length <= 1 :
                    errorName.innerHTML = 'minimo 2 caracteres';
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
                case surname.value.length <= 1 :
                    errorSurname.innerHTML = 'minimo 2 caracteres';
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
                    errorEmail.innerHTML = "Campo requerido";
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
        email.addEventListener('blur', () => {
            fetch('http://localhost:3000/apis/usuarios')
            .then(response => response.json())
            .then(result => {
                result.data.forEach(element => {
                    if(email.value === element.email){
                        errorEmail.innerHTML = "email ya registrado";
                        email.classList.add('is-invalid');
                        errores = true;
                    }
                });
            })
        })
        pass.addEventListener('blur', () => {
            switch (true) {
                case pass.value.length == "":
                    errorPass.innerHTML = "Campo requerido";
                    pass.classList.add('is-invalid');
                    errores = true;
                    break;
                case !regExPass.test(pass.value):
                    errorPass.innerHTML = "La contraseña debe tener: un minimo de 8 caracteres, al menos un número, una minúscula y una mayúscula";
                    pass.classList.add('is-invalid');
                    errores = true;
                    break;
                default:
                    pass.classList.remove('is-invalid');
                    pass.classList.add('is-valid');
                    errorPass.innerHTML = "";
                    errores = false;
                    break; 
            }
        })
        pass2.addEventListener('blur', () => {
            switch (true) {
                case pass2.value.length == "":
                    errorPass2.innerHTML = "Campo requerido";
                    pass2.classList.add('is-invalid');
                    errores = true;
                    break;
                case pass2.value != pass.value:
                    errorPass2.innerHTML = "Las contraseñas no coinciden";
                    pass2.classList.add('is-invalid');
                    errores = true;
                    break;
                default:
                    pass2.classList.remove('is-invalid');
                    pass2.classList.add('is-valid');
                    errorPass2.innerHTML = "";
                    errores = false;
                    break; 
            }
        })
        pass.addEventListener('change', () => {
            switch (true) {
                case pass.value != pass2.value:
                    errorPass2.innerHTML = "Las contraseñas no coinciden";
                    pass2.classList.add('is-invalid');
                    errores = true;
                    break;
                default:
                    pass2.classList.remove('is-invalid');
                    pass2.classList.add('is-valid');
                    errorPass2.innerHTML = "";
                    errores = false;
                    break;
            }
        })
        register.addEventListener('submit',(event) => {
            let errores = true;
            event.preventDefault()
        
            let elementosForm = register.elements
            
            for (let i = 0; i < elementosForm.length-1; i++) {
                if(elementosForm[i].value === ""  || elementosForm[i].classList.contains('is-invalid')){
                    elementosForm[i].classList.add('is-invalid');
                    errorForm.innerHTML = "Revisa los campos señalados";
                    errores = true;
                }else{
                    errores = false;
                }
            }
            if(errores == false){
                errorForm.innerHTML = '';
                alert("Se registró correctamente");
                register.submit();
            }
        })
})