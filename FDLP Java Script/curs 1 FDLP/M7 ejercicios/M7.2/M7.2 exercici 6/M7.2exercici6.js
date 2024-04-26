function ep(numusuari) {
    let primo = true;
    let i = 2;
    while (primo && i < numusuari) {
        if (numusuari % i == 0) {
            primo = false;
        }
        i++;
    }
    return primo
}

function numprimer(){

    let numusuari = parseInt(document.getElementById("numusuari").value)
    let result = document.getElementById("result")
    let primo = false;
    
    if (numusuari > 1) {
        primo = ep(numusuari);
    }
    if (primo == true){
        result.innerHTML = (`Exacte, el número ${numusuari} és primer!`); 
    }else{
        result.innerHTML = (`El número ${numusuari} NO és primer!`)
    }
}
    

