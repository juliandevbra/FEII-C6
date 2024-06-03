const form = document.getElementById("miFormulario");
const main = document.querySelector("main");
const errUl = document.getElementById("errores");

if (localStorage.getItem("user")) {
  location.href = `usuario.html`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let errores = [];
  errUl.innerHTML = "";
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const edad = document.getElementById("edad");
  const pais = document.getElementById("pais");
  const pref1 = document.getElementById("preferencia1");
  const pref2 = document.getElementById("preferencia2");
  const tipoUsuario = document.querySelector("[name=tipoUsuario]:checked");

  const user = {
    nombre: nombre.value,
    email: email.value,
    edad: edad.value,
    pais: pais.value,
    pref1: pref1.checked,
    pref2: pref2.checked,
    tipoUsuario: tipoUsuario ? tipoUsuario.value : null,
    // Otra forma: Mediante optional operator
    // tipoUsuario: tipoUsuario?.value
  };
  console.log(user);
  // Forma de entender el operador ternario
  // if(tipoUsuario){
  //   user.tipoUsuario = tipoUsuario.value
  // } else {
  //   user.tipoUsuario = null
  // }
  if (user.nombre.trim().length < 3) {
    errores.push("El nombre debe tener al menos 3 caracteres");
  }
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regexEmail.test(user.email)) {
    errores.push("El email no es válido");
  }
  if (user.edad === "" || user.edad <= 12) {
    errores.push("Edad no válida");
  }
  if (user.pais === "") {
    errores.push("Debe seleccionar un país");
  }
  if (!user.pref1 && !user.pref2) {
    errores.push("Debe seleccionar una preferencia");
  }
  if (!user.tipoUsuario) {
    errores.push("Debe seleccionar un tipo de usuario");
  }
  if (errores.length > 0) {
    errores.forEach((error) => {
      errUl.innerHTML += `<li>${error}</li>`;
    });
  } else {
    //Como colocar queries en URL
    // const queryParams = new URLSearchParams(window.location.search);
    // for (let key in user) {
    //   queryParams.set(key, user[key]);
    // }

    // console.log(queryParams.toString());
    // setTimeout(() => {
    //   location.href = `usuario.html?${queryParams.toString()}`;
    // }, 2000);

    //LocalStorage y SessionStorage
    localStorage.setItem("user", JSON.stringify(user));
    setTimeout(() => {
      location.replace("usuario.html");
    }, 2000);
    form.reset();
  }
});
// console.log(queryParams);
// const nombre = queryParams.get("nombre");
// const search = queryParams.get("search");

// console.log(nombre);
// console.log(search);
