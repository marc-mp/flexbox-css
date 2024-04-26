const avions = []

let result = document.getElementById("result")


function crearAvio(){
    let opcion
    do{
        opcion = +prompt (`Quin tipus d'avio vols crear:
                            1. Avio comercial 
                            2. avioneta
                            3. Jet Privat `)
    }while (opcion < 1 || opcion > 3 || isNaN(opcion))

    let numAvio = +prompt("indica numero avio", 1)
    let marca = prompt("indica marca", "Airbus")
    let model = prompt ("indica model", "B21")
    let carregaKg = +prompt("indica carrega en KG", 2000)
    let longitudMetres = +prompt("longitud en metres", 40)

    let index

    switch(opcion){

        case 1 :
            const AVIOCOMERCIAL = new AvioComercial (numAvio, marca, model, carregaKg, longitudMetres,)
            index = avions.findIndex(avio => avio.numAvio === numAvio)
            if(index != -1){
                alert("Avio ja existeix al sistema")
            }else{
                avions.push(AVIOCOMERCIAL)
                console.log(avions)
                alert("avio creat")
                result.innerHTML = `${AVIOCOMERCIAL}`

            }

        break;

        case 2 :
            let numHelix = +prompt("indica numero Helix", 2)
            const AVIONETA = new Avioneta (numAvio, marca, model, carregaKg, longitudMetres, numHelix)
            index = avions.findIndex(avio => avio.numAvio === numAvio)
            if(index != -1){
                alert("Avio ja existeix al sistema")
            }else{
                avions.push(AVIONETA)
                console.log(avions)
                alert("avio creat")
                result.innerHTML = `${AVIONETA}`

            }
        break;

        case 3 :
            const JETPRIVAT = new JetPrivat (numAvio, marca, model, carregaKg, longitudMetres,)
            index = avions.findIndex(avio => avio.numAvio === numAvio)
            if(index != -1){
                alert("Avio ja existeix al sistema")
            }else{
                avions.push(JETPRIVAT)
                console.log(avions)
                alert("Avio creat")
                result.innerHTML = `${JETPRIVAT}`
            }
        break;

    }
}



function eliminarAvio(){
    let numAvio = +prompt("indica numero avio", 1 )
    let index = avions.findIndex(avio => avio.numAvio === numAvio)
    if(index == -1){
        alert("Avio NO existeix al sistema")
    }else{
        confirm(`segur vols eliminar el avio numero ${numAvio}`)
        if(confirm){
            avions.splice(index, 1)
            console.log(avions)
            alert("Avio eliminat")
        }
    }
}


function mostrarAvio(){
    let numAvio = +prompt("indica numero avio", 1 )
    let index = avions.findIndex(avio => avio.numAvio === numAvio)
    if(index == -1){
        alert("Avio NO existeix al sistema")
    }else{
        avioActual = avions[index]
        console.log(avions)
        if(avioActual instanceof AvioComercial){
            result.innerHTML = `Tipus d'avio : Avio Comercial: <br> ${avioActual} ${avioActual.calcularCostMenjar()}`
        console.log(avioActual)
        }else if(avioActual instanceof Avioneta){
            result.innerHTML = `Tipus d'avio : Avioneta: <br> ${avioActual}`

        }else if(avioActual instanceof JetPrivat){
            result.innerHTML = `Tipus d'avio : Jet Privat: <br> ${avioActual} ${avioActual.calcularCostReserva()}`
        }
    }
}



