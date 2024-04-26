function dibujar(){

    let numlineas = parseInt(document.getElementById("numlineas").value)
    let result = document.getElementById("result")
    let signo = "*"
    let linea = ""
    const triangulo = []

    for (let i = 0 ; i < numlineas; i++){

        linea += signo
        triangulo.push(linea)
    }
    
    triangulo.reverse()
    result.innerHTML = `${triangulo.join("<br>")}`

}