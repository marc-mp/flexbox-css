const aleatori = Math.ceil((Math.random() * 10)) // se pone fuera funcion para que sea fijo y no cambia cada vez al darle al boton (funcion)
console.log(aleatori)

function adivinar(){
    
        let num1 
        let intentos =0
        const maxintentos = 5 //entendiendo que el 5º intento tb cuenta
        
        do{
            
            num1 = parseInt(prompt("indica un numero del 1 al 10"))
            intentos++

            if(num1 <1 || num1>10){
                alert("Has d'introduir un numero valid")
            }   

        }while ((num1 != aleatori) && (intentos <= maxintentos))
       
        if ((num1 == aleatori) && (intentos <= maxintentos)){  //pongo 2º condicion porque usuario podria acertar en el 6º intento y tb saldria mensaje de enhorabuena
            alert(`Enhorabona, el número és ${aleatori} i has necessitat ${intentos} intents per encertar-lo`)
        
        }else if (intentos > maxintentos) {
            alert( `Has utilitzat massa intents! El número era ${aleatori}`)
            
        }

       
       
}