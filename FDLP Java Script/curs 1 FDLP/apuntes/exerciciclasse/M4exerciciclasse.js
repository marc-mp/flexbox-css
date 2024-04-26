function myFunction(){

let numero1= document.getElementById("num1").value
let numero2= document.getElementById("num2").value
let result = document.getElementById("result")

if((numero1>=2 && numero1 <=7)|| (numero2>=2 && numero2<=7)){

    result.innerHTML = "uno de los numeros esta dentro de 2 y 7"

}else{

    result.innerHTML = "error no estas dentro"
    }
 }