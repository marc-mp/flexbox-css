function Dibujar(){
    
    let altura = parseInt(document.getElementById("altura" ).value)
    let result = document.getElementById("result")
    const signo = "*"
    let ancho = parseInt((altura/2) +1)
    let lineavertical = ""
    let lineahorizontal = ""
   
    if(isNaN(altura)){
        result.innerHTM = "introduzca un numero valido"
        return
    }

    for(i=1; i<altura; i++){
        lineavertical += signo + "<br>"
    }  

    for(i=0; i<ancho; i++){
        lineahorizontal += signo 
    }
 
    result.innerHTML = lineavertical + lineahorizontal
}

