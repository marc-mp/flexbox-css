function factorial(num){
   
    let resultado = 1
    for (let i = 1; i <= num ; i++){
        
        resultado *= i 
       
    }
    return resultado
}


function calcular(){

    let numusuario = parseInt(document.getElementById("numusuario").value)
    let result = document.getElementById("result")

    result.innerHTML = factorial(numusuario)

}