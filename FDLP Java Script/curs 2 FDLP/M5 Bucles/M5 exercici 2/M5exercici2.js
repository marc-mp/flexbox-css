function sumavalos(){

let result = document.getElementById("result")
let num1 = parseInt(document.getElementById("num1").value)
let num2 = parseInt(document.getElementById("num2").value)
let resultat = 0

    for( let i = num1; i <= num2 ; i++){

        resultat += i

    }

    result.innerHTML = `${resultat}`

}