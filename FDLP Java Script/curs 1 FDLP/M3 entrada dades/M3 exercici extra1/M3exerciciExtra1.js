function myFunction()
    {

        let doblenum1 = parseInt(document.getElementById("num1").value) *2
        let triplenum1 = parseInt(document.getElementById("num1").value) *3
        let message = `El doble es ${doblenum1} y el triple es ${triplenum1} `

        let result = document.getElementById("result")
        result.innerHTML = message

    }
    
