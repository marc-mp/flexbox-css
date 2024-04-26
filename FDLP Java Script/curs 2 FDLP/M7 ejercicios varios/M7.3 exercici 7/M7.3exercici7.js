function calcularMaterialTaula(experiencia){
    if(experiencia == true){
        alert("taula de fibra")
    }else{
        alert("taula d'espuma")
    }
}

function calcularForecast(alturaOnada){
    if(alturaOnada > 2 ){
        alert("onades grans")
    }else if(alturaOnada <= 2){
        alert("onades petites")
    }else{
        alert("introduce numero valido")
    }
}


function calcularCostReserva(minutsReserva, tipusTaula){

    let costMinutTauEspuma = parseFloat(20 / 60)
    let costMinutTauFibra = parseFloat(35 / 60)
    let cost = 0

    switch(tipusTaula){

        case 1 : 
            cost = parseFloat(minutsReserva * costMinutTauEspuma)
            alert(`El cost de la reserva es ${cost.toFixed(2)} euros`)
        break;

        case 2 :
            cost = parseFloat(minutsReserva * costMinutTauFibra)
            alert(`El cost de la reserva es ${cost.toFixed(2)} euros`)
        break;
    }                                
}


function IniciarPrograma(){

    let opcion = 0
    let experiencia = ""
    let alturaOnada = 0
    let minutsReserva = 0
    let tipusTaula = ""


    do{

        opcion = +prompt(`Selecciona la opcion deseada :
                                1. Calcular material de la tabla
                                2. Imprimir forecast 
                                3. Cost per reserva 
                                4. Sortir del programa`)

        switch(opcion){

            case 1 :
                experiencia = confirm("tens experiencia ?")
                calcularMaterialTaula(experiencia)
            break;
            case 2 : 
                alturaOnada = +prompt("Indica alçada en metres de les onades")
                calcularForecast(alturaOnada)
            break;

            case 3 :
                do{
                    minutsReserva = +prompt("Indica minuts de la reserva")   
                }while(minutsReserva < 1 || isNaN(minutsReserva))

                do{
                    tipusTaula = +prompt(`Selecciona tipus de taula  
                        1. Taula espuma 
                        2. Taula fibra `)
                }while( tipusTaula < 1 || tipusTaula > 2 || isNaN(tipusTaula))

                calcularCostReserva(minutsReserva, tipusTaula)
            break

            case 4 :
                alert("programa finalitzat")
            break

            default : 
                alert("debe seleccionar opcion valida")
            break
        }
        
    }while(opcion != 4)
}
