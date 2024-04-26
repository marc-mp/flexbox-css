
function crearClient(){
    let dni = parseInt(document.getElementById("dni").value)
    let nom = document.getElementById("nom").value
    let cognom = document.getElementById("cognom").value
    let nacionalitat = document.getElementById("nacionalitat").value
    let edat = parseInt(document.getElementById("edat").value)    
    const CLIENT = new Client(dni, nom, cognom, nacionalitat, edat)
    let index = clients.findIndex(client => client.dni === dni)
    console.log(index)
    if(index == -1){
        CLIENT.esMajorEdat()
        clients.push(CLIENT)
        alert("Client creat")
        console.log(clients)
        result.innerHTML = `${CLIENT}`
    }else{
        alert("Aquest client ja existeix a la base de dades")
    }
    cleanInnputs()
    cerrarFormDni()
    cerrarForm()
    cerrarbtnCrearClient()
}

function borrarClient(){
    let dni = parseInt(document.getElementById("dni").value)
    let index = clients.findIndex(client => client.dni === dni)
    console.log(index)
    let clientActual = clients[index]
    if(index == -1){
        alert("Aquest client no existeix a l'aplicaió")
    }else{
        confirm(`Segur que vols eliminar al client:
                    ${clientActual}`)
        if(confirm){
            clients.splice(index,1)
            alert("client eliminat")
            console.log(clients)
        }   
    }
    cleanInnputs()
    cerrarFormDni()
    cerrarbtnBorrarClient()
}



function crearVolClient(){
    let dni = parseInt(document.getElementById("dni").value)
    let numVol = document.getElementById("numVol").value
    let distanciaKM = parseInt(document.getElementById("distanciaKm").value)
    let companyia = document.getElementById("companyia").value
    let numPassatgers = parseInt(document.getElementById("numPassatgers").value)
    let numMotors = parseInt(document.getElementById("numMotors").value)
    const VOL = new Vol(numVol, distanciaKM, companyia, numPassatgers, numMotors)
    let index = clients.findIndex(client => client.dni === dni) // comprovamos si el cliente existe
    console.log(index)
    let clientActual = clients[index]
    if(index == -1){
        alert("Aquest client no existeix a l'aplicaió")
    }else{
        let indexVol = clientActual.vols.findIndex(vol => vol.numVol === numVol)
        console.log(indexVol)
        if(indexVol == -1){ 
            VOL.calcularPedjadaCO2()
            clientActual.agregarVol(VOL) // usamos metodo agregar vol para añadirlo al array de vols
            console.table(clientActual.vols)
            alert(`Vol creat satisfactoriament`)
            result.innerHTML = `${VOL}`
        }else{
            alert("Aquest numero de vol ja existeix en aquest client")
        }
        cleanInnputs()
        cerrarFormDni()
        cerrarFormVol2()
        cerrarFormVol1()
        cerrarbtnCrearVol()
    } 
}


function mitjaEdadClientsMes18(){   // mitjanaEdadMajors18 = suma edat clients  majors 18  / numero de Clients Majors18
    const edats = clients.map(client => client.edat) // metodo map devuelve array con solo edades
    console.log(edats)
    const majorsEdat = edats.filter(edat => edat >= 18) //metodo filter devuelve array con edades mayores 18
    console.log(majorsEdat)
    let sumaEdatsMes18 = 0
    for( let i = 0; i < majorsEdat.length; i++){  // sumamos las edades del nuevo array "majorsEdat" iterando en cada elemento con un bucle for
        sumaEdatsMes18 += majorsEdat[i]  
    }
    console.log(sumaEdatsMes18)
    let mitjanaEdadMajors18 = parseFloat(sumaEdatsMes18 / majorsEdat.length)
    result.innerHTML = ` La mitjana d'edat dels clients majors d'edat es : ${mitjanaEdadMajors18.toFixed(1)}`
}


function pedjadaCarboniClient(){
    let dni = parseInt(document.getElementById("dni"). value)
    let index = clients.findIndex(client => client.dni === dni)
    console.log(index)
    if (index == -1){
        alert("Aquest client no existeix a la base de dades")
    }else{
        let clientActual = clients[index]
        let sumaCO2 = 0
        for( let i= 0; i < clientActual.vols.length; i ++){
            let CO2 = parseFloat(clientActual.vols[i].calcularPedjadaCO2Client()) // pedjada CO2 del client a cada vol 
            sumaCO2 += CO2 // suma total Co2 del client  
        }
        console.log(sumaCO2)
        result.innerHTML = `La pedjada total de CO2 d'aquest client es ${sumaCO2.toFixed(5)}` 
    }

    cerrarbtnPedjadaCarboniClient()
}


function mitjanaPedjadaCarboniClients(){

    let sumaCO2 = 0
    for( let i= 0; i < clients.length; i ++){
        for (let j = 0 ; j < clients[i].vols.length; j++){
            let CO2 = parseFloat(clients[i].vols[j].calcularPedjadaCO2Client()) //  pedjada CO2 del client a cada vol 
            sumaCO2 += CO2  // suma total Co2 del client
        }
    }
    console.table(clients)
    console.log(sumaCO2)
    let mitjana = parseFloat(sumaCO2 / clients.length)  // mitjana = todas las pedjadasCO2passatger / total clientes
    console.log(mitjana)
    result.innerHTML = ` La petjada de carboni mitja de tots els clients es: ${mitjana.toFixed(5)}`
    cerrarbtnbtnMitjanaPedjadaCarboniClients() 
}