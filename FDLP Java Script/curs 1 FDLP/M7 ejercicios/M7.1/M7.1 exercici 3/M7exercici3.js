function parImpar(num1){

    let resultado = num1 % 2 
    return resultado
}


function myFunction(){

    let num1 = parseInt(document.getElementById("num1").value)
    let result = document.getElementById("result")

    if (isNaN(num1)){       

        result.innerHTML = `${num1} no es un numero`
        return
    }

    if (parImpar(num1) == 0){

        result.innerHTML = `El ${num1} es parell`
    }else{

        result.innerHTML = `El ${num1} es imparell`
    }
}