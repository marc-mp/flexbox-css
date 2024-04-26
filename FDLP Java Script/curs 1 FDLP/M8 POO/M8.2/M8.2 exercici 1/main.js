import {ordinador} from "./ordinador.js"

const ordinadors = []

let boton = document.getElementById("boton").addEventListener("click", crearordinadors)


function crearordinadors(){

    let marca = prompt("introduexi marca")
    let model = prompt("introduexi model")
    let procesador = prompt("introduexi procesador")
    let RAM = prompt("introduexi RAM")
    let disco = prompt("introduexi disco")
    let result = document.getElementById("result")
    let programa = confirm("esta executant un programa?")
    let programaexecutant
    if(programa){ //if programa is true en confirm
        programaexecutant = prompt("indica programa que esta executant-se")
    }

    const ORDINADOR = new ordinador(marca, model, procesador, RAM, disco)
    ordinadors.push(ORDINADOR)

    if (programa){
        result.innerHTML += ORDINADOR.executarprograma(programaexecutant)
    }

    result.innerHTML += ORDINADOR.toString()

}

