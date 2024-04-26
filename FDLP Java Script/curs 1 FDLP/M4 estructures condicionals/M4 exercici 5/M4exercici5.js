function myFunction(){

    let num1= parseFloat(document.getElementById("num1").value)
    let num2= parseFloat(document.getElementById("num2").value)
    let operador= document.getElementById("operador").value
    let result = document.getElementById("result")
    let Resultat =""

    switch(operador){

        case "+":
            Resultat = num1 + num2
            break

        case "-":
            Resultat = num1 - num2
            break

        case "*":
            Resultat = num1 * num2
            break

        case "/":
            Resultat = num1 / num2
            break
        
    }

    result.innerHTML =`El resultat es ${Resultat.toFixed(2)}`

}