const qs = (selector) => document.querySelector(selector);
window.addEventListener('load', () => {
    let form = qs('#form');
    let name = qs('#name');
    let surname = qs('#surname');
    let image = qs('#image')
   
    let errorName = qs('#errorName');
    let errorSurname = qs('#errorSurname');
    let errorImage = qs('#errorImage');
   
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;


    name.addEventListener('blur', () => {
        switch (true) {
            case name.value.length === 0:
            
                errorName.innerHTML = 'Debes ingresar un nombre con mas de tres letras.'
                errores = true
                break;
            default:
          
                errorName.innerHTML = ''

        }
    })
    surname.addEventListener('blur', () => {
        switch (true) {
            case surname.value.length === 0:
                errorSurname.innerHTML = 'Debes seleccionar un apellido'
                errores = true
                break;
            default:
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