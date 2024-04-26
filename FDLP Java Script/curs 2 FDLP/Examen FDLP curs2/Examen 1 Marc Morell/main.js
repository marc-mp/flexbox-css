let arrayAleatori = []

function myFunction(){

   
    let cantidadNumeros = parseInt(document.getElementById("cantidadNum").value)
    let result = document.getElementById("result") 
   

    if (cantidadNumeros < 10 || cantidadNumeros > 30 ){

        alert("Error cantitat ha de ser entre 10 y 30")
    }else{

        let numArray = 0
        let sumaPrimeros20 = 0
        let sumaSegundos20 = 0
        let sumaTerceros20 = 0
        let porcentajePrimeros20 = 0
        let porcentajeSegundos20 = 0
        let porcentajeTerceros20 = 0

        for(let i = 0; i < cantidadNumeros; i++){

            numArray = Math.floor(Math.random() * 60)

            // do{
            //     numArray = +prompt("indica numero entre 1 y 60")
            // }while(numArray < 1 || numArray > 60 || isNaN(numArray))
    
            arrayAleatori.push(numArray)
            if(numArray < 21){
                sumaPrimeros20 = sumaPrimeros20 + 1
                console.log(sumaPrimeros20)
            }else if (numArray > 20 && numArray < 41 ){
                sumaSegundos20 = sumaSegundos20 + 1
                console.log(sumaSegundos20)
            }else{
                sumaTerceros20 = sumaTerceros20 + 1
                console.log(sumaTerceros20)
            }
    
            porcentajePrimeros20 = porcentaje(sumaPrimeros20, cantidadNumeros)
            porcentajeSegundos20 = porcentaje(sumaSegundos20, cantidadNumeros)
            porcentajeTerceros20 = porcentaje(sumaTerceros20, cantidadNumeros)

            result.innerHTML = `Grandaria de l'array : ${cantidadNumeros} <br>
                                % numeros entre 1  y 20: ${sumaPrimeros20} = ${porcentajePrimeros20} % <br>
                                % numeros entre 21 y 40 : ${sumaSegundos20} = ${porcentajeSegundos20} %<br>
                                % numeros entre 41 y 60 : ${sumaTerceros20} = ${porcentajeTerceros20} %<br>`
            
    
        }
    
        console.log(arrayAleatori)

    }




}

function porcentaje(sumanumeros, cantidadNumeros){

    let porcentaje = parseFloat((sumanumeros * 100 )/ cantidadNumeros)

    return porcentaje


}