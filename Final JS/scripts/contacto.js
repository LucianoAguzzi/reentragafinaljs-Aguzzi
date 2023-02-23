const formularioValidacion = document.querySelector("#formulario");
formularioValidacion.onsubmit = (event) => {
  event.preventDefault();
  const usernameInput = document.querySelector("#username");
  if (usernameInput.value.length <= 2) {
    alert("El usuario requiere más de dos caracteres");
    return false;
  }
  const mailInput = document.querySelector("#emailadress");
  if (!mailInput.value.includes("@")) {
    alert("El email requiere un arroba");
    return false;
  }
  formularioValidacion.reset();
  alert("mensaje enviado, gracias por comunicarse con nosotros!");
};
