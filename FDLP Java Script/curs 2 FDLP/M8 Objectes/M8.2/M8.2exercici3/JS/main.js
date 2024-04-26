function mostrarForm() {
    div = document.getElementById('form');
    div.style.display = '';
}

function cerrarForm() {
    div = document.getElementById('form');
    div.style.display = 'none';
}


function mostrarFormDni() {
    div = document.getElementById('formDni');
    div.style.display = '';
}

function cerrarFormDni() {
    div = document.getElementById('formDni');
    div.style.display = 'none';
}


function mostrarFormVol1() {
    div = document.getElementById('formVol1');
    div.style.display = '';
}

function cerrarFormVol1() {
    div = document.getElementById('formVol1');
    div.style.display = 'none';
}


function mostrarFormVol2() {
    div = document.getElementById('formVol2');
    div.style.display = '';
}

function cerrarFormVol2() {
    div = document.getElementById('formVol2');
    div.style.display = 'none';
}


function mostrarbtnCrearClient() {
    div = document.getElementById('btnCrearClient');
    div.style.display = '';
}

function cerrarbtnCrearClient() {
    div = document.getElementById('btnCrearClient');
    div.style.display = 'none';
}

function mostrarbtnBorrarClient() {
    div = document.getElementById('btnBorrarClient');
    div.style.display = '';
}

function cerrarbtnBorrarClient() {
    div = document.getElementById('btnBorrarClient');
    div.style.display = 'none';
}

function mostrarbtnCrearVol() {
    div = document.getElementById('btnCrearVol');
    div.style.display = '';
}

function cerrarbtnCrearVol() {
    div = document.getElementById('btnCrearVol');
    div.style.display = 'none';
}


function mostrarbtnMitjanaEdadClientsMes18() {
    div = document.getElementById('btnMitjanaEdadClientsMes18');
    div.style.display = '';
}

function cerrarbtnMitjanaEdadClientsMes18() {
    div = document.getElementById('btnMitjanaEdadClientsMes18');
    div.style.display = 'none';
}

function mostrarbtnPedjadaCarboniClient() {
    div = document.getElementById('btnPedjadaCarboniClient');
    div.style.display = '';
}

function cerrarbtnPedjadaCarboniClient() {
    div = document.getElementById('btnPedjadaCarboniClient');
    div.style.display = 'none';
}

function mostrarbtnbtnMitjanaPedjadaCarboniClients() {
    div = document.getElementById('btnMitjanaPedjadaCarboniClients');
    div.style.display = '';
}

function cerrarbtnbtnMitjanaPedjadaCarboniClients() {
    div = document.getElementById('btnMitjanaPedjadaCarboniClients');
    div.style.display = 'none';
}




// funcion que  muestra formularios y botones necesarios según opcion seleccionada por el usuario (usamos switch )

function mostrarSeleccion(){
    let opcion = document.getElementById("opcion").value
    switch(opcion){
        case "crearClient" : 
            result.innerHTML = " "
            mostrarFormDni()
            mostrarForm()
            cerrarFormVol1()
            cerrarFormVol2()
            mostrarbtnCrearClient()
            cerrarbtnBorrarClient()
            cerrarbtnCrearVol()
            cerrarbtnbtnMitjanaPedjadaCarboniClients() 
            cerrarbtnPedjadaCarboniClient()
            cerrarbtnMitjanaEdadClientsMes18()

        break;

        case "eliminarClient":
            result.innerHTML = " "
            mostrarFormDni()
            cerrarForm()
            cerrarFormVol1()
            cerrarFormVol2()
            mostrarbtnBorrarClient()
            cerrarbtnCrearClient()
            cerrarbtnCrearVol()
            cerrarbtnbtnMitjanaPedjadaCarboniClients() 
            cerrarbtnPedjadaCarboniClient()
            cerrarbtnMitjanaEdadClientsMes18()
    
        break;


        case "crearVolClient" :
            result.innerHTML = " "
            mostrarFormDni()
            mostrarFormVol1()
            mostrarFormVol2()
            cerrarForm()
            mostrarbtnCrearVol()
            cerrarbtnCrearClient()
            cerrarbtnBorrarClient()
            cerrarbtnbtnMitjanaPedjadaCarboniClients() 
            cerrarbtnPedjadaCarboniClient()
            cerrarbtnMitjanaEdadClientsMes18()
            
        break;

        case "mitjanaClientsMes18" :
            result.innerHTML = " "
            mostrarbtnMitjanaEdadClientsMes18()
            cerrarFormDni()
            cerrarForm()
            cerrarFormVol1()
            cerrarFormVol2()
            cerrarbtnBorrarClient()
            cerrarbtnCrearClient()
            cerrarbtnCrearVol()
            cerrarbtnbtnMitjanaPedjadaCarboniClients() 
            cerrarbtnPedjadaCarboniClient()

        break;

        case "pedjadaCarboniClient" :
            result.innerHTML = " "
            mostrarFormDni()
            mostrarbtnPedjadaCarboniClient()
            cerrarForm()
            cerrarFormVol1()
            cerrarFormVol2()
            cerrarbtnBorrarClient()
            cerrarbtnCrearClient()
            cerrarbtnCrearVol()
            cerrarbtnMitjanaEdadClientsMes18()
            cerrarbtnbtnMitjanaPedjadaCarboniClients() 
            
        break;

        case "mitjanaPedjadaCarboniClients" :
            result.innerHTML = " "
            mostrarbtnbtnMitjanaPedjadaCarboniClients()
            cerrarFormDni()
            cerrarForm()
            cerrarFormVol1()
            cerrarFormVol2()
            cerrarbtnBorrarClient()
            cerrarbtnCrearClient()
            cerrarbtnCrearVol()
            cerrarbtnMitjanaEdadClientsMes18()
            cerrarbtnPedjadaCarboniClient()

        break;



    }

}

// funcion para borrar inputs introducidos al finalizar
function cleanInnputs(){  
    let inputs = document.querySelectorAll('input:not([type="button"])')
    inputs.forEach((input) => input.value = "" )
}

// llamamos a las funciones cerrar para que no se muestre nada de inicio hasta que usuario haga selección. 
cerrarFormDni()
cerrarForm()
cerrarFormVol2()
cerrarFormVol1()
cerrarbtnCrearClient()
cerrarbtnBorrarClient()
cerrarbtnCrearVol()
cerrarbtnbtnMitjanaPedjadaCarboniClients()
cerrarbtnPedjadaCarboniClient()
cerrarbtnMitjanaEdadClientsMes18()

//variable global porque lo usamos tanto en el crud como en el main.
let result = document.getElementById("result")
console.table(clients)





