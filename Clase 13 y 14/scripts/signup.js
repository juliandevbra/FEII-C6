window.addEventListener("load", function () {
  /* ---------------------- obtenemos variables globales ---------------------- */
  const form = document.forms[0];
  const nombre = document.querySelector("#inputNombre");
  const apellido = document.querySelector("#inputApellido");
  const email = document.querySelector("#inputEmail");
  const password = document.querySelector("#inputPassword");
  const passRepetida = document.querySelector("#inputPasswordRepetida");
  const url = "https://todo-api.digitalhouse.com/v1/users";

  /* -------------------------------------------------------------------------- */
  /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
  /* -------------------------------------------------------------------------- */
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    mostrarSpinner();
    if (!validarTexto(nombre.value)) {
      Swal.fire({
        icon: "error",
        title: "Nombre no válido.",
      });
      return;
    }
    if (!validarTexto(apellido.value)) {
      Swal.fire({
        icon: "error",
        title: "Apellido no válido.",
      });
      return;
    }
    if (!validarEmail(email.value)) {
      Swal.fire({
        icon: "error",
        title: "Email no válido.",
      });
      return;
    }
    if (!validarContrasenia(password.value)) {
      Swal.fire({
        icon: "error",
        title: "Mínimo 6 caracteres en contraseña.",
      });
      return;
    }
    if (!compararContrasenias(password.value, passRepetida.value)) {
      Swal.fire({
        icon: "error",
        title: "Las contraseñas no coinciden.",
      });
      return;
    }
    //creamos el cuerpo de la request
    const payload = {
      firstName: normalizarTexto(nombre.value),
      lastName: normalizarTexto(apellido.value),
      email: normalizarEmail(email.value),
      password: password.value,
    };
    //configuramos la request del Fetch
    const settings = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    };
    //lanzamos la consulta de login a la API
    realizarRegister(settings);
    //limpio los campos del formulario
    form.reset();
  });

  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
  /* -------------------------------------------------------------------------- */
  function realizarRegister(settings) {
    fetch(url, settings)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          alert("Alguno de los datos es incorrecto.");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.jwt) {
          //guardo en LocalStorage el objeto con el token
          localStorage.setItem("jwt", JSON.stringify(data.jwt));

          //redireccionamos a la página
          setTimeout(() => {
            ocultarSpinner();
            location.replace("./mis-tareas.html");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
