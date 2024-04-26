function arrayrandom(){

    let result = document.getElementById("result")
    let arrayNum = []
    let numrandom = 0
    let parells = 0
    let imparells = 0

    for (let i= 0 ; i < 20; i++){

        numrandom = Math.ceil((Math.random() * 50))
        arrayNum.push(numrandom)
        console.log(arrayNum.join())
        
        if (numrandom % 2 == 0){

            parells += numrandom
        
        }else{
            imparells += numrandom
        }

        result.innerHTML =`Array random : ${arrayNum.join()} <br><br>`+`La suma dels  parells es ${parells} <br>`+ `La suma dels imparells es ${imparells}`

    }

}



