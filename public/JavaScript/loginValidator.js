
// const qs = (selector) => document.querySelector (selector)

// window.addEventListener ('load', () => {
//     let login = qs('#form'),
//         email = qs('#email'),
//         pass = qs('#password'),
//         errorEmail = qs('#errorEmail'),
//         errorPass = qs('#errorPass'),
//         regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
//         regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/,

//         errores;


//         email.addEventListener('blur', () => {
//             switch (true) {
//                 case email.value.length == 0:
//                     errorEmail.innerHTML = 'El campo es obligarorio'
//                     errores = true
//                 break;
//                 case !regExEmail.test(email.value):
//                     errorEmail.innerHTML = 'El mail no es valido'
//                     errores = true
//                     break;
//                 default:
//                     errorEmail.innerHTML = ''
//                     errores = false
//                     break;
//         }
//     })
//     pass.addEventListener('blur', () => {
//         switch (true) {
//             case pass.value.length == 0:
//                 errorPass.innerHTML = 'El campo es obligarorio'
//                 errores = true
//                 break;
//             case !regExPass.test(pass.value):
//                 errorPass.innerHTML = 'La contraseña no es válida'
//                 errores = true
//                 break;
//             default:
//                 errorPass.innerHTML = ''
//                 errores = false
//                 break;
//         }
//         })
//         login.addEventListener('submit', (e) => {
//             e.preventDefault()
//             switch (true) {
//                 case email.value.length == 0:
//                     errorEmail.innerHTML = 'Campo requerido'
//                     errores = true
//                     break;
//                 case !regExEmail.test(email.value):
//                     errorEmail.innerHTML = 'Escriba un mail valido'
//                     errores = true
//                     break;
//                 case pass.value.length == 0:
//                     errorPass.innerHTML = 'Campo requerido'
//                     errores = true
//                     break;
//                 case !regExPass.test(pass.value):
//                     errorPass.innerHTML = 'Escriba un Password valido'
//                     errores = true
//                     break;
//                 default:
//                     if(!errores){
//                         login.submit()
//                         errores = false
//                     }else{
//                         errores = true
//                     }
//                 break;
//             }
//         })

// })