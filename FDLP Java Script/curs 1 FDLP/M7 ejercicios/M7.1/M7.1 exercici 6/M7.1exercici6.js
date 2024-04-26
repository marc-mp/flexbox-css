function multiplicar(){

    let numusuari = parseInt(document.getElementById("numusuari").value)
    let result = document.getElementById("result")
    const tablamultiplicar = []
    let resultado = 0 
    let texttabla 

    if (numusuari < 1 || numusuari > 10){   // validacion que indica ejercicio pero sin esta validacion tb mostraria talas de numero mayores

        result.innerHTML = "Debe introducir numero del 1 al 10"
        return
    }
    
    for(let i = 0 ; i <= 10; i++){

        resultado = numusuari * i
        texttabla = `${numusuari} x ${i} = ${resultado} `
        tablamultiplicar.push(texttabla)      
    }    

    result.innerHTML = tablamultiplicar.join("<br>")

}