function arrays(){ 

    let array1 =[]
    let array2 =[]
    let result = document.getElementById("result")

    for(let i = 200; i > 0; i-=20){

        array1.push(i)
        array2.push(i*3)
        
    }

    console.log(array1)
    console.log(array2.reverse())

    result.innerHTML = `array1 es : ${array1.join("-")}<br>
                        array2 es : ${array2.join("-")}`


}

