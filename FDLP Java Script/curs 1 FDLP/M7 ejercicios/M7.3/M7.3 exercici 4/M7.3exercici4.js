function letradni(dni){

    let refletracorrecta = dni % 23
    let letracorrecta = ""

    switch (refletracorrecta){

        case 0 :
            letracorrecta = "T"
            break;
        
        case 1 :
            letracorrecta = "R"
            break;
            
        case 2 :
            letracorrecta = "W"
            break;
        
        case 3 :
            letracorrecta = "A"
            break;
        
        case 4 :
            letracorrecta = "G"
            break;
        
        case 5 :
            letracorrecta = "M"
            break;

        case 6 :
            letracorrecta = "Y"
            break;
        
        case 7 :
            letracorrecta = "F"
            break;
            
        case 8 :
            letracorrecta = "P"
            break;
        
        case 9 :
            letracorrecta = "D"
            break;
        
        case 10 :
            letracorrecta = "X"
            break;
        
        case 11 :
            letracorrecta = "B"
            break;

        case 12 :
            letracorrecta = "N"
            break;
        
        case 13 :
            letracorrecta = "J"
            break;
            
        case 14 :
            letracorrecta = "Z"
            break;
        
        case 15 :
            letracorrecta = "S"
            break;
        
        case 16 :
            letracorrecta = "Q"
            break;
        
        case 17 :
            letracorrecta = "V"
            break;

        case 18 :
            letracorrecta = "H"
            break;
        
        case 19 :
            letracorrecta = "L"
            break;
            
        case 20 :
            letracorrecta = "C"
            break;
        
        case 21 :
            letracorrecta = "K"
            break;
        
        case 22 :
            letracorrecta = "E"
            break;
        
        default :
            letracorrecta = "Error"
            break;
        
    }

    return letracorrecta

}



function dni(){

    let dni = parseInt(document.getElementById("dni").value)
    let letraUser = document.getElementById("letraUser").value.toUpperCase()
    let result = document.getElementById("result")

    let letracorrecta = letradni(dni)

    if (dni > 99999999 || letracorrecta === "Error") {

        result.innerHTML = `Numero DNI no valido. Deben tener 8 numeros + la letra`
        return
    }

    if(letraUser == letracorrecta){
        
        result.innerHTML = `la lletra es correcte`
    
    }else{
        result.innerHTML = `la lletra NO es correcte, hauria de ser ${letracorrecta}`
    }

}