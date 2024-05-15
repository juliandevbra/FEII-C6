// Es mejor utilizar addEventListener ya que se ejecuta todas las veces,
// a diferencia de onload (o el evento que utilices) que ejecuta el último que se declara
// window.addEventListener("load", () => {
//   console.log("Se cargó la página 4");
// });

// window.onload = () => {
//   console.log("Se cargó la página 2");
// };

// window.onload = () => {
//   console.log("Se cargó la página 3");
// };
//evento load
window.addEventListener("load", () => {
  //mouseover y mouseout
  const div = document.getElementById("root");
  const contenedor = document.getElementById("contenedor");

  div.addEventListener("mouseover", function () {
    div.innerHTML = "Quita el mouse encima mio";
    contenedor.innerHTML =
      "<p>Elemento 1</p><p>Elemento 2</p><p>Elemento 3</p>";
  });
  div.addEventListener("mouseout", function () {
    div.innerHTML = "Reposa el mouse sobre mi";
    contenedor.innerHTML = "";
  });
});

const aTag = document.querySelector("#anchor");

//evento click y preventDefault
aTag.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
  const pregunta = confirm("Estas seguro que quiere salir del sitio?");
  if (pregunta) {
    setTimeout(() => {
      open("https://playground.digitalhouse.com/");
    }, 2000);
  }
});

//keypress
const pTag = document.querySelector("#keypress");

document.addEventListener("keypress", (event) => {
  //   console.log(event);
  pTag.innerText = `Se presionó la tecla ${event.key} `;
  if (event.key === "Enter") {
    console.log("Presionaste enter");
  }
});

//keydown y keyup
document.addEventListener("keydown", (e) => {
  console.log(`Presionaste ${e.key}`);
});
document.addEventListener("keyup", (e) => {
  console.log(`Soltaste ${e.key}`);
});

const paragraphContador = document.querySelector("#contador");

let contador = 0;
let intervalo;

document.addEventListener("keydown", (event) => {
  if (!intervalo) {
    intervalo = setInterval(() => {
      contador++;
      paragraphContador.innerText = `Tiempo: ${contador} segundos`;
    }, 1000);
  }
});
document.addEventListener("keyup", (event) => {
  clearInterval(intervalo);
  intervalo = null;
  contador = 0;
  paragraphContador.innerText = "Tiempo: 0 segundos";
  console.log(`Soltaste ${event.key}`);
});
