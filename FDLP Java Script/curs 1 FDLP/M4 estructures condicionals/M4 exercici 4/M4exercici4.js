function myFunction(){

    let numMES= parseInt(document.getElementById("numMES").value)
    let result = document.getElementById("result")
    let text =""
    

         switch(numMES){

            case 1:
            text = "Enero tiene 31 dias"
            break

            case 2:
            text = "Febrero tiene 29 dias"
            break

            case 3:
            text = "Marzo tiene 31 dias"
            break

            case 4:
            text = "Abril tiene 30 dias"
            break

            case 5:
            text = "Mayo tiene 31 dias"
            break

            case 6:
            text = "Junio tiene 30 dias"
            break

            case 7:
            text = "Julio tiene 31 dias"
            break

            case 8:
            text = "Agosto tiene 31 dias"
            break

            case 9:
            text = "Septiembre tiene 30 dias"
            break

            case 10:
            text = "Octubre tiene 31 dias"
            break

            case 11:
            text = "Noviembre tiene 30 dias"
            break

            case 12:
            text = "Diciembre tiene 31 dias"
            break

            default:
            text = "introduce un numero entre 1 y 12"
            break
        }

        result.innerHTML = text
    
}