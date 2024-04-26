function myfunction(){

    let text = document.getElementById("text").value
    let result = document.getElementById("result")
    let mayusculas = 0
    let minusculas = 0
    
    let texto = text.replace(/ /g, "") //quito posibles espacios en blanco del texto porque  los coje como mayusculas
    
    for (let i = 0 ; i <= texto.length-1; i++){

        texto[i]
        
        if(texto[i] == texto[i].toUpperCase()){
            mayusculas += 1

        }else if(texto[i] == texto[i].toLowerCase()){
            minusculas += 1
        }

    }

    if ((mayusculas == 0 && minusculas == 0)){

        result.innerHTML = "debe introducir texto"
        return
    }
   
    if((mayusculas > 0 && minusculas == 0)){

        result.innerHTML = "texto todo en mayusculas"
    
    }else if ((minusculas > 0 && mayusculas == 0)){

        result.innerHTML = "texto todo en minusculas"

    }else {
        result.innerHTML = "texto contiene mayusculas y minusculas" 

    }
  

}