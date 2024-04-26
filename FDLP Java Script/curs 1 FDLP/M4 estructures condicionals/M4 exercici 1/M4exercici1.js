function myFunction(){

    let result = document.getElementById("result")
    let nom = document.getElementById("name").value
    let cognom = document.getElementById("surname").value
    let edat = document.getElementById("age").value
    let adulto= ""
        
    if(edat <18){
        adulto = "MENOR"
        
    }else{
        adulto = "MAJOR"
    }
    
    result.innerHTML = `${nom} ${cognom} ets ${adulto} d'edat` 
        

}  

