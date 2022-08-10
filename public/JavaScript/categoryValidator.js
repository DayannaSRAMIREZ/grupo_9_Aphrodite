const qs = (selector) => document.querySelector(selector);
window.addEventListener("load", () => {
  let form = qs("#form");
  let name = qs("#name");
  let errorName = qs("#errorName");

  name.addEventListener("blur", () => {
    if (name.value.length === 0) {
      errorName.innerHTML = "Debes ingresar el nombre de la categoria";
      name.classList.remove("isValid");
      name.classList.add("notValid");
    } else {
      errorName.innerHTML = "";
      name.classList.remove("notValid");
      name.classList.add("isValid");
    }
  });

  form.addEventListener("submit", (event) => {
    let errores = true;
    event.preventDefault();

    let elementosForm = form.elements;

    for (let i = 0; i < elementosForm.length - 1; i++) {
      if (elementosForm[i].value === "") {
        errorForm.innerHTML = "*Revisa los campos señalados";
        errores = true;
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
