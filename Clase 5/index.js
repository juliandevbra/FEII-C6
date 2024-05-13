const peliculas = [
  {
    imagen:
      "https://ca-times.brightspotcdn.com/dims4/default/defa173/2147483647/strip/true/crop/2093x3000+0+0/resize/1200x1720!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F47%2F95%2Fcbf137037b833a53a724fde3f53e%2Fcfdj8emgq7504ddbn1ibedbziqes-ufxmz-ypi0gordml8oigvx-qxnfyjdexxje48b9jsnhzr2hbbtg9-5bm2ewo-sfvcb9svtpufonjqohy-raixysjlgk7fagt3voiify9grgz0pkj-sysmn1pfblqffyiedjz8nszvhrheowg2imuyrmeklodsplgwx3wmznmclm-gx-cvc7m0lf7h7crd5meu1oztvsd9po-e1pldrzmjwobcwk9h7avlf0y4ew56xkel9filhfyidkf9rpndq4ic7-snlvnin85poimejwzyp6rq-q8qsqvmlvl2xaq3rsy-7axvtxqcpqinvjubaglw5risa6bqkfrpqowvdt29rhgoxnbsbi3dnwzldfjuimuizsg2hody3cu-y1kgk",
    titulo: "El Padrino",
    descripcion:
      "El Padrino es una película de crimen y drama dirigida por Francis Ford Coppola, basada en la novela de Mario Puzo. Sigue la historia de la familia criminal Corleone y su líder, Don Vito Corleone.",
    puntaje: 9.2,
  },
  {
    imagen:
      "https://circusa.com/wp-content/uploads/2021/04/p-esdlaelretornodelrey.jpg",
    titulo: "El Señor de los Anillos: El Retorno del Rey",
    descripcion:
      "El Retorno del Rey es la tercera entrega de la trilogía de El Señor de los Anillos, dirigida por Peter Jackson. La película sigue la batalla final entre las fuerzas del bien y del mal en la Tierra Media.",
    puntaje: 9.0,
  },
  {
    imagen: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/666871.jpg",
    titulo: "La Lista de Schindler",
    descripcion:
      "La Lista de Schindler es un drama histórico dirigido por Steven Spielberg, basado en la historia real de Oskar Schindler, un empresario que salvó la vida de más de mil judíos durante el Holocausto.",
    puntaje: 8.9,
  },
  {
    imagen: "https://pics.filmaffinity.com/forrest_gump-212765827-large.jpg",
    titulo: "Forrest Gump",
    descripcion:
      "Forrest Gump es una comedia dramática dirigida por Robert Zemeckis, protagonizada por Tom Hanks. La película sigue la vida de Forrest Gump, un hombre con una discapacidad intelectual que participa en varios eventos importantes de la historia de Estados Unidos.",
    puntaje: 8.8,
  },
  {
    imagen: "https://pics.filmaffinity.com/pulp_fiction-210382116-large.jpg",
    titulo: "Pulp Fiction",
    descripcion:
      "Pulp Fiction es una película de crimen y comedia negra dirigida por Quentin Tarantino. La trama sigue varios hilos narrativos entrelazados que involucran a criminales, boxeadores, gánsteres y otros personajes excéntricos.",
    puntaje: 8.9,
  },
];

//Attributes
const btn = document.querySelector("button");
console.log(btn);

//hasAttribute
console.log(btn.hasAttribute("style"));
console.log(btn.hasAttribute("id"));
// nos devuelve true o false

//getAttribute
console.log(btn.getAttribute("id"));
//me devuelve el valor del atributo

//setAttribute
const img = document.createElement("img");
const div = document.querySelector(".container");
// img.setAttribute("src", peliculas[0].imagen);
// img.setAttribute("alt", "El padrino");
// div.appendChild(img);
let maxPuntaje = 0;
peliculas.forEach((pelicula, index) => {
  //Creo los elementos necesarios
  const article = document.createElement("article"); //Contenedor
  const h2 = document.createElement("h2"); //titulo
  const img = document.createElement("img"); //imagen

  //Seteo el contenido de los elementos h2 e img
  article.setAttribute("id", index + 1);
  h2.innerText = pelicula.titulo;
  img.setAttribute("src", pelicula.imagen);
  img.setAttribute("alt", pelicula.titulo);
  article.setAttribute("puntaje", pelicula.puntaje);

  //Calculamos puntaje
  if (maxPuntaje < pelicula.puntaje) {
    maxPuntaje = pelicula.puntaje;
  }

  article.appendChild(h2);
  article.appendChild(img);

  div.appendChild(article);
});

//Otra forma de hacer lo mismo con Template String
// peliculas.forEach((pelicula) => {
//   const article = `
//     <article>
//       <h2>${pelicula.titulo}</h2>
//       <img src=${pelicula.imagen} alt=${pelicula.titulo}>
//     </article>
//   `;

//   div.innerHTML += article;
// });

console.log(maxPuntaje);
const arrArticles = document.querySelectorAll(".container article");
console.log(arrArticles);

arrArticles.forEach((article) => {
  const puntaje = article.getAttribute("puntaje");
  console.log(puntaje);
  if (puntaje == maxPuntaje) {
    article.style.backgroundColor = "gold";
    article.innerHTML +=
      "<p style='color: white; font-weight: 700;'>Mejor puntuada!</p>";
  }
});
