let result = document.getElementById("result")

function buscar(numVol){  // metodo findIndex
    let encontrado = false;
    let index = -1;
    let i = 0;
    let vueltas = vols.length
    while(i < vueltas && !encontrado){
    
        if (numVol == vols[i].numVol){
            index = i;
            encontrado = true;
        }
     i++
    }
    return index;
}


function crearVol(){
    let numVol = prompt("indica num vol")
    let distanciaKM = +prompt("indica distancia KM")
    let companyia = prompt("indica companyia")
    let numPassatgers = +prompt("indica num passatgers")
    let numMotors = +prompt("indica num motors")
    const VOL = new Vol(numVol, distanciaKM, companyia, numPassatgers, numMotors)
    console.log(vols)
    //let index = vols.findIndex(vol => vol.numVol === numVol)
    let index = buscar(numVol)
    console.log(index)
    if(index !=-1){
        alert("Aquest numero de vol ja existeix a l'aplicació")
    }else{
        vols.push(VOL)
        console.table(vols)
        alert(`Vol creat satisfactoriament`)
        result.innerHTML = `${VOL} ${VOL.calcularPedjadaCO2()}`
    } 
}
   



function veureVol(){
    let numVol = prompt("indica num vol")
    console.log(vols)
    //let index = vols.findIndex(vol => vol.numVol === numVol)
    let index = buscar(numVol)
    console.log(index)
    let volActual = vols[index]
    if(index == -1){
        alert("Aquest numero de vol NO existeix a l'aplicació")
    }else{
        result.innerHTML = `${volActual} ${volActual.calcularPedjadaCO2()}`
    } 
}


function eliminarVol(){
    let numVol = prompt("indica num vol")
    console.table(vols)
    //let index = vols.findIndex(vol => vol.numVol === numVol)
    let index = buscar(numVol)
    console.log(index)
    let volActual = vols[index]
    if(index == -1){
        alert("Aquest numero de vol NO existeix a l'aplicació")
    }else{
        confirm(`Segur que vols eliminar el segurnt vol :
                    ${volActual}`)
        if(confirm){
            vols.splice(index, 1)
            console.log(vols)
            alert(`vol eliminat correctament`)
        }   
    } 
}


function modificarVol(){
    let numVol = prompt("indica num vol")
    console.table(vols)
    //let index = vols.findIndex(vol => vol.numVol === numVol)
    let index = buscar(numVol)
    console.log(index)
    let volActual = vols[index]
    if(index == -1){
        alert("Aquest numero de vol NO existeix a l'aplicació")
    }else{
        console.table(vols)
        // modificamos campos introduciendo nuevos valores
        let distanciaKM = +prompt("indica distancia KM", volActual.distanciaKM) 
        let companyia = prompt("indica companyia", volActual.companyia)
        let numPassatgers = +prompt("indica num passatgers", volActual.numPassatgers)
        let numMotors = +prompt("indica num motors", volActual.numMotors)
        alert(`vol modificat i actualitzat`)
        // remplazamos valores antiguos por los nuevos 
        volActual.distanciaKM = distanciaKM   
        volActual.companyia = companyia
        volActual.numPassatgers = numPassatgers
        volActual.numMotors = numMotors
        console.table(vols)
        result.innerHTML = `${volActual} ${volActual.calcularPedjadaCO2()}`
       
    }
}


// function actualitzarVol(){
//     let numVol = document.getElementById("numVol").value
//     console.table(vols)
//     //let index = vols.findIndex(vol => vol.numVol === numVol)
//     let index = buscar(numVol)
//     console.log(index)
//     let volActual = vols[index]
//     let distanciaKM = parseInt(document.getElementById("distanciaKm").value)
//     let companyia = document.getElementById("companyia").value
//     let numPassatgers = parseInt(document.getElementById("numPassatgers").value)
//     let numMotors = parseInt(document.getElementById("numMotors").value)
//     volActual.distanciaKM = distanciaKM
//     volActual.companyia = companyia
//     volActual.numPassatgers = numPassatgers
//     volActual.numMotors = numMotors
//     console.log(vols)
//     alert(`vol modificat i actualitzat`)
//     console.table(vols)
//     document.getElementById("numVol").disabled = false
//     result.innerHTML = `${volActual} ${volActual.calcularPedjadaCO2()}`
//     cleanInnputs()
//     cerrarFormVol1()
//     cerrarFormVol2()
//     cerrarbtnActualitzar()

// }
