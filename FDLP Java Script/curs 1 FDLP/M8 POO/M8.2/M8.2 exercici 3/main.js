import { cliente } from "./Cliente.js";
import { cuenta } from "./cuenta.js";

const clientes = []

document.getElementById("btnCliente").addEventListener("click", crearCliente)
document.getElementById("btnEliminar").addEventListener("click", eliminarCliente)
document.getElementById("btnCuenta").addEventListener("click", crearCuenta)
document.getElementById("btnIngresar").addEventListener("click", ingresarDinero)
document.getElementById("btnRetirar").addEventListener("click", retirarDinero)


function cleanInnputs(){
    let inputs = document.querySelectorAll('input:not([type="button"])')
    inputs.forEach((input) => input.value = "" )
}


function crearCliente(){

    let dni = document.getElementById("dni").value
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    const CLIENTE = new cliente(dni, nombre, apellido)
    const index = clientes.findIndex((cliente) => cliente.dni === dni) 
    //console.log(index)
    if (index == -1){
        clientes.push(CLIENTE)
        console.log(clientes)
        alert(`Cliente con dni ${dni} creado`)
    }else{ 
        alert("Este cliente ya existe en base de datos")
    }
        
    cleanInnputs()
}

function eliminarCliente(){

    let dni = document.getElementById("dniEliminar").value
    const index = clientes.findIndex((cliente) => cliente.dni === dni)
    if (index != -1){
        let confimacion = confirm(`esta seguro que desea eliminar al cliente con dni ${dni}` )
        if (confimacion){
            clientes.splice(index,1)
            console.log(clientes)
            alert("Cliente eliminado")
        }
    }else{ 
        alert("Cliente no existe en base de datos")
    }

    cleanInnputs()
}



function crearCuenta(){
    let dni = document.getElementById("dniCuenta").value
    const index = clientes.findIndex((cliente) => cliente.dni === dni)
    let clienteActual = clientes[index]
    if (index != -1){
        let confimacion = confirm(`Quieres crear una cuenta al cliente con dni ${dni}`)
        if (confimacion){
            let numCuenta = `FDLPJS-${dni}-`+ Math.ceil((Math.random() * 1000))  // numcuenta lo divido en: texto(como identificacion banco) + dni(sirve como validacion para que ningun numCuenta sea igual) + numero random 1000 (parte variable del numero)
            const CUENTA = new cuenta(numCuenta)
            clienteActual.nuevacuentausuario(CUENTA)
            alert(`numero de cuenta ${numCuenta} creada`)
            console.log(clienteActual)
        }
    }else{ 
        alert("Cliente no existe en base de datos")
    }  
    
    cleanInnputs()
}



function ingresarDinero(){

    let dni = document.getElementById("dniIngresar").value
    let numCuenta = document.getElementById("cuentaIngresar").value
    let importe = parseFloat(document.getElementById("importeIngresar").value) 
    const index = clientes.findIndex((cliente) => cliente.dni === dni) // busqueda cliente por dni
    let clienteActual = clientes[index]
    if (index == -1){ // validamos si dni existe 
        alert("Este cliente no existe en base de datos")
    }
    let cuentaArray = clienteActual.cuentas 
    let CuentaActual = cuentaArray.find(cuenta => cuenta.numCuenta === numCuenta) // busqueda cuenta
    if (CuentaActual != undefined){ // validamos si la cuenta existe
        let confimacion = confirm(`Quieres ingresar ${importe} euros al cliente con dni ${dni}`) //solicitamos una confirmación antes de ingresar dinero
        if (confimacion){
            CuentaActual.ingresarDinero(importe) //usamos metodo para ingresar importe indicado por usuario
            alert(`Se han ingresado ${importe} euros en la cuenta ${numCuenta}`)
        }
    }else{ 
        alert("Cuenta no existe en base de datos")
    }     
    console.log(CuentaActual)
    cleanInnputs()
}



function retirarDinero(){

    let dni = document.getElementById("dniRetirar").value
    let numCuenta = document.getElementById("cuentaRetirar").value
    let importe = parseFloat(document.getElementById("importeRetirar").value) 
    const index = clientes.findIndex((cliente) => cliente.dni === dni) // busqueda cliente por dni
    let clienteActual = clientes[index]
    if (index == -1){ // validamos si dni existe 
        alert("Este cliente no existe en base de datos")
    }
    let cuentaArray = clienteActual.cuentas 
    let CuentaActual = cuentaArray.find(cuenta => cuenta.numCuenta === numCuenta) // busqueda cuenta
    if (CuentaActual != undefined){ // validamos si la cuenta existe
        let confimacion = confirm(`Quieres retirar ${importe} euros`) //solicitamos una confirmación antes de retirar dinero
        if (confimacion){
            CuentaActual.retirarDinero(importe) // usamos metodo para retirar importe indicado por usuario
            alert(`Se han retirado ${importe} euros en la cuenta ${numCuenta}`)
        }
    }else{ 
        alert("Cuenta no existe en base de datos")
    }     
    console.log(CuentaActual)
    cleanInnputs()
}
