function dibujar(){

    let medida = parseInt(document.getElementById("medida").value)
    let signo = document.getElementById("signo").value
    let result = document.getElementById("result")
    let lineahorizontal = ""
    const cuadrado = [] 
   
    
    for (let i = 0 ; i < medida ; i++){  //creo una lineahorizontal  del cuadrado con la medida que indica usuario

        lineahorizontal += signo
       
    }
    for (let i = 0 ; i < medida ; i++){  // repito y guardo en arrray la "lineahorizontal" tantas veces como indique la medida del usuario

        cuadrado.push(lineahorizontal)
    }
    
    result.innerHTML = cuadrado.join("<br>") 
}   
