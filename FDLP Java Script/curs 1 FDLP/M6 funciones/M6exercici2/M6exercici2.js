function media(suma,numpersonas){
    resultado = suma /numpersonas
    return resultado
}

function edades(){

    let numpersonas = parseInt(document.getElementById("numpersonas").value)
    let result = document.getElementById("result")
    let edad 
    let suma = 0
    let contadorpersonas= 0
    
    
    do {
        edad = parseInt(prompt("introduzca edad"))

        if(edad > 0 && edad < 120){
            suma += parseInt(edad)
            contadorpersonas++
            
        }else{
            alert("debe introducir un nuemro enrre 0 y 120")
        }
        
    }while (contadorpersonas < numpersonas)
  
    result.innerHTML = `la media de edad es ${media(suma,numpersonas)} `
}