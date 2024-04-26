function media(nota1,nota2,nota3){

    resultadomedia = (nota1 + nota2 + nota3) / 3
    return resultadomedia.toFixed(2)
}


function medianotas(){

    let nota1 = parseFloat(document.getElementById("nota1").value)
    let nota2 = parseFloat(document.getElementById("nota2").value)
    let nota3 = parseFloat(document.getElementById("nota3").value)
    let result = document.getElementById("result")
    let resultadomedia = media(nota1,nota2,nota3)

    // Nota : Se podria poner una validacion con otro "IF" por si nota fuera menor a 0 o mayor de 10.

    if (resultadomedia < 5){

        result.innerHTML = `${resultadomedia} No has superat el curs. Has de recuperar`

    }else if (resultadomedia <=7){

        result.innerHTML = `${resultadomedia} Enhorabona! Has aprovat, però hauries de continuar practicant`

    }else {

        result.innerHTML = `${resultadomedia} Enhorabona! Has superat el curs! Passa ja al següent nivell!`
    }
}