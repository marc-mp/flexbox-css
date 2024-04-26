function myFunction(){

    let edat= document.getElementById("age").value
    let result = document.getElementById("result")
    let message=""

    if(edat<=5){
       
        message = "preescolar"

    }else if(edat<=11){

        message = "primaria"
                
    }else if(edat<=15){

        message = "eso"
     
    }else if(edat<=17){

        message = "Batxillerat"
   
    }else if(edat>=18){

        message = "FP o universitat"

    }
    
    result.innerHTML = message

}
