function fibonacci(num){
    let num1 
    let num2 
    let resultado
    const fibo = [0,1]

    if (num < 2){
       return fibo[0]    
   
    } else {

        for (let i = 2 ; i <num ; i++){
        
            num1 = (fibo[fibo.length-2])
            num2 = (fibo[fibo.length-1])
            resultado = num2 + num1
            fibo.push(resultado)
        }
        return fibo.join()
    }
}

function calcular(){

    let numusuari = parseInt(document.getElementById("numusuari").value)
    let result = document.getElementById("result")
    result.innerHTML = fibonacci(numusuari)
}