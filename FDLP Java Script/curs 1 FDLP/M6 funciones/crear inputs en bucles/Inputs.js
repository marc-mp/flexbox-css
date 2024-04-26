const numInput = document. getElementById ( 'numpersonas' )
const inputDiv = document.getElementById('inputDiv')
let num = 0
let divButton = document.getElementById('divButton')
divButton.style.display = 'none' //desaparecer boton

function calcularNumero(){

    inputDiv.innerHTML = ""
    num = parseInt (numInput.value)

    for( let i = 0; i < num; i++){ // bucle para pedir tantos inputs con las edades segun numero de personas se ha indicado

    let input = document. createElement('input') // creamos elemento input
    input. type = 'number'
    input. placeholder = 'Escriba una edad'
    input. className = 'edades'

    let br = document. createElement('br') // creamos elemento salto de linea
    inputDiv.appendChild(input) // appendchild seria como inner.HTML para mostrar elementos hijos (en este caso input) dentro del contenido
    inputDiv.appendChild(br) // aplicamos elemento salto de linea

    }
    divButton.style.display = 'block' // aparecer boton
}

function capturarEdades (){

    // console. log(num)
    let inputs = document.querySelectorAll('.edades')
    let suma = 0

    // console. log(inputs)
    // console. log(inputs. length)

    inputs. forEach( function(input) {
        // console. log(input)
        console. log(input.value)
        suma += input.value

    })

    let result = suma / num
    console.log('La media de las edades es: ', result)

}

// function sumarInputs ( ){
//     console. log (numPersonas)
//     suma = 0
//     let inputs = document. querySelectorAll('.edades')
    
//     // let valid = true;
    
//     inputs. forEach(function (input)
//     // if (validateNumber(input.value) ) {
//     console. log(input.value);
//     suma += parseInt(input.value);
//     // } else {
//     console. log('El input no contiene un valor válido: ' + input.value);
//     input.style.border = '2px solid red';
//     valid = false;

function validateNumber(num) { // funcion que arroja booleano (true or false)
    let .boleano .= !isNaN(num) && num > 0 && num < 120
    console. log(boleano)
    console. log(typeof boleano)
}

inputs. forEach(
    function (input) {
    let validateNumero = validateNumber(input.value)
    
    if (validateNumero) {
    // suma = suma + parseInt (input.value)
    suma += parseInt (input.value)
    input. style.border = '1px solid black'
    } else {
    input.style.border = '2px solid red'
    console. log('Error en los input')
    valid = false
    }
    {
)