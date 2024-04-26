function noms(){

    let result = document.getElementById("result")
    let numero = parseInt(document.getElementById("numeroNoms").value)
    const arrayNoms = []
    const nomsA = []

    for(let i = 0; i < numero ; i++){

        let nom = prompt("indica nom")
        arrayNoms.push(nom) 
        if(nom.startsWith("A") || nom.startsWith("a")){
            nomsA.push(nom)   
        }
    }
    console.log(nomsA)
    console.log(arrayNoms)
    result.innerHTML = nomsA.join("-")
}