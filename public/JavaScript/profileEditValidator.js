const qs = (selector) => document.querySelector(selector);
window.addEventListener('load', () => {
    let form = qs('#form');
    let name = qs('#name');
    let surname = qs('#surname');
    let image = qs('#image'); 
 
    let errorName = qs('#errorName');
    let errorSurname = qs('#errorSurname');
    let errorImage = qs('#errorImage');
   
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;


    name.addEventListener('blur', () => {
   
            if(name.value.length < 3){
                errorName.innerHTML = 'Debes ingresar un nombre con mas de tres letras.'
                errores = true
                name.classList.remove('isValid')
                name.classList.add('notValid')
            }else{
                errorName.innerHTML = ''
                name.classList.remove('notValid')
                name.classList.add('isValid')
                
            }

    })
    surname.addEventListener('blur', () => {
        if(surname.value.length === 0){
            errorSurname.innerHTML = 'Debes seleccionar un apellido'
            surname.classList.remove('isValid')
            surname.classList.add('notValid')
            errores = true
        }else{
            surname.classList.remove('notValid')
            surname.classList.add('isValid')
            errorSurname.innerHTML = ''
        }
    })

    image.addEventListener('change', () => {
    
    if(!allowedExtensions.exec(image.value)){
        images.value = ""
        errorImage.innerHTML = 'Formato no valido'
    }else{
        errorImage.innerHTML = ''
    }
    })

    
    form.addEventListener('submit',(event) => {

        let errores = true;
        event.preventDefault()
    
        let elementosForm = form.elements
        
        for (let i = 0; i < elementosForm.length-3; i++) {
            if(elementosForm[i].value === "" ){
            errorForm.innerHTML = "*Revisa los campos señalados";
                errores = true;
                break; 
            }else{
                errores = false;
            }
        }
        if(errores === false){
            errorForm.innerHTML = ''
            form.submit();
        }
    })
    
 






})