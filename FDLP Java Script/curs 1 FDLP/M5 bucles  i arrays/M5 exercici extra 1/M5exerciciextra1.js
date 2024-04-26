function adivinar(){ 
    
    let aleatori= Math.ceil((Math.random() * 500)); // aleatorio de 1 a 500 
    console.log(aleatori) //mostrar por consola por si necesitamos ver num aleatorio 
    let result = document.getElementById("result")
    let numusuari
    let diferencia

    do{
        numusuari = parseInt(prompt("introdueix un numero del 1 al 500"))

        if(numusuari < 1 || numusuari > 500){

            alert(" ha d'introduir un numero entre el 1 y el 500")
            
        }
        if(numusuari > aleatori){
           diferencia = numusuari - aleatori
           
            if (diferencia >= 50){

                alert("Fred, fred: el teu número és més gran ")
            
            }else if (diferencia >=15 && diferencia <50){

                alert ("Tebi, Tebi: el teu número és més gran ")

            }else if (diferencia < 15){

                alert ("Calent, calent: el teu número és més gran")
            }
        }
        if(numusuari < aleatori){
            diferencia = aleatori - numusuari

            if (diferencia >= 50){

                alert("Fred, fred: el teu número és més petit ")
            
            }else if (diferencia >=15 && diferencia <50){

                alert ("Tebi, Tebi: el teu número és més petit ")

            }else if (diferencia < 15){

                alert ("Calent, calent: el teu número és més petit")
            }
        }

    }while(numusuari != aleatori)

    alert(`Has encertat!! el numero es el ${aleatori}`)
   // result.innerHTML = `Has encertat!! el numero es el ${aleatori}` 

}
