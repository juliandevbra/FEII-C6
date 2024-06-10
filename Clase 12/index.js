window.addEventListener("load", () => {
  // const url = "https://api.sampleapis.com/cartoons/cartoons2D";
  const url = "https://rickandmortyapi.com/api/character";
  const listSection = document.querySelector("#list-container");
  //Ejemplo de fetch resuelto con .then()
  // fetch(url)
  //   .then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     if (data.length > 0) {
  //       const loader = document.querySelector(".loader");
  //       loader.remove();
  //       data.forEach((item) => {
  //         listSection.innerHTML += `
  //     <div class='card'>
  //       <h4>${item.title}</h4>
  //       <img src=${item.image} alt=${item.title} width=200>
  //     </div>
  //   `;
  //       });
  //     }
  //   })
  //   .catch((err) => console.log(err));

  //Ejemplo de fetch con async/await
  // const obtenerCartoons = async () => {}
  // async function obtenerCartoons() {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(res);
  //     console.log(data);
  //     if (data.length > 0) {
  //       const loader = document.querySelector(".loader");
  //       loader.remove();
  // data.forEach((item) => {
  //   listSection.innerHTML += `
  //           <div class='card'>
  //             <h4>${item.title}</h4>
  //             <img src=${item.image} alt=${item.title} width=200>
  //           </div>
  //         `;
  // });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // obtenerCartoons();

  //Probamos otra API con SweetAlert
  // const obtenerPersonajes = async () => {
  //   try {
  //     const res = await fetch(url); //Espera a realizar la petición antes de asignar a la variable res
  //     const data = await res.json(); //Espera a convertir la respuesta en un json antes de asignar a la variable data
  //     console.log(data);
  //     if (data.results.length > 0) {
  //       //Si data.results es un array, lo itera y lo renderiza
  //       const loader = document.querySelector(".loader");
  //       loader.remove();
  //       data.results.forEach((item) => {
  //         listSection.innerHTML += `
  //           <div class='card'>
  //             <h4>${item.name}</h4>
  //             <img src=${item.image} alt=${item.name} width=200>
  //           </div>
  //         `;
  //       });
  //     }
  //   } catch (err) {
  //     //Caso contrario muestro un alert con Sweetalert
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "Something went wrong!",
  //       footer: err,
  //     });
  //   }
  // };
  // obtenerPersonajes();

  //Ejemplo básico de POST a jsonplaceholder
  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  const data = {
    title: "Title example",
    body: "Body description",
    userId: 10,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };

  fetch(endpoint, options)
    .then((response) => console.log(response))
    .then((json) => console.log(json));
});
