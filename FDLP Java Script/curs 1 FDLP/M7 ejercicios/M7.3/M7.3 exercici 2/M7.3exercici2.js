function stringreves(text){

    let textalreves =""

    for (let i = text.length -1; i >= 0; i--){

        textalreves += text[i] 
    }
    return textalreves
}

function mostrar(){

    let stringUsuari = document.getElementById("stringUsuari").value
    let result = document.getElementById("result")
    
    result.innerHTML = stringreves(stringUsuari)
    
}