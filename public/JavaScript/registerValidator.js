const qs = (selector) => document.querySelector(selector);

window.addEventListener("load", () => {
    let alert = qs(".alert-name");
    let alertSurname = qs(".alert-surname");
    let alertEmail = qs(".alert-email");
    let alertPassword = qs(".alert-password");
    let alertPassword2 = qs(".alert-password2");
    let alertTerminos = qs(".alert-terminos");
    let alertDate = qs(".alert-date");
    let alertCountry = qs(".alert-country");
    let alertGender= qs(".alert-gender");
    let msg = qs(".msgError");
    let name = qs("#name");
    let surname = qs("#surname");
    let email = qs("#email");
    let password = qs("#password");
    let password2 = qs("#password2");
    let date = qs("#date");
    let country = qs("#country");
    let gender = document.getElementsByName("gender");
    let form = qs(".register__form");
    let terminos = qs('#terminos')

    //funciones
    const verifyEmail = async (email) => {
        try {
            let response = await fetch("/users/api/check-email", {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            let result = await response.json();
            return result.data;
        } catch (error) {
            console.error;
        }
    };
  

    //expresiones regulares
    const regExLetter = /^[a-zA-Z\s]+$/;
    const regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    const regExpDate = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/
    
    
    name.addEventListener("blur", (e) => {
        switch (true) {
            case !e.target.value.trim():
                name.classList.remove("isValid");
                alert.innerHTML = "Debes ingresar un nombre";
                name.classList.add("notValid");
                break;
            case e.target.value.trim().length < 3 ||
            e.target.value.trim().length > 50:
                name.classList.remove("isValid");
                alert.innerHTML =
                    "Debes ingresar un apellido con más de 3 caracteres y menos de 50";
                name.classList.add("notValid");
                break;
            case !regExLetter.test(name.value):
                name.classList.remove("isValid");
                alert.innerHTML = "Solo se permiten letras y espacios";
                name.classList.add("notValid");
                break;
            default:
                alert.innerHTML = "";
                name.classList.add("isValid");
                name.classList.remove("notValid");
                break;
        }
    });
    surname.addEventListener("blur", (e) => {
        switch (true) {
            case !e.target.value.trim():
                surname.classList.remove("isValid");
                alertSurname.innerHTML = "Debes ingresar un apellido";
                surname.classList.add("notValid");
                break;
            case e.target.value.trim().length < 3 ||
            e.target.value.trim().length > 50:
                surname.classList.remove("isValid");
                alertSurname.innerHTML =
                    "Debes ingresar un nombre con más de 3 caracteres y menos de 50";
                surname.classList.add("notValid");
                break;
            case !regExLetter.test(name.value):
                surname.classList.remove("isValid");
                alertSurname.innerHTML = "Solo se permiten letras";
                surname.classList.add("notValid");
                break;
            default:
                alertSurname.innerHTML = "";
                surname.classList.add("isValid");
                surname.classList.remove("notValid");
                break;
        }
    });

    email.addEventListener("blur", async (e) => {
        switch (true) {
            case !e.target.value.trim():
                email.classList.remove("isValid");
                alertEmail.innerHTML = "Debes ingresar un email";
                email.classList.add("notValid");
                break;
            case await verifyEmail(email.value.trim()):
                email.classList.remove("isValid");
                alertEmail.innerHTML = "El email ya se encuentra registrado";
                email.classList.add("notValid");
                break;
            case !regExEmail.test(email.value):
                email.classList.remove("isValid");
                alertEmail.innerHTML = "Email invalido";
                email.classList.add("notValid");
                break;
            default:
                alertEmail.innerHTML = "";
                email.classList.add("isValid");
                email.classList.remove("notValid");
                break;
        }
    });

    password.addEventListener("blur", (e) => {
        switch (true) {
            case !e.target.value.trim():
                password.classList.remove("isValid");
                alertPassword.innerHTML = "Debes ingresar una contraseña";
                password.classList.add("notValid");
                break;
            case !regExPass.test(password.value):
                password.classList.remove("isValid");
                alertPassword.innerHTML =
                    "La contraseña debe tener entre 6 y 12 caracteres, un número, una mayúscula y un caracter";
                password.classList.add("notValid");

                break;
            default:
                alertPassword.innerHTML = "";
                password.classList.add("isValid");
                password.classList.remove("notValid");
                break;
        }
    });
    password2.addEventListener("blur", (e) => {
        switch (true) {
            case !e.target.value.trim():
                password2.classList.remove("isValid");
                alertPassword2.innerHTML = "Debes ingresar una contraseña";
                password2.classList.add("notValid");
                break;
            case password2.value.trim() !== qs("#password").value.trim():
                password2.classList.remove("isValid");
                alertPassword2.innerHTML = "Las contraseñas no coinciden";
                password2.classList.add("notValid");

                break;
            default:
                alertPassword2.innerHTML = "";
                password2.classList.add("isValid");
                password2.classList.remove("notValid");
                break;
        }
    });
    date.addEventListener('blur', (e) => {
        console.log(date.value);

        switch (true) {
            case !e.target.value:
                date.classList.remove("isValid");
                alertDate.innerHTML = "Debes ingresar una fecha";
                date.classList.add("notValid");
                break;
            case !regExpDate.test(date.value):
                date.classList.remove("isValid");
                alertDate.innerHTML =
                    "Debes ingresar una fecha valida";
                date.classList.add("notValid");
                break;
            default:
                alertDate.innerHTML = "";
                date.classList.add("isValid");
                date.classList.remove("notValid");
                break;
        }

    })
    country.addEventListener('blur', (e)=>{
        if(!e.target.value){
            country.classList.remove("isValid");
            alertCountry.innerHTML =
                "Debes seleccionar un país";
            country.classList.add("notValid");
        }else{
            alertCountry.innerHTML = "";
            country.classList.add("isValid");
            country.classList.remove("notValid");
        }

    })

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let error = false;
        let elements = this.elements;
        let flag = false; 
        console.log(elements);

        for (let i = 0; i < elements.length - 2; i++) {
            if (!elements[i].value) {
                elements[i].classList.add('notValid');

                error = true
            }
        }

        for (let i = 0; i < elements.length - 2; i++) {

            if (elements[i].classList.contains('notValid')) {
                error = true
            }
        }
        for (let i = 0; i < gender.length; i++) {
             if(gender[i].checked){
               console.log(gender[i]);
                flag= true
             };
            
        }
        if(!flag){
            alertGender.innerHTML = "Debes seleccionar un género"
        }else{
            alertGender.innerHTML = ""
        }
      

        if (!terminos.checked) {
            terminos.classList.add('notValid')
            alertTerminos.innerHTML = "Debes aceptar las bases y condiciones"
            error = true
        }else{
            alertTerminos.innerHTML = ""
        }

        if (!error) {
            e.target.submit();
            msgError.innerHTML = null
        } else {
            msg.innerHTML = "*Todos los campos son obligatorios";
        }
    })
});