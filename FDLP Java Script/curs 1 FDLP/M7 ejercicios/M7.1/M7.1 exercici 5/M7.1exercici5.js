function parells(){

    let result = document.getElementById("result")
    let numpares = 0
    let arraypares = []
    let nummax = 100

    for(let i = 0 ; i < nummax ; i+=2){

        numpares +=2
        arraypares.push(numpares)
    }

    result.innerHTML = `${arraypares.reverse()}`
}