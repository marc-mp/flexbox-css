
const personas = [
    {nombre: "Juan", dni: "12345678", hobbies: ["leer", "bailar"]},
    {nombre: "María", dni: "87654321", hobbies: ["pintar", "correr", "viajar"]},
    {nombre: "Pedro", dni: "98765432", hobbies: ["cocinar", "ver películas"]},
    {nombre: "Laura", dni: "54321678", hobbies: ["hacer deporte", "viajar"]},
    {nombre: "Carlos", dni: "87651234", hobbies: ["tocar la guitarra", "hacer deporte"]}
];


function metodoFind(dni1){
   
    const personaFind = personas.find(persona => persona.dni === dni1)
    if(personaFind == undefined){
        result.innerHTML = "La persona no existe en base de datos"
        result2.innerHTML = "const PERSONA = personas.find(persona => persona.dni === dni1)"

    }else{
        console.log(personaFind)
        result.innerHTML = `La persona amb DNI ${personaFind.dni} esta d'onada d'alta`
        result2.innerHTML = "const PERSONA = personas.find(persona => persona.dni === dni1)"
    }
}

function metodoFindIndex(dni2){
    const index = personas.findIndex(persona => persona.dni === dni2)
    if(index == -1){
        result.innerHTML = "La persona no existe en base de datos"
        result2.innerHTML = "const index = personas.findIndex(persona => persona.dni === dni2)"

   }else{
       console.log(index)
       result.innerHTML = `La persona amb DNI ${dni2} esta a la posicio ${index}`
       result2.innerHTML = "const index = personas.findIndex(persona => persona.dni === dni2)"
   }
}

function metodoFilter(hobby){
    const personasHobby = personas.filter(persona => persona.hobbies.includes(hobby))
    console.log(personasHobby)
    if(personasHobby.length > 0){
        personasHobby.forEach(persona => result.innerHTML = `las Personas que tienen este hobby son : ${persona.nombre}`)
        result2.innerHTML = "const personasHobby = personas.filter(persona => persona.hobbies.includes(hobby))" 
    }else{
        result.innerHTML = "No hay personas con este hobby"
        result2.innerHTML = "const personasHobby = personas.filter(persona => persona.hobbies.includes(hobby))" 

    }
}

function metodoReduce(){
    // const totalHobbies = personas.reduce((total, persona) => total + persona.hobbies.length,0)
    // result.innerHTML = `Total hobbies es : ${totalHobbies} <br>`

    const totalHobbies = personas.reduce((total, persona) => {
        return [...total, ...persona.hobbies]
    },[])
    console.log(totalHobbies)
    result.innerHTML = `El total de hobbies es : ${totalHobbies.length}`
    result2.innerHTML = `const totalHobbies = personas.reduce((total, persona) => {
                        return [...total, ...persona.hobbies]},[])`
}

function metodoSome(hobbiie){
    const someHobby = personas.some(persona => persona.hobbies.includes(hobbiie))
    console.log(someHobby)
    if(someHobby == true){
        result.innerHTML = `SI, alguna persona te aquest hobby`
        result2.innerHTML = "const someHobby = personas.some(persona => persona.hobbies.includes(hobbiie))" 

    }else{
        result.innerHTML = `NO hi ha cap persona amb aquest hobby`
        result2.innerHTML = "const someHobby = personas.some(persona => persona.hobbies.includes(hobbiie))" 
    }
}

function metodoFindIncludes(hobbyFind){
    const hobbybuscar = personas.find(persona => persona.hobbies.includes(hobbyFind))
    console.log(hobbybuscar)
    if(hobbybuscar != undefined){
        result.innerHTML = `La primera persona amb aquest hobby es ${hobbybuscar.nombre}`
        result2.innerHTML = "const hobbybuscar = personas.find(persona => persona.hobbies.includes(hobbyFind))" 
    }else{
    result.innerHTML = `NO hi ha cap persona amb aquest hobby`
    result2.innerHTML = "const hobbybuscar = personas.find(persona => persona.hobbies.includes(hobbyFind))" 
    }
}

function metodoMap(){
    const nomsMayuscules = personas.map(persona => persona.nombre.toUpperCase())
    console.log(nomsMayuscules)
    result.innerHTML = nomsMayuscules.join(" , ")
    result2.innerHTML = "const nomsMayuscules = personas.map(persona => persona.nombre.toUpperCase())" 
}


let result = document.getElementById("result")
let result2 = document.getElementById("result2")


function mostrarSeleccion(){

    let opcion = document.getElementById("opcion").value

    switch(opcion){

        case "1" : 
            let dni1 = prompt("indica DNI")
            metodoFind(dni1)
        break;

        case "2" :
            let dni2 = prompt("introdueix DNI")
            metodoFindIndex(dni2)
        break;

        case "3" :
            let hobby = prompt("introdueix hobby")
            metodoFilter(hobby)
        break;

        case "4" :
            metodoReduce()
        break;

        case "5" :
            let hobbiie = prompt("introdueix hobby")
            metodoSome(hobbiie)
        break;

        case "6" :
            let hobbyFind = prompt("introdueix hobby")
            metodoFindIncludes(hobbyFind)
        break;

        case "7" :
            metodoMap()
        break;

    }
}