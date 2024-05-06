// console.log('mi segundo console.log')

let a = 0
var b = 1
const c = 2
//Revisamos porque usamos let en vez de var
function scopeVar(){
    if(true){
        var x = 10
        console.log(x)
    }
    console.log(x)
}
scopeVar()

const scopeLet = () => {
    if(true){
        let y = 20
        console.log(y)
    }
    //Esto se comenta porque tira error
    // console.log(y)
}
scopeLet()

let condicion = true 
// alert()
if(condicion){
    alert('La condicion es true')
} else {
    alert('La condicion es false')
}

// confirm()
const pregunta = confirm('Te gusta el front?')
console.log(pregunta)

if(pregunta){
    alert('Que bueno, a mi tambien!')
} else {
    alert('No sabes de lo que te perdes')
}

// prompt()
let nombre = prompt('Como es tu nombre?')
console.log(nombre)

if(!nombre){ // Si nombre es igual a null, '', false, undefined o []
    console.log('Tenes que escribir tu nombre')
} else if(nombre.length < 3) {
    console.log('Tu nombre debe tener al menos 3 caracteres')
} else {
    alert('Tu nombre es ' + nombre)
}

//Bucle for
for(let i = 0; i <= 10; i++){
    console.log('El valor de i es ' + i)
}

//Bucle while
let j = 0
while(j < 0){
    console.log('El valor de j es ' + j)
    j++
}
//do-while
let k = 0
do{
    console.log('El valor de k es ' + k)
    k++
} while(k < 0)

let miArray = ['Manzana', 'Banana', 'Sandia']
const miObj = {
    nombre: 'Farid',
    locacion: 'Argentina',
    materia: 'Frontend II'
}
//foreach
miArray.forEach((elemento, indice) => {
    console.log(indice + ' - ' + elemento)
})

// for [of]
for(let elemento of miArray){
    console.log(elemento)
}

//Manejo de objetos
miObj.companero = 'Ignacio'
miObj['locacion'] = 'Perú'
console.log(miObj['locacion'])
//for {in}
for(let clave in miObj){
    console.log(miObj[clave])
}

//Metodos de MATH
let decimal = 5.4960
let entero = Math.round(decimal) //Segun el valor
let piso = Math.floor(decimal) //Siempre para abajo
let techo = Math.ceil(decimal) // Siempre para arriba
console.log(entero)
console.log(piso)
console.log(techo)


const num1 = 43
const num2 = 76
const num3 = 12

const minNum = Math.min(num1, num2, num3)
console.log(minNum)

const maxNum = Math.max(num1, num2, num3)
console.log(maxNum)

const randomNum = Math.floor(Math.random() * 10) + 1 //Operacion para obtener un numero entre 10
console.log(randomNum)

// Ejercitación 1
while(!nombre){ //Sea diferente a null || undefined || false || ''
    nombre = prompt('Coloque su nombre')
}