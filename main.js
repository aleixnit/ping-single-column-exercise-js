// Estos correos ya se han apuntado a la notificación. Esto es para el ejercicio 2
const registeredEmails = [
  "paquita@gmail.com",
  "rosa@gmail.com",
  "faustino@gmail.com",
];

// PASO PREVIO: Añadir un listener al formulario para el event 'submit', y ejecutar el event.preventDefault()

// cuando capture el evneto 'submit', ejecuto la funciónnnnnn 'gestionarSubmit'
document
  .querySelector("#formulario-registro")
  .addEventListener("submit", gestionarSubmit);

function gestionarSubmit(event) {
  event.preventDefault();

  // 1. Teneis que ELIMINAR la clase CSS 'hidden' del div identificado con el id=mensaje

  // hay que usar el document.querySelector para seleccionar el div con id="mensaje". Luego, hay que ELIMINAR la clase 'hidden'.
  document.querySelector("#mensaje").classList.remove("hidden");

  // 2. Teneis que aplicar un estilo en línea en el tag form, para ocultar el formulario
  // Por ejemplo, si quisiera modificar los estilos en línea de un <em> para aumentar su font-size, pondria:
  // document.querySelector('em').style.fontSize = '5rem';

  // Modificar: Ejercicio 2: En el caso que el email introducido por el usuario ya existe en la variable registeredEmails, debemos poner un mensaje diferente: "Este email ya está registrado"

  // 1ro: Recuperar el valor que ha puesto el usuario en el input de iniciar sesion (propiedad value)
  const email = document.querySelector("input").value;
  // 2. Ver si ese email está en el array registeredEmails. registeredEmails.includes(EMAIL_DEL_INPUT)
  if (registeredEmails.includes(email)) {
    // 2.1 Si no existe, pues no hacer, debe funcionar todo igual todo igual que hasta ahora
    // 2.2. Si existe, el formularo DEBE permanecer, pero también debemos mostrar el mensaje con un texto diferente "El usuario con el mail EMAIL_DEL_INPUT ya existe"

    document.querySelector(
      "#mensaje p"
    ).textContent = `El usuario con el mail ${email} ya existe`;
    document.querySelector("input").value = "";
  } else {
    document.querySelector("form").style.display = "none";
    document.querySelector("#mensaje").textContent =
      "Gracias por registrate, te avisaremos en cuanto abramos. &#128515;";
  }
}
