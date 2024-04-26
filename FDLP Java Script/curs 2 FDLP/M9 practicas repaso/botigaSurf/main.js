function iniciarPrograma(){

    let opcio = 0

    while(opcio !=4){

        do{
        opcio = +prompt(`Indica opcio:
                            1. Calcular material taula
                            2. Forescast
                            3.Calcular cost reserva
                            4. sortir programa `)
        }while(opcio < 1 || opcio > 4 || isNaN(opcio))
    

        switch (opcio){

            case 1 : 
                let experiencia = confirm("tens experiencia")
                console.log(experiencia)
                calcularMaterialTaula(experiencia)

            break;

            case 2 :
                let alturaOnada = 0
                do{
                    alturaOnada = +prompt("indica altura")
                }while(alturaOnada < 1 || isNaN(alturaOnada))
                calcularForecast(alturaOnada)
            break;

            case 3 :
                let minutsReserva = 0
                do{
                    minutsReserva = +prompt("inidca minuts reserva")
                }while(minutsReserva < 1 || isNaN(minutsReserva))

                let tipusTaula = 0
                do{
                    tipusTaula = +prompt(`indica tipus taula que vols reservar:
                                            1. taula espuma
                                            2. taula Fibra`)                       
                }while(tipusTaula < 1 || tipusTaula > 2 || isNaN(tipusTaula))
                console.log(tipusTaula)

                let costReserva = calcularCostReserva(minutsReserva, tipusTaula)
                alert(`el cost de la reserva es ${costReserva.toFixed(2)}`)

            break;

            case 4 :
                alert("Adeu! sortim del programa")
                return
            break;

        }

    }

}



function calcularMaterialTaula(experiencia){

    if(experiencia == true){
        alert("taula fibra")
    }else{
        alert("taula Espuma")
    }

}

function calcularForecast(alturaOnada){

    if(alturaOnada > 2){
        alert("Onades grans")
    }else{
        alert("onades petites")
    }

}

function calcularCostReserva(minutsReserva, tipusTaula){

    let costTaulaespumaMinut = parseFloat(20 / 60)
    let costTaulaFibraMinut = parseFloat(35 / 60)
    let costReserva = 0

    if (tipusTaula == 1){
        costReserva = parseFloat(costTaulaespumaMinut * minutsReserva)
    }else{
        costReserva = parseFloat(costTaulaFibraMinut * minutsReserva)
    }

    return costReserva

}