//window
console.log(window)

console.log(innerHeight + 'x' + innerWidth)
console.log(outerHeight + 'x' + outerWidth)

if(innerWidth < 768){
    console.log('Estas en un celular')
} else {
    console.log('Estas en una PC')
}

window.onload = () => {
    console.log('Se cargó la página')
}

//document
console.log(document.body)
//Obtención de elemento mediante ID
const main = document.getElementById('root')
console.log(main)
//Otra forma de llamar por id
const alumnos = document.querySelector('#alumnos')
console.log(alumnos)

//En queryselector utilizamos . para llamar mediante clases y # para llamar mediante ID

//Obtención de elementos mediante querySelector
const ul = document.querySelector('ul')
console.log(ul)

const logo = document.querySelector('.logo')
const anchorInicio = document.querySelector('.encabezado a')
console.log(anchorInicio)


const arrLi = document.querySelectorAll('li')
console.log(arrLi)

arrLi.forEach((element, indice) => {
    element.innerText = 'Clase ' + indice
})
for(let i = 0; i < arrLi.length; i++){
    arrLi[i].innerText = 'Clase ' + i

}

//innerText
anchorInicio.innerText = 'Inicio'


let nombre = prompt('Cual es su nombre')
//innerHTML
main.innerHTML += `<h1>Buenas, ${nombre}</h1>` //main.innerHTML = main.innerHTML + `<h1>Buenas, ${nombre}</h1>`

