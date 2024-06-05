// Ejemplo sencillo de Promise
const main = document.querySelector("main");
let x = true;
let promesa = new Promise((resolve, reject) => {
  if (x) {
    resolve("Se ha resuelto la promesa");
  }
  reject("Error: No se ha podido resolver la promesa");
});

// console.log(promesa);

// promesa
//   .then((respuesta) => {
//     console.log(respuesta);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Otro ejemplo de Promise
const myPromise = (exito) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(["a", "b", "c", "d"]);
      } else {
        reject("Error al obtener los elementos");
      }
    }, 1500);
  });
};

// myPromise(false)
//   .then((respuesta) => {
//     console.log(respuesta);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Ejemplo de promise con array
const paises = [
  { nombre: "Argentina", capital: "Buenos Aires" },
  { nombre: "Bolivia", capital: "La Paz" },
  { nombre: "Brasil", capital: "Brasilia" },
  { nombre: "Chile", capital: "Santiago" },
  { nombre: "Colombia", capital: "Bogotá" },
  { nombre: "Ecuador", capital: "Quito" },
  { nombre: "Guyana", capital: "Georgetown" },
  { nombre: "Paraguay", capital: "Asunción" },
  { nombre: "Perú", capital: "Lima" },
  { nombre: "Surinam", capital: "Paramaribo" },
  { nombre: "Uruguay", capital: "Montevideo" },
  { nombre: "Venezuela", capital: "Caracas" },
];

const obtenerPaises = (exito) => {
  return new Promise((resolve, reject) => {
    if (exito) {
      resolve(paises);
    } else {
      reject("Error al obtener paises");
    }
  });
};
console.log(obtenerPaises().then());
obtenerPaises(true)
  .then((res) => {
    console.log(res);
    const ol = document.createElement("ol");
    res.forEach((pais) => {
      ol.innerHTML += `<li>Pais: ${pais.nombre} - Capital: ${pais.capital}</li>`;
    });
    main.appendChild(ol);
  })
  .catch((err) => console.log(err));

const url = "https://api.thecatapi.com/v1/images/search?limit=10";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((gatito) => {
      main.innerHTML += `
            <img src=${gatito.url} width='200' alt=${gatito.id}>
        `;
    });
  });
