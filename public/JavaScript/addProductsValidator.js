const qs = (selector) => document.querySelector(selector);
window.addEventListener("load", () => {
  let form = qs("#form");
  let name = qs("#name");
  let material = qs("#materialId");
  let category = qs("#categoryId");
  let units = qs("#units");
  let price = qs("#price");
  let size = qs("#sizeId");
  let images = qs("#images");
  let description = qs("#description");
  let discount = qs("#discount");
  let errorName = qs("#errorName");
  let errorMaterial = qs("#errorMaterial");
  let errorCategory = qs("#errorCategory");
  let errorUnits = qs("#errorUnits");
  let errorPrice = qs("#errorPrice");
  let errorSize = qs("#errorSize");
  let errorDescription = qs("#errorDescription");
  let errorDiscount = qs("#errorDiscount");
  let errorImages = qs("#errorImages");
  let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

  name.addEventListener("blur", () => {
    if (name.value.length < 3) {
      errorName.innerHTML = "Debes ingresar un nombre con mas de tres letras.";
      errores = true;
      name.classList.remove("isValid");
      name.classList.add("notValid");
    } else {
      errorName.innerHTML = "";
      name.classList.remove("notValid");
      name.classList.add("isValid");
    }
  });
  category.addEventListener("blur", () => {
    if (category.value.length === 0) {
      errorCategory.innerHTML = "Debes seleccionar una categoria";
      errores = true;
      category.classList.remove("isValid");
      category.classList.add("notValid");
    } else {
      errorCategory.innerHTML = "";
      category.classList.remove("notValid");
      category.classList.add("isValid");
    }
  });
  units.addEventListener("blur", () => {
    switch (true) {
      case units.value.length === 0:
        errorUnits.innerHTML = "Debes las unidades";
        errores = true;
        units.classList.remove("isValid");
        units.classList.add("notValid");
        break;
      default:
        errorUnits.innerHTML = "";
        units.classList.remove("notValid");
        units.classList.add("isValid");
    }
  });
  price.addEventListener("blur", () => {
    switch (true) {
      case price.value.length === 0:
        errorPrice.innerHTML = "Debes el precio";
        price.classList.remove("isValid");
        price.classList.add("notValid");
        errores = true;
        break;
      default:
        errorPrice.innerHTML = "";
        price.classList.remove("notValid");
        price.classList.add("isValid");
    }
  });
  size.addEventListener("blur", () => {
    switch (true) {
      case size.value.length === 0:
        errorSize.innerHTML = "Debes seleccionar el talle";
        errores = true;
        size.classList.remove("isValid");
        size.classList.add("notValid");
        break;
      default:
        errorSize.innerHTML = "";
        size.classList.remove("notValid");
        size.classList.add("isValid");
    }
  });
  description.addEventListener("blur", () => {
    switch (true) {
      case description.value.length === 0:
        errorDescription.innerHTML = "Debes agregar una descripcion";
        errores = true;
        description.classList.remove("isValid");
        description.classList.add("notValid");
        break;
      default:
        errorDescription.innerHTML = "";
        description.classList.remove("notValid");
        description.classList.add("isValid");
    }
  });
  material.addEventListener("blur", () => {
    switch (true) {
      case material.value.length === 0:
        errorMaterial.innerHTML = "Debes seleccionar el material";
        errores = true;
        material.classList.remove("isValid");
        material.classList.add("notValid");
        break;
      default:
        errorMaterial.innerHTML = "";
        material.classList.remove("notValid");
        material.classList.add("isValid");
    }
  });
  discount.addEventListener("blur", () => {
    switch (true) {
      case discount.value.length === 0:
        errorDiscount.innerHTML =
          "En caso de no tener descuento debes ingresar 0";
        errores = true;
        discount.classList.remove("isValid");
        discount.classList.add("notValid");
        break;
      default:
        errorDiscount.innerHTML = "";
        discount.classList.remove("notValid");
        discount.classList.add("isValid");
    }
  });

  images.addEventListener("change", () => {
    if (!allowedExtensions.exec(images.value)) {
      images.value = "";
      errorImages.innerHTML = "Formato no valido";
    } else {
      errorImages.innerHTML = "";
    }
  });

  form.addEventListener("submit", (event) => {
    let errores = true;
    event.preventDefault();

    let elementosForm = form.elements;

    for (let i = 0; i < elementosForm.length - 2; i++) {
      if (elementosForm[i].value === "") {
        errorForm.innerHTML = "*Revisa los campos señalados";
        errores = true;
        break;
      } else {
        errores = false;
      }
    }
    if (errores == false) {
      errorForm.innerHTML = "";
      form.submit();
    }
  });
});
