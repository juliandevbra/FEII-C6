/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
  return texto.length > 3;
}

function normalizarTexto(texto) {
  return texto.trim().toLowerCase();
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regexEmail.test(email);
}

function normalizarEmail(email) {
  return email.trim().toLowerCase();
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
  return contrasenia.length > 5;
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
  return contrasenia_1 === contrasenia_2;
}
