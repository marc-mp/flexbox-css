function convertir(){

    let gradosCelsius = parseFloat(document.getElementById("gradosCelsius").value)
    let result = document.getElementById("result")
    let K = 32
    let Fahrenheit = (gradosCelsius * 9 / 5) + K

    result.innerHTML = `${Fahrenheit} ºF `


}