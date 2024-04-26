
function buscar(dni){  // metodo findIndex
    let encontrado = false;
    let index = -1;
    let i = 0;
    let vueltas = clients.length
    while(i < vueltas && !encontrado){
    
        if (dni == clients[i].dni){
            index = i;
            encontrado = true;
        }
     i++
    }
    return index;
}
    


function crearClient(){
    let dni = document.getElementById("dni").value
    let edat = parseInt(document.getElementById("edat").value)
    let nacionalitat = document.getElementById("nacionalitat").value
    let numVols = parseInt(document.getElementById("numVols").value)
    const CLIENT = new Client(dni, edat, nacionalitat, numVols)
    let index = buscar(dni)
    //let index = clients.findIndex(client => client.dni === dni)
    console.log(index)
    if(index == -1){
        clients.push(CLIENT)
        alert("Client creat")
        CLIENT.calcularPedajadaCarboni()
        console.table(clients)
        result.innerHTML = `${CLIENT} ${CLIENT.calcularPedajadaCarboni()}`
    }else{
        alert("Aquest client ja existeix a la base de dades")
    }
    cleanInnputs()
    cerrarFormDni()
    cerrarForm()
    cerrarbtnCrear()
}

function veureClient(){
    let dni = document.getElementById("dni").value
    let index = buscar(dni)
    console.log(index)
    console.table(clients)
    if(index == -1){
        alert("Aquest dni no existeix a la base de dades")

    }else{
        let clientActual = clients[index]
        clientActual.calcularPedajadaCarboni()
        result.innerHTML = `${clientActual} ` 
       
    }
    cleanInnputs()
    cerrarFormDni()
    cerrarForm()
    cerrarbtnMostrar()

}

function borrarClient(){
    let dni = document.getElementById("dni").value
    //let index = clients.findIndex(client => client.dni === dni)
    let index = buscar(dni)
    console.table(clients)
    if(index == -1){
        alert("Aquest dni no existeix en base de dades")
    }else{
        let clientActual = clients[index]
        confirm(`Segur vols eliminar al client ${clientActual}`)
        if(confirm){
            clients.splice(index,1)
            alert(`client eliminat`)
            console.table(clients)
        }
    }
    cleanInnputs()
    cerrarFormDni()
    cerrarForm()
    cerrarbtnBorrar()
}

function modificarClient(){
    let dni = document.getElementById("dni").value
    mostrarForm() 
    //let index = clients.findIndex(client => client.dni === dni)
    let index = buscar(dni)
    if(index == -1){
        alert("Aquest dni no existeix en base de dades")
    }else{    
        let clientActual = clients[index]
        document.getElementById("dni").value = clientActual.dni
        document.getElementById("dni").disabled = true 
        document.getElementById("edat").value = clientActual.edat
        document.getElementById("nacionalitat").value = clientActual.nacionalitat
        document.getElementById("numVols").value = clientActual.numVols
        cerrarbtnModificar()
        mostrarbtnActualitzar()
    }

}

function actualitzarClient(){
    let dni = document.getElementById("dni").value
    //const index = clients.findIndex(client => client.dni === dni)
    let index = buscar(dni)
    console.table(clients)
    let clientActual = clients[index]
    let edat = parseInt(document.getElementById("edat").value)
    let nacionalitat = document.getElementById("nacionalitat").value
    let numVols = parseInt(document.getElementById("numVols").value)
    clientActual.edat = edat
    clientActual.nacionalitat = nacionalitat
    clientActual.numVols = numVols
    document.getElementById('dni').disabled = false 
    console.table(clients)
    alert(`client modificat ${clientActual}`)
    cleanInnputs()
    cerrarFormDni()
    cerrarForm()
    cerrarbtnActualitzar()
}

