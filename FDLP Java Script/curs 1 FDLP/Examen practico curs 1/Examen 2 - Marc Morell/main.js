function dibujar(){

    let tamaño = document.getElementById("tamaño").value
    let result = document.getElementById("result")
    let chartone = "#"
    let charttwo = "*"

    for(let i = 0; i < tamaño; i++){
        result.innerHTML += chartone
    }

    result.innerHTML += "<br>"
    
    for(let i = 0; i < tamaño-2; i++){

        result.innerHTML += chartone

        for(let j = 0; j < tamaño-2; j++){

            result.innerHTML += charttwo
        }
        result.innerHTML += chartone + "<br>"
    }


    for(let i = 0; i < tamaño; i++){
        result.innerHTML += chartone
    }
}