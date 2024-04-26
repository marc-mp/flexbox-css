function myFunction(){

    let num1 = parseInt(document.getElementById("num1").value)
    let unidades = num1%10
    let decenas = parseInt(num1/10)
    let unittext = ""
    let text = ""
    let result = document.getElementById("result")

    if(num1<0 || num1>99){
        result.innerHTML = "Debe introducir un numero entre 0 y 99"
        return
    }
    
    
   
    function unidad(unidades){
        switch (unidades){
            case 0:

                unittext ="zero"
                    break
                
            case 1:
                unittext ="uno"
                break

            case 2:
                unittext ="dos"
                break
            
            case 3:
                unittext ="tres"
                break

            case 4:
                unittext ="cuatro"
                break
                
            case 5:
                unittext ="cinco"
                break

            case 6:
                unittext ="seis"
                break
            
            case 7:
                unittext ="siete"
                break    

            case 8:
                unittext ="ocho"
                break
            
            case 9:
                unittext ="nueve"
                break  
                
        }   
        return unittext
    }


  
    switch(decenas){

        
        case 1:
            switch(unidades){
                case 0:
                    text = "diez"
                break
                case 1: 
                    text = "once"
                break
                case 2: 
                    text="doce"
                    break
                case 3:
                    text= "trece"
                    break
                case 4 :
                    text = "catorce"
                    break
                case 5 :
                    text = "quinze"
                    break
                case 6 :
                case 7 :
                case 8 :
                case 9 :
                    text = "dieci" + unidad(unidades)
                    break
            }
        break
    

        case 2 :
            switch(unidades){
                case 0 :
                    text = "veinte"
                    break
                case 1 :
                case 2 :
                case 3 :
                case 4 :
                case 5 :
                case 6 :
                case 7 :
                case 8 :
                case 9 :
                    text = "veinti"  + unidad(unidades)
                    break
            }
        break

        case 3 :
            switch(unidades){
                case 0 :
                    text = "treinta"
                    break
                case 1 :
                case 2 :
                case 3 :
                case 4 :
                case 5 :
                case 6 :
                case 7 :
                case 8 :
                case 9 :
                    text = "treinta" + " y "  + unidad(unidades)
                    break
            }
        break

        case 4 :
            switch(unidades){
                case 0 :
                    text = "cuarenta"
                    break
                case 1 :
                case 2 :
                case 3 :
                case 4 :
                case 5 :
                case 6 :
                case 7 :
                case 8 :
                case 9 :
                    text = "cuarenta" + " y " + unidad(unidades)
                    break
            }
        break

        case 5 :
            switch(unidades){
                case 0 :
                    text = "cincuenta"
                    break
                case 1 :
                case 2 :
                case 3 :
                case 4 :
                case 5 :
                case 6 :
                case 7 :
                case 8 :
                case 9 :
                    text = "cincuenta" + " y " + unidad(unidades)
                    break
            }
        break

        case 6 :
            switch(unidades){
                case 0 :
                    text = "sesenta"
                    break
                case 1 :
                case 2 :
                case 3 :
                case 4 :
                case 5 :
                case 6 :
                case 7 :
                case 8 :
                case 9 :
                    text = "sesenta" + " y " + unidad(unidades)
                    break
            }
        break
    
        case 7 :
            switch(unidades){
                case 0 :
                    text = "setenta"
                    break
                case 1 :
                case 2 :
                case 3 :
                case 4 :
                case 5 :
                case 6 :
                case 7 :
                case 8 :
                case 9 :
                    text = "setenta" + " y " + unidad(unidades)
                    break
            }
        break

        case 8 :
            switch(unidades){
                case 0 :
                    text = "ochenta"
                    break
                case 1 :
                case 2 :
                case 3 :
                case 4 :
                case 5 :
                case 6 :
                case 7 :
                case 8 :
                case 9 :
                    text = "ochenta" + " y " + unidad(unidades)
                    break
            }
        break

        case 9 :
            switch(unidades){
                case 0 :
                    text = "noventa"
                    break
                case 1 :
                case 2 :
                case 3 :
                case 4 :
                case 5 :
                case 6 :
                case 7 :
                case 8 :
                case 9 :
                    text = "noventa" + " y " + unidad(unidades)
                break
            }
        break

        
    }
    if(num1<=9){
        result.innerHTML = unidad(unidades)
        return
    }
    if (num1>9){
        result.innerHTML = text
        return
    }
}

        
