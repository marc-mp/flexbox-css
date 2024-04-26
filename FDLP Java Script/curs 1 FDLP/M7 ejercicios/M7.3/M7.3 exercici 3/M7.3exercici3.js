function eliminarDiacriticos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}

function comprobar(){

    let textusuari = document.getElementById("textusuari").value.toUpperCase()
    let result = document.getElementById("result")
    
    let textlimpio1 = textusuari.replaceAll(/[,.:?!¿¡"'·$%&/()]/g, "") //quito algunos caracteres , faltan tildes
    let textlimpio2 = textlimpio1.replace(/ /g, "") //quito los espacios en blanco del texto
    let textMaslimpio = eliminarDiacriticos(textlimpio2) // funcion para quitar acentos

    let textalreves = ""

    for (let i = textMaslimpio.length-1; i >= 0; i--){  

        textalreves += textMaslimpio[i]     
    }
   
    if (textMaslimpio == textalreves) { 

        result.innerHTML = "El text introduit es palindrom"

    }else{
        result.innerHTML = "El text introduit NO es palindrom"
    }

}