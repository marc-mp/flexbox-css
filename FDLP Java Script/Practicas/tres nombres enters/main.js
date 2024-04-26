function myfunction(){

    let result = document.getElementById("result")
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let num3 = parseInt(document.getElementById("num3").value)

    if(num1 > num2 && num1 > num3){
        result.innerHTML = `El major es el nunmero ${num1} <br>`
    }else if(num2 > num1 && num2 > num3){
        result.innerHTML = `El major  es el nunmero ${num2} <br>`
    }else{
        result.innerHTML = `El major es el nunmero ${num3} <br>`
    }

    if(num1 < num2 && num1 < num3){
        result.innerHTML += `El menor  es el nunmero ${num1} <br>`
    }else if(num2 < num1 && num2 < num3){
        result.innerHTML += `El menor es el nunmero ${num2} <br>`
    }else{
        result.innerHTML += `El menor  es el nunmero ${num3} <br>`
    }

    if(num1 == num2 || num1 == num3){
        result.innerHTML += `El menor  es el nunmero ${num1} <br>`
    }else if(num2 == num1 || num2 == num3){
        result.innerHTML += `El menor es el nunmero ${num2} <br>`
    }else{
        result.innerHTML += `El menor  es el nunmero ${num3} <br>`
    }





}