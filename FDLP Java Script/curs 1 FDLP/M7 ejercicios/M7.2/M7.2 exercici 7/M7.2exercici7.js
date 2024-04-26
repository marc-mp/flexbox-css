function bisiesto(num){

    if ((num % 400 == 0) || (num % 4 == 0 && num % 100 != 0)){

        return `${num} es año bisiesto`
    
    }else{
        return `${num} NO es año bisiesto`
    }
}


function anyo(){

    let any = parseInt(document.getElementById("any").value)
    let result = document.getElementById("result")

    result.innerHTML = bisiesto(any)

}