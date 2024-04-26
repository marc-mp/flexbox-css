
const personas = [
    {
    nombre: "Juan",
    dni: "12345678",
    hobbies: ["leer", "bailar"]
    },
    {
    nombre: "María",
    dni: "87654321",
    hobbies: ["pintar", "correr"]
    },
    {
    nombre: "Pedro",
    dni: "98765432",
    hobbies: ["cocinar", "ver películas"]
    },
    {
    nombre: "Laura",
    dni: "54321678",
    hobbies: ["jugar a fútbol", "viajar"]
    },
    {
    nombre: "Carlos",
    dni: "87651234",
    hobbies: ["tocar la guitarra", "hacer ejercicio"]
    }
]


function buscarPersona(){
    let numDni = document.getElementById("dni").value
    let result = document.getElementById("result")
    const altaPersona = personas.find(persona => persona.dni === numDni)
    console.log(altaPersona)
    if (altaPersona == undefined){
        result.innerHTML =  `La persona no esta donada d'alta <br>`
    }else{
        result.innerHTML = `La persona ${altaPersona.nombre} esta donada d'alta <br>`
        
    }
}

function posicion(){
    let numDni = document.getElementById("dni").value
    let result = document.getElementById("result")
    const posicion = personas.findIndex((persona) => persona.dni === numDni)
    console.log(posicion)
    if (posicion == -1){
        result.innerHTML = `La persona no esta donada d'alta <br>`
    }else{
        result.innerHTML = `Esta en la posició ${posicion} de l'array <br>`        
    }  
}

function comprobarhobbiesFilter(){ 
    let result = document.getElementById("result")
    let hobbyusuari = document.getElementById("hobbies").value
    const personahobby = personas.filter(persona => persona.hobbies.includes(hobbyusuari))
    personahobby.forEach(persona => result.innerHTML = `Es un hobbie de ${persona.nombre} <br>`)
     
}

function Totalhobbies(){
    let result = document.getElementById("result")
    const totalHobbies = personas.reduce((total, persona) => total + persona.hobbies.length,0)
    result.innerHTML = `Total hobbies es : ${totalHobbies} <br>`
}

function comprobarhobbiesSome(){ 
    let result = document.getElementById("result")
    let hobbyusuari = document.getElementById("hobbies").value
    const personahobby = personas.some(persona => persona.hobbies.includes(hobbyusuari))
    if (personahobby == true){ 
        result.innerHTML = `Si, aquest hobbie el te alguna persona <br>`
    }else{
        result.innerHTML = `Aquest hobbie NO el te cap persona <br>`
    }   
}


function comprobarhobbiesFind(){ 
    let result = document.getElementById("result")
    let hobbyusuari = document.getElementById("hobbies").value
    const personahobby = personas.find(persona => persona.hobbies.includes(hobbyusuari))
    result.innerHTML = `La primera persona que tiene este hobbie es ${personahobby.nombre} <br>`
    console.log(personahobby.nombre)
}


function arrayMayusculas(){
    let result = document.getElementById("result")
    const arrayNomMayusculas = personas.map(persona => persona.nombre.toUpperCase())
    result.innerHTML = `Array con nombre mayusculas es:  ${arrayNomMayusculas} <br>`
    console.log(arrayNomMayusculas)
}

