function fideua(){

    let numAmics = parseInt(document.getElementById("numAmics").value)
    let preuKgFideus = parseFloat(document.getElementById("preufideus").value)
    let preuKgambes = parseFloat(document.getElementById("preugambes").value)
    let preuKgcalamars = parseFloat(document.getElementById("preucalamars").value)
    let result = document.getElementById("result")

    //qauntitat x persona
    let KgPersonfideus = parseFloat(0.5 / 4)
    let KgPersongambes = parseFloat(0.4 / 4)
    let KgPersoncalamars = parseFloat(0.2 / 4)

    // quantitas finals x ingredient
    let kgtotalfideus = parseFloat(KgPersonfideus * numAmics)
    let kgtotalgambes = parseFloat(KgPersongambes * numAmics)
    let kgtotalcalamars = parseFloat(KgPersoncalamars * numAmics)

    // preu final x ingredient
    let preufinalfideus = parseFloat(preuKgFideus * kgtotalfideus)
    let preufinalgambes = parseFloat(preuKgambes * kgtotalgambes)
    let preufinalcalamars = parseFloat(preuKgcalamars * kgtotalcalamars)

    //preu final
    let preufinalFideua = parseFloat(preufinalfideus + preufinalgambes + preufinalcalamars)

    // preu per persona
    let preupersona = parseFloat(preufinalFideua / numAmics)

    result.innerHTML = `Les quantitats necessaries de cada ingredient son :<br>` + 
                        `Fideus : ${kgtotalfideus} kg <br>` + 
                        `Gambes : ${kgtotalgambes} kg <br>` +
                        `Calamars : ${kgtotalcalamars} kg <br><br>` +
                        `El preu per persona es : ${preupersona} euros<br>` +
                        `El preu total de la fideua es : ${preufinalFideua} euros<br>`


}


