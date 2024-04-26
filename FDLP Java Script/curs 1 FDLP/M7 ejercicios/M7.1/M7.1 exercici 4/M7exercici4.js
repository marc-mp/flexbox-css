function myFunction(){

    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let result = document.getElementById("result")


    // nota: ejercicio solo pide que el programa retorne si uno de los 2 numeros es negativo. 
    // Seria el primer "If", pero he hecho que tb retorne mensaje con las otras opciones.
    
    if((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)){

        result.innerHTML = `Un dels dos numeros es negatiu`
    
    }else if((num1 > 0 && num2 > 0)) {
        
        result.innerHTML = `Els dos numeros son positius` 


    }else{

        result.innerHTML = `Els dos numeros son negatius`
    }


}