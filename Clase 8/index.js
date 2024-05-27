const main = document.querySelector("main");
//Primer ejemplo
// const input = document.getElementById("miInput");
// const btn = document.getElementById("obtener-datos");

// btn.addEventListener("click", () => {
//   const nombre = input.value;
//   console.log(nombre);
// });

//Segundo ejemplo con form
// const form = document.getElementById("form-example1");
// const errSection = document.getElementById("errores");
// const successSection = document.getElementById("mensaje-exito");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let errores = [];
//   errSection.innerHTML = "";
//   const nombre = document.getElementById("input-name").value;
//   const mail = document.getElementById("input-email").value;

//   if (nombre.trim().length < 3) {
//     errores.push("El nombre debe tener al menos 3 caracteres");
//   }
//   const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//   if (!regexEmail.test(mail)) {
//     errores.push("Debe ser un email válido");
//   }

//   if (errores.length > 0) {
//     errores.forEach((error) => {
//       errSection.innerHTML += `<p style='color:red'>${error}</p>`;
//     });
//   } else {
//     successSection.innerHTML = `
//       <h3>Bienvenido, ${nombre}</h3>
//       <h4>Email: ${mail}</h4>
//     `;
//     form.reset();
//   }
// });

//Tercer ejemplo con select
// const form = document.getElementById("form-example2");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const nombre = document.getElementById("select-example").value;
//   console.log(nombre);
//   if (nombre !== "") {
//     main.innerHTML += `<h3>Bienvenido, ${nombre}</h3>`;
//   }
// });

//Cuarto ejemplo con radio
const form = document.getElementById("form-example3");
const nombreSection = document.getElementById("nombre");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputRadio = document.querySelector("input[name=check-name]:checked");
  console.log(inputRadio);
  if (inputRadio) {
    const nombre = inputRadio.value;
    nombreSection.innerHTML += `<h3>Bienvenido, ${nombre}</h3>`;
  }
});
