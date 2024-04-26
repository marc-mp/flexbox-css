function crearPiramide(){

    let lineallarga = +prompt("indica numero")
    let result = document.getElementById("result")
    let pintar = "*"
    let sumapintar =""

    for(let i = 0 ; i < lineallarga; i++){
        sumapintar += pintar
        result.innerHTML += `${sumapintar} <br>`
        console.log(sumapintar)
    }

    for(let i = 0 ; i < lineallarga; i++){
        sumapintar += pintar
        result.innerHTML = `${sumapintar} <br>`
        console.log(sumapintar)
            for(let j = 0; j < i ; j ++){
                sumapintar += pintar
                result.innerHTML += ` <br>`


            }
    }



}