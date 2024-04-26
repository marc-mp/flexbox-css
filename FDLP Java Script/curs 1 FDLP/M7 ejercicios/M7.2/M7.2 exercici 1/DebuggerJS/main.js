
// El programa indica si el numero introducido es primo(true) o no (false).

function ip() {  // funcion pide numero a usuario por prompt y si el numero introducido es mayor a 1, llama a la funcion ep(n)
    var p = false;
    var n = prompt("Escoge un número: "); //se pide a usuario por prompt que indique numero.
    if (n > 1) { 
        p = ep(n);
    }
    alert(p); //  se muestra false o true, segun si el numero introducido es primo o no
}


function ep(n) {    // funcion para saber si "n"es numero primo y retorna bolleano (true or false).
    let p = true; 
    let i = 2;
    while (p && i < n) { //mientras p sea true y sea menor a n(numero del usuario), se geenrarar bucle 
        if (n % i == 0) { //si en algun incremento de i el el resto de n%1 diera 0, indicaria que el numero es divisible con algun otro numero que no sea ni 1 ni el mismo, por lo que no seria un numero primo y saldria del bucle indicando false
            p = false;
        }
        i++; 
    }
    return p;
}
