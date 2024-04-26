function myFunction(){

    let dia= parseInt(document.getElementById("dia").value)
    let mes= parseInt(document.getElementById("mes").value)
    let result = document.getElementById("result")
    let message =""

    switch(mes){

        case 1:
            if(dia <=19){
                message= "Capricornio"

            }else{
                message= "Aquario"
            }
        break

        case 2:
            if(dia <=18){
                message= "Aquario"

            }else{
                message= "Piscis"
            }
        break

        case 3:
            if(dia <=20){
                message= "Piscis"

            }else{
                message= "Aries"
            }
        break

        case 4:
            if(dia <=19){
                message= "Aries"

            }else{
                message= "Tauro"
            }
        break

        case 5:
            if(dia <=20){
                message= "Tauro"

            }else{
                message= "Gemisis"
            }
        break

        case 6:
            if(dia <=20){
                message= "Geminis"

            }else{
                message= "Cancer"
            }
        break

        case 7:
            if(dia <=22){
                message= "Cancer"

            }else{
                message= "Leo"
            }
        break

        case 8:
            if(dia <=22){
                message= "Leo"

            }else{
                message= "Virgo"
            }
        break

        case 9:
            if(dia <=22){
                message= "Virgo"

            }else{
                message= "Libra"
            }
        break

        case 10:
            if(dia <=22){
                message= "Libra"

            }else{
                message= "Escorpio"
            }
        break

        case 11:
            if(dia <=21){
                message= "Escorpio"

            }else{
                message= "Sagitario"
            }
        break

        case 12:
            if(dia <=21){
                message= "Sagitario"

            }else{
                message= "Capricornio"
            }
        break

    }

    result.innerHTML = `El teu signe del zodíac és ${message}`
}