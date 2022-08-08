const qs = (selector) => document.querySelector(selector);
window.addEventListener('load', () => {
    let form = qs('#form');
    let name = qs('#name');
    let material = qs('#materialId');
    let category = qs('#categoryId');
    let units = qs('#units');
    let price = qs('#price');
    let size = qs('#sizeId');
    let images = qs('#images')
    let description = qs('#description');
    let discount = qs('#discount');
    let errorName = qs('#errorName');
    let errorMaterial = qs('#errorMaterial');
    let errorCategory = qs('#errorCategory');
    let errorUnits = qs('#errorUnits');
    let errorPrice = qs('#errorPrice');
    let errorSize = qs('#errorSize');
    let errorDescription = qs('#errorDescription');
    let errorDiscount = qs('#errorDiscount');
    let errorImages = qs('#errorImages'); 
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;


    name.addEventListener('blur', () => {
        switch (true) {
            case name.value.length < 3:
                errorName.innerHTML = 'Debes ingresar un nombre con mas de tres letras.'
                errores = true
                break;
            default:
                errorName.innerHTML = ''

        }
    })
    category.addEventListener('blur', () => {
        switch (true) {
            case category.value.length === 0:
                errorCategory.innerHTML = 'Debes seleccionar una categoria'
                errores = true
                break;
            default:
                errorCategory.innerHTML = ''

        }
    })
    units.addEventListener('blur', () => {
        switch (true) {
            case units.value.length === 0:
                errorUnits.innerHTML = 'Debes las unidades'
                errores = true
                break;
            default:
                errorUnits.innerHTML = ''

        }
    })
    price.addEventListener('blur', () => {
        switch (true) {
            case price.value.length === 0:
                errorPrice.innerHTML = 'Debes el precio'
                errores = true
                break;
            default:
                errorPrice.innerHTML = ''

        }
    })
    size.addEventListener('blur', () => {
        switch (true) {
            case size.value.length === 0:
                errorSize.innerHTML = 'Debes seleccionar el talle'
                errores = true
                break;
            default:
                errorSize.innerHTML = ''

        }
    })
    description.addEventListener('blur', () => {
        switch (true) {
            case description.value.length === 0:
                errorDescription.innerHTML = 'Debes agregar una descripcion'
                errores = true
                break;
            default:
                errorDescription.innerHTML = ''

        }
    })
    material.addEventListener('blur', () => {
        switch (true) {
            case material.value.length === 0:
                errorMaterial.innerHTML = 'Debes seleccionar el material'
                errores = true
                break;
            default:
                errorMaterial.innerHTML = ''

        }
    })
    discount.addEventListener('blur', () => {
        switch (true) {
            case discount.value.length === 0:
                errorDiscount.innerHTML = 'En caso de no tener descuento debes ingresar 0'
                errores = true
                break;
            default:
                errorDiscount.innerHTML = ''

        }
    })
    discount.addEventListener('blur', () => {
        switch (true) {
            case discount.value.length === 0:
                errorDiscount.innerHTML = 'En caso de no tener descuento debes ingresar 0'
                errores = true
                break;
            default:
                errorDiscount.innerHTML = ''

        }
    })
    images.addEventListener('change', () => {
    
    if(!allowedExtensions.exec(images.value)){
        images.value = ""
        errorImages.innerHTML = 'Formato no valido'
    }else{
        errorImages.innerHTML = ''
    }
    })
    
    form.addEventListener('submit',(event) => {
        let errores = true;
        event.preventDefault()
    
        let elementosForm = form.elements
        
        for (let i = 0; i < elementosForm.length-2; i++) {
     
            if(elementosForm[i].value === "" ){
                errorForm.innerHTML = "*Revisa los campos señalados";
                errores = true;
                break; 
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