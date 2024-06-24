window.addEventListener("load", function () {
  /* ---------------------- obtenemos variables globales ---------------------- */
  //   const jwt = localStorage.getItem("jwt");
  //   if (jwt) {
  //     location.replace("./mis-tareas.html");
  //   }
  const url = "https://todo-api.digitalhouse.com/v1/users/login";
  //   const form = document.querySelector('form')
  const form = document.forms[0];
  const email = document.querySelector("#inputEmail");
  const pass = document.querySelector("#inputPassword");

  /* -------------------------------------------------------------------------- */
  /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
  /* -------------------------------------------------------------------------- */
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    mostrarSpinner();
    if (!validarEmail(email.value)) {
      Swal.fire({
        icon: "error",
        title: "Email no válido.",
      });
      return;
    }

    const data = {
      email: normalizarEmail(email.value),
      password: pass.value,
    };
    console.log(data);
    const settings = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    };
    realizarLogin(settings);
  });

  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 2: Realizar el login [POST]                    */
  /* -------------------------------------------------------------------------- */
  function realizarLogin(settings) {
    fetch(url, settings)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.jwt) {
          localStorage.setItem("jwt", data.jwt);
        }
        setTimeout(() => {
          ocultarSpinner();
          location.replace("./mis-tareas.html");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
