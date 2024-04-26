function myFunction(){

    let num1 = parseInt(document.getElementById("num1" ).value)
    let result = document.getElementById("result")
    const lista= []
    let text =""

    result.innerHTML = ""

    if (num1<1 || num1>6){
        result.innerHTML = "por favor, introduzca un numero del 1 al 6"
        return
    }

    result.innerHTML = ""
    
    for(let i = 0 ; i < num1; i++){
        let palabra = prompt('escrive palabra');
        lista.push(palabra)
        text += lista[i] + "<br>";
     
    }
    result.innerHTML = text

}