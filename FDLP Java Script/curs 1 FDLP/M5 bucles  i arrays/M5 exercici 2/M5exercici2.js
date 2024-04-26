function calcular(){

    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let result = document.getElementById("result")
    let suma = 0
    
    if(isNaN(num1) || isNaN(num2)){
        result.innerHTML = "debe introducir 2 numeros"
        return
    }

    if(num1 > num2){
        let numAux = num1
        num1 = num2
        num2= numAux   
    }


    for(let i = num1 ;  i <= num2; i++){
         suma += i
    }
  
    result.innerHTML = `la suma entre los valores ${num1} y ${num2}  es ${suma}`
}