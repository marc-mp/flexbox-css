function quadrat(){
    let costat = parseInt(prompt("introduexi mida del costat"))
    let areaquadrat =  costat * costat 
    return areaquadrat
}

function triangle(){
    let base = parseInt(prompt("introduexi mida de la base"))
    let altura = parseInt(prompt("introduexi mida de l'altura"))
    let areatriangle =  base * altura / 2 
    return areatriangle
}

function rectangle(){
    let base = parseInt(prompt("introduexi mida de la base"))
    let altura = parseInt(prompt("introduexi mida de l'altura"))
    let arearectangle =  base * altura 
    return arearectangle    
}

function cercle(){
    let radio = parseInt(prompt("introduexi mida del radi"))
    let pi = Math.PI
    let areacercle = pi * (radio**2)
    return areacercle   
}


function calcular (num){

    let forma = parseInt(document.getElementById("forma").value)
    let result = document.getElementById("result")

    if(forma < 0 || forma > 4){

        result.innerHTML = "Debe introducir numero entre 1 y 4"
        return
    }

    switch(forma){

        case 1 : result.innerHTML = `l'area del quadrat es ${quadrat()}`
        break;

        case 2 : result.innerHTML = `l'area del triangle es ${triangle()}`
        break;  

        case 3 : result.innerHTML = `l'area del rectangle es ${rectangle()}`
        break;

        case 4 : result.innerHTML = `l'area del cercle es ${cercle()}`
        break;

    }
    
}