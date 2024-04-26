function media(sumanotas,numeronotas){
    resultado = sumanotas /numeronotas
    return resultado
}

function medianotas(){

    let numeronotas = parseInt(document.getElementById("numeronotas").value)
    let result = document.getElementById("result")
    let nota 
    let sumanotas = 0
    let contadornotas= 0
    
    
    do {
        nota = parseInt(prompt("introdueixi nota"))

            sumanotas += parseInt(nota)
            contadornotas++
            
        if (isNaN(nota)){
            alert(" Error!! la nota no es un numero ")
            return
        }
        if(nota < 0 || nota > 10){
            alert(" Error!! Les notes han d'estar compreses entre 0 i 10 ")
            return
        }
        
    }while (contadornotas < numeronotas)
  
    if (media(sumanotas,numeronotas) < 5){

        alert(`${media(sumanotas,numeronotas)} La nota mitjana de la classe està suspesa. Els/les alumnes haurien de preguntar els seus dubtes i treballar més`)
    
    }else if (media(sumanotas,numeronotas) >= 5 && (media(sumanotas,numeronotas) < 7)){

        alert(`${media(sumanotas,numeronotas)} La nota mitjana de la classe és bona, però els/les alumnes haurien de millorar el treball personal`)
    
    }else{
        alert(`${media(sumanotas,numeronotas)} Enhorabona! La nota mitjana de la classe es correspon amb l'esforç realitzat`)
    }
   
}