function piramide(){

    let numlinealarga = parseInt(document.getElementById("numlinealarga").value)
    let result = document.getElementById("result")
    let signo = "*"
    let linea = ""
    const mitadpiramide = []
   
    
    for (let i = 0 ; i < numlinealarga; i++){

        linea += signo
        mitadpiramide.push(linea)           
    
    }   
    
    result.innerHTML = mitadpiramide.join("<br>") 
    
    mitadpiramide.reverse()
    mitadpiramide.shift()

    result.innerHTML += "<br>" + mitadpiramide.join("<br>") 
    
}