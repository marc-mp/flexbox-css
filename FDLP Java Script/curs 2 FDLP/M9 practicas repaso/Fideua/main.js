function ferFideua(){
        
    let preukgFideus = prompt("indica preu Kg fideus")
    let preukgGambas = prompt("indica preu Kg gambas")
    let preukgCalamars = prompt("indica preu Kg calamars")
    let numAmics = prompt ("indica numero amics")
    let result = document.getElementById("result")
    

    quantitatsIngredient(numAmics)

    let preuPersona = calcularPreuPersona(preukgFideus, preukgGambas, preukgCalamars)

    let preuTotal = parseFloat(numAmics * preuPersona)

    result.innerHTML += `preu per persona es ${parseFloat(preuPersona.toFixed(2))} euros <br>`
    result.innerHTML += `preu total es: ${preuTotal.toFixed(2)} euros <br>`

}

function quantitatsIngredient(numAmics){

    let fideusPersonaGr = parseFloat(500 / 4)
    let gambasPersonaGr = parseFloat(400 / 4)
    let calamarsPersonaGr = parseFloat(200 / 4)

    let fideusGrTotal = parseFloat(fideusPersonaGr * numAmics)
    let gambasTotalGr = parseFloat(gambasPersonaGr * numAmics)
    let calamarsTotalGr = parseFloat(calamarsPersonaGr * numAmics)

    result.innerHTML +=  `Quantitats necessaries :  ${fideusGrTotal} gr fideus, ${gambasTotalGr} gr gambas, ${calamarsTotalGr} gr calamars <br>` 

}

function calcularPreuPersona(preukgFideus, preukgGambas, preukgCalamars){

    let fideusPersonaKg = 0.5
    let gambasPersonaKg = 0.4
    let calamarsPersonaKg =0.2

    let preuPersonaFideus = parseFloat(preukgFideus * fideusPersonaKg)
    let preuPersonaGambas = parseFloat(preukgGambas * gambasPersonaKg)
    let preuPersonaCalamars = parseFloat(preukgCalamars * calamarsPersonaKg)

    let preuPersona = parseFloat(preuPersonaFideus + preuPersonaGambas + preuPersonaCalamars)

    return preuPersona


}







