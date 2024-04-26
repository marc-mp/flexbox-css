
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
    let numVol = document.getElementById("numVol").value
    let distanciaKM = parseInt(document.getElementById("distanciaKm").value)
    let companyia = document.getElementById("companyia").value
    let numPassatgers = parseInt(document.getElementById("numPassatgers").value)
    let numMotors = parseInt(document.getElementById("numMotors").value)
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
        cleanInnputs()
        cerrarFormVol2()
        cerrarFormVol1()
        cerrarbtnCrear()  
    } 
}
   



function veureVol(){
    let numVol = document.getElementById("numVol").value
    console.log(vols)
    //let index = vols.findIndex(vol => vol.numVol === numVol)
    let index = buscar(numVol)
    console.log(index)
    let volActual = vols[index]
    if(index == -1){
        alert("Aquest numero de vol NO existeix a l'aplicació")
    }else{
        result.innerHTML = `${volActual} ${volActual.calcularPedjadaCO2()}`
        cleanInnputs()
        cerrarFormVol1()
        cerrarFormVol2()
        cerrarbtnMostrar()
    } 
}


function eliminarVol(){
    let numVol = document.getElementById("numVol").value
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
            cleanInnputs()
            cerrarFormVol1()
            cerrarFormVol2()
            cerrarbtnBorrar()
        }   
    } 
}


function modificarVol(){
    let numVol = document.getElementById("numVol").value
    console.table(vols)
    //let index = vols.findIndex(vol => vol.numVol === numVol)
    let index = buscar(numVol)
    console.log(index)
    let volActual = vols[index]
    if(index == -1){
        alert("Aquest numero de vol NO existeix a l'aplicació")
    }else{
        document.getElementById("numVol").value = volActual.numVol
        document.getElementById("numVol").disabled = true
        document.getElementById("distanciaKm").value = volActual.distanciaKM
        document.getElementById("companyia").value = volActual.companyia
        document.getElementById("numPassatgers").value = volActual.numPassatgers
        document.getElementById("numMotors").value = volActual.numMotors
        cerrarbtnModificar()
        mostrarFormVol1()
        mostrarFormVol2()
        mostrarbtnActualitzar()
    }
}


function actualitzarVol(){
    let numVol = document.getElementById("numVol").value
    console.table(vols)
    //let index = vols.findIndex(vol => vol.numVol === numVol)
    let index = buscar(numVol)
    console.log(index)
    let volActual = vols[index]
    let distanciaKM = parseInt(document.getElementById("distanciaKm").value)
    let companyia = document.getElementById("companyia").value
    let numPassatgers = parseInt(document.getElementById("numPassatgers").value)
    let numMotors = parseInt(document.getElementById("numMotors").value)
    volActual.distanciaKM = distanciaKM
    volActual.companyia = companyia
    volActual.numPassatgers = numPassatgers
    volActual.numMotors = numMotors
    console.log(vols)
    alert(`vol modificat i actualitzat`)
    console.table(vols)
    document.getElementById("numVol").disabled = false
    result.innerHTML = `${volActual} ${volActual.calcularPedjadaCO2()}`
    cleanInnputs()
    cerrarFormVol1()
    cerrarFormVol2()
    cerrarbtnActualitzar()

}
