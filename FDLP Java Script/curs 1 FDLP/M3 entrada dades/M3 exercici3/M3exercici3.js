

function promedio() {
    
    let nota1 = parseFloat(document.getElementById('nota1') .value)
    let nota2 = parseFloat(document.getElementById('nota2') .value)
    let nota3 = parseFloat(document.getElementById('nota3') .value)
    let numNotas = 3
    let mitjana = (nota1 + nota2 + nota3) / numNotas
    let message = `La mitjana es ${mitjana} `

    document.getElementById('result') . innerHTML = message
}




