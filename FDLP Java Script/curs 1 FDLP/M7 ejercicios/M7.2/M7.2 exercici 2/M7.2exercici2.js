function triangulo(){

    let numlineas = parseInt(document.getElementById("numlineas").value)
    let result = document.getElementById("result")
    let signo = "*"
    let linea = ""
    result.innerHTML = ""
    for (let i = 0 ; i < numlineas; i++){

        linea += signo 
        result.innerHTML += linea + "<br>"  
    }
    
}