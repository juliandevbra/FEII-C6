// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
const token = localStorage.getItem("jwt");
if (!token) {
  location.replace("./index.html");
}

/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener("load", function () {
  /* ---------------- variables globales y llamado a funciones ---------------- */
  const urlUser = "https://todo-api.digitalhouse.com/v1/users/getMe";
  const urlTask = "https://todo-api.digitalhouse.com/v1/tasks";

  const btnCerrarSesion = document.querySelector("#closeApp");
  const formCrearTarea = document.querySelector(".nueva-tarea");

  obtenerNombreUsuario();
  consultarTareas();

  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener("click", function () {
    const cerrarSesion = confirm("¿Estas seguro que quieres salir?");
    if (cerrarSesion) {
      localStorage.removeItem("jwt");
      setTimeout(() => {
        location.replace("./index.html");
      }, 1000);
    }
  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    const settings = {
      method: "GET",
      headers: {
        Authorization: token,
      },
    };
    fetch(urlUser, settings)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const username = document.querySelector(".user-info p");
        username.innerText = data.firstName.toUpperCase();
      })
      .catch((err) => console.log(err));
  }

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    const settings = {
      method: "GET",
      headers: {
        Authorization: token,
      },
    };
    fetch(urlTask, settings)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        renderizarTareas(data);
        botonesCambioEstado();
        botonBorrarTarea();
      });
  }

  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener("submit", function (event) {});

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {
    const tareasPendientes = document.querySelector(".tareas-pendientes");
    const tareasTerminadas = document.querySelector(".tareas-terminadas");
    console.log(tareasPendientes, tareasTerminadas);

    const cantFinalizadas = document.querySelector("#cantidad-finalizadas");
    console.log(cantFinalizadas);
    let contador = 0;
    cantFinalizadas.innerText = contador;
    listado.forEach((tarea) => {
      let fecha = new Date(tarea.createdAt);
      if (tarea.completed) {
        contador++;
        tareasTerminadas.innerHTML += `
          <li class="tarea">
            <div class="hecha">
              <i class="fa-regular fa-circle-check"></i>
            </div>
            <div class="descripcion">
              <p class="nombre">${tarea.description}</p>
              <div class="cambios-estados">
                <button class="change incompleta" id="${tarea.id}" ><i class="fa-solid fa-rotate-left"></i></button>
                <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
              </div>
            </div>
          </li>
          `;
      } else {
        tareasPendientes.innerHTML += `
        <li class="tarea">
            <button class="change" id="${
              tarea.id
            }"><i class="fa-regular fa-circle"></i></button>
            <div class="descripcion">
              <p class="nombre">${tarea.description}</p>
              <p class="timestamp">${fecha.toLocaleDateString()}</p>
            </div>
          </li>
      `;
      }
    });
    cantFinalizadas.innerText = contador;
  }

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    const btnChange = document.querySelectorAll(".change");
    console.log(btnChange);
    // Recorrer el array de botones
    // Dentro del bucle, agregar un evento a cada botón
    // Verificamos el estado de la tarea
    // fetch a la API con un método PUT con el id que contiene el botón
  }

  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {}
});
