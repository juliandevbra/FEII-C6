const form = document.getElementById("miFormulario");
const main = document.querySelector("main");
const errUl = document.getElementById("errores");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let errores = [];
  errUl.innerHTML = "";
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const edad = document.getElementById("edad").value;
  const pais = document.getElementById("pais").value;
  const pref1 = document.getElementById("preferencia1").checked;
  const pref2 = document.getElementById("preferencia2").checked;
  const usuario = document.querySelector("input[name=tipoUsuario]:checked");

  if (nombre.trim().length < 3) {
    errores.push("El nombre debe tener al menos 3 caracteres");
  }
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regexEmail.test(email)) {
    errores.push("El email no es válido");
  }
  if (edad === "" || edad <= 12) {
    errores.push("Edad no válida");
  }
  if (pais === "") {
    errores.push("Debe seleccionar un país");
  }
  if (!pref1 && !pref2) {
    errores.push("Debe seleccionar una preferencia");
  }
  if (!usuario) {
    errores.push("Debe seleccionar un tipo de usuario");
  }
  if (errores.length > 0) {
    errores.forEach((error) => {
      errUl.innerHTML += `<li>${error}</li>`;
    });
  } else {
    main.innerHTML = `
        <h1>Datos de usuario</h1>
        <p> Nombre: <span>${nombre}</span></p>
        <p> Email: <span>${email}</span></p>
        <p> Edad: <span>${edad}</span></p>
        <p> Pais: <span>${pais}</span></p>
        <p> Usuario: <span>${usuario.value}</span></p>
    `;
    form.reset();

    setTimeout(() => {
      location.href = "usuario.html";
    }, 2000);
  }
});
