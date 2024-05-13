const innersExample = document.getElementById("inners");
console.log(innersExample);

const h3 = innersExample.querySelector("h3");
console.log(h3);

//innerText
h3.innerText = "Modifiqué este texto mediante innerText";

//innerHTML
innersExample.innerHTML +=
  "<h2>Le agrego este elemento mediante innerHTML</h2>";

//Template string
const titulo = "Este titulo es con template strings";
const descripcion = "Esto es un ejemplo de descripcion con template strings";

const nuevoContenido = `
    <h3>${titulo}</h3>
    <h4>${descripcion}</h4>
`;
const tempStringsExample = document.getElementById("tempStrings");

tempStringsExample.innerHTML += nuevoContenido;

//Función para generar articles
const articleContainer = document.getElementById("contenedor-articulos");
const generadorArticulos = (title, description) => {
  const article = `
        <article>
            <h3>${title}</h3>
            <h4>${description}</h4>
        </article>
    `;
  return article;
};
// const article = generadorArticulos('titulo', 'descripción')
// articleContainer.innerHTML += article
articleContainer.innerHTML += generadorArticulos(
  "Este es el titulo del primer articulo",
  "Esta es la descripción del primer articulo"
);
articleContainer.innerHTML += generadorArticulos(
  "Este es el titulo del segundo articulo",
  "Esta es la descripción del segundo articulo"
);
articleContainer.innerHTML += generadorArticulos(
  "Este es el titulo del tercero articulo",
  "Esta es la descripción del tercero articulo"
);

//createElement y appendChild
const divCreateExample = document.getElementById("ejemplo-create");
const newParagraph = document.createElement("p");
newParagraph.innerText = "Este paragraph fue creado con createElement";
divCreateExample.appendChild(newParagraph);

//Ejemplo función con createElement y appendChild
const generadorContainer = document.getElementById("creador-elementos");

const generadorElementos = (title, description) => {
  const h2 = document.createElement("h2");
  const contenido = document.createElement("p");

  h2.textContent = title;
  contenido.textContent = description;

  generadorContainer.appendChild(h2);
  generadorContainer.appendChild(contenido);
};

generadorElementos("Esto es el titulo", "esto es la descripción");
generadorElementos("Otro titulo", "otra descripción");

//style
const stylesExample = document.querySelector("#ejemploStyles");
console.log(stylesExample);
const arrLi = stylesExample.querySelectorAll("li");
console.log(arrLi);

arrLi.forEach((elemento, index) => {
  elemento.style.color = "red";
  elemento.style.backgroundColor = "coral";
});

//classList
innersExample.classList.add("inners");
tempStringsExample.classList.remove("tempStrings");
const btnTema = document.querySelector("button");
function toggleClass() {
  // innersExample.classList.toggle('inners')
  //Otra forma
  console.log(innersExample.classList.contains("inners"));
  if (innersExample.classList.contains("inners")) {
    btnTema.innerText = "Cambiar a color crimson";
    innersExample.classList.remove("inners");
  } else {
    btnTema.innerText = "Volver a como estaba";
    innersExample.classList.add("inners");
  }
}
