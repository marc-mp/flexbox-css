
function myFunction(){

        let alturaPared = parseFloat(document.getElementById("altura").value)
        let anchuraPared = parseFloat(document.getElementById("anchura").value)
        let numManos = parseFloat(document.getElementById("manos").value)

        const METROSXLITRO = 12 
        let metrosTotales = alturaPared * anchuraPared * numManos
        let litrosTotales = metrosTotales / METROSXLITRO
        let message = `Para pintar la pared necesita ${litrosTotales.toFixed(1)}`

        let Result = document.getElementById("Result")  
        Result.innerHTML = message + " litros"
        console.log(message, "litros")
        

}