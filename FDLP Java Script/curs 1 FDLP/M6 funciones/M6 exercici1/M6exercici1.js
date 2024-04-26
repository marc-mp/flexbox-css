
function sumar(num1,num2){ return num1 + num2 }

function restar (num1,num2){ return  num1 - num2 }

function multiplicar (num1,num2){  return  num1 * num2 }

function dividir (num1,num2){ return num1 / num2 }

function resto (num1,num2){ return num1 % num2 }

function calcular(){

    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let operacion = document.getElementById("operacion").value
    let result = document.getElementById("result")
    let resultado = 0
    
    switch (operacion) {
    
        case "+" : 
        resultado = sumar(num1,num2)
        break;

        case "-" :  
        resultado = restar(num1,num2)
        break;

        case "*" :  
        resultado = multiplicar(num1,num2)
        break;
        
        case "/" :  
        resultado = dividir(num1,num2)
        break;

        case "%" :  
        resultado = resto(num1,num2)
        break;

    }

    result.innerHTML = `El resultado es ${resultado}`
}


