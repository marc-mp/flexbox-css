const aleatori = Math.ceil((Math.random() * 10))
console.log(aleatori)


function adivinar(){
    
    let num1 
    
    do{  
        num1 = parseInt(prompt("indica un numero del 1 al 10"))
        if(num1 <1 || num1>10){
            alert("debe introducir un numero valido")
        }
    }while( num1 != aleatori)
    
    alert( `Enhorabuena, el numero era el ${aleatori}`)
  
}


