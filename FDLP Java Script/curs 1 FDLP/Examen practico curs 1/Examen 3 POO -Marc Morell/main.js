import { Docente } from "./Docente.js";
import { Especialidad } from "./Especialidad.js";

document.getElementById("btnCrear").addEventListener("click", crearDocente)
document.getElementById("btnCrearEspecialidad").addEventListener("click", crearEspecialidad)
document.getElementById("btnVisualizarDocentes").addEventListener("click", visualizarDocentes)
document.getElementById("btnModificarExperiencia").addEventListener("click", modificarExperiencia)
document.getElementById("btnActualizarExperiencia").addEventListener("click", actualizarExperiencia)
document.getElementById("btnBuscarDocenteDni").addEventListener("click", buscarDocentesDni)
document.getElementById("btnBuscarDocenteEspecialidad").addEventListener("click", buscarDocentesEspecialidad)
document.getElementById("btnBuscarDocenteEstado").addEventListener("click", buscarDocentesEstado)



function cleanInnputs(){   // funcion para limpiar los inputs 
    let inputs = document. querySelectorAll('input:not([type="button"])')
    inputs.forEach((input) => input.value = "" )
}

const docentes = []

function crearDocente(){
    let dni = document.getElementById("dni").value
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let experiencia = document.getElementById("experiencia").value
    let estado = document.getElementById("estado").value
    const DOCENTE = new Docente (dni, nombre, apellido, experiencia, estado)
    let indexDocente = docentes.findIndex(docente => docente.dni === dni)
    if(indexDocente != -1){
        alert("El docente ya existe")
    }else{
        docentes.push(DOCENTE)
    }
    console.log(docentes)
    cleanInnputs()
}


function crearEspecialidad(){ 
    let dni = document.getElementById("dniEspecialidad").value
    let nombreEspecialidad = document.getElementById("nombreEspecialidad").value
    let docenteActual = docentes.find(docente => docente.dni === dni)
    if(docenteActual == undefined){
        alert("Docente no existe en base de datos")
    }else{
        const ESPECIALIDAD = new Especialidad (nombreEspecialidad)
        docenteActual.añadirnuevaEspecialidad(ESPECIALIDAD)
    }
    console.log(docentes)
    cleanInnputs()
}

function visualizarDocentes(){
    let result = document.getElementById("result")
    docentes.forEach(docente => result.innerHTML += `${docente.toString()}`)  
}



function modificarExperiencia(){
    let dni = document.getElementById("dnimodificar").value
    //let experienciaModificar = document.getElementById("experienciaModificar").value
    const indexDocente = docentes.findIndex((docente) => docente.dni === dni) 
    if(indexDocente == -1){ 
        alert(`El dni no existeix a la nostra aplicació`) 
    }else{     
        let docenteActual = docentes[indexDocente]   
        document.getElementById("dnimodificar").value = docenteActual.dni  
        document.getElementById("experienciaModificar").value = docenteActual.experiencia
        document.getElementById('dnimodificar').disabled = true 
    }   
}

function actualizarExperiencia(){
    let dni = document.getElementById("dnimodificar").value
    const indexDocente = docentes.findIndex((docente) => docente.dni === dni) 
    let docenteActual = docentes[indexDocente]    
    let experienciaModificar = document.getElementById("experienciaModificar").value  // capturamos los campos que pueden ser modificados
    docenteActual.experiencia = experienciaModificar // actualizamos values por si alguno ha sido modificado 
    document.getElementById('dnimodificar').disabled = false //  volvemos a habilitar nombre hotel 
    console.log(docentes)
    cleanInnputs()
}


function buscarDocentesDni(){
    let result = document.getElementById("result")
    let dni = document.getElementById("dniBuscar").value
    const indexDocente  = docentes.findIndex(docente => docente.dni === dni)
    if(indexDocente == -1){
        alert("docente no existe en base de datos")
        
    }else{
        let docenteActual = docentes[indexDocente] 
        result.innerHTML = `${docenteActual.toString()}` 
    }
}


function buscarDocentesEstado(){
    let result = document.getElementById("result")
    let estado = document.getElementById("EstadoBuscar").value
    const EstadoDocentes = docentes.filter(docente => docente.estado === estado)
    console.log(EstadoDocentes)
    result.innerHTML += `${EstadoDocentes.toString()}` 
}

// buscar docente por especialidad sin metodos array es el unico punto que no me funciona. llevo todo el fin de semana atrapado aqui!!! 
function buscarDocentesEspecialidad(){
    let result = document.getElementById("result")
    let especialidadBuscar = document.getElementById("especialidadBuscar").value
    for(let i = 0; i < docentes.length; i ++){
        let docenteActual = docentes[i]
        console.log(docenteActual)
        for(let j = 0; j < docenteActual.length; j++){
            let docenteActualEspecialidades = docenteActual.especialidades[j]
            console.log(docenteActualEspecialidades)
            for(let k = 0; i < docenteActualEspecialidades.length; k++){
                let EspecialidadActual = docenteActualEspecialidades[k]
                console.log(EspecialidadActual)
                if (EspecialidadActual == especialidadBuscar){
                    result.innerHTML += `${docenteActual.toString()}`
                    console.log(docenteActual)
                }
            }
        }
    } 
    
}
