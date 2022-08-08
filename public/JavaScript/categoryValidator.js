
const qs = (selector) => document.querySelector(selector);
window.addEventListener('load', () => {
    let form = qs('#form');
    let name = qs('#name');
    let errorName = qs('#errorName')



    name.addEventListener('blur', () => {
      if(name.value.length ===0){
        console.log('error');
        errorName.innerHTML = "Debes ingresar el nombre de la categoria" 
      }else{
        errorName.innerHTML = "Debes ingresar el nombre de la categoria" 
      }
    })
    
    form.addEventListener('submit',(event) => {
        let errores = true;
        event.preventDefault()
    
        let elementosForm = form.elements
        
        for (let i = 0; i < elementosForm.length-1; i++) {
            if(elementosForm[i].value === "" ){
                errorForm.innerHTML = "*Revisa los campos señalados";
                errores = true;
            }else{
                errores = false;
            }
        }
        if(errores == false){
            errorForm.innerHTML = ''
            form.submit();
        }
    })
    

 






})