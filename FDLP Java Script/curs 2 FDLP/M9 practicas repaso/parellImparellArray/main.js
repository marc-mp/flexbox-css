function ejecutar(){

    let result = document.getElementById("result")
    let arrayRandom = []

    let sumaNumParell = 0
    let sumaNumImparell = 0

    for (let i = 0 ; i < 10; i++){
        let numeroArray = +prompt("indica numero entre 1 y 50")
        arrayRandom.push(numeroArray)
        if(numeroArray % 2 == 0){
            sumaNumParell += numeroArray
        }else{
            sumaNumImparell += numeroArray
        }
    }

    console.log(arrayRandom)
    result.innerHTML = `Suma numero parells es : ${sumaNumParell} y suma numeros imparells es ${sumaNumImparell} `

}