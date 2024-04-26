function myFunction(){
    
    let result = document.getElementById("result")
    const Maximbeques = 5
    let contadorbeques =0
    const nomsbeques =[]
    

    while(contadorbeques < Maximbeques){

        let nom = prompt("indica el teu nom")
        let edat = parseInt(prompt("indica la teva edad"))
        let Univesitari = confirm ("tens titol universitari?")
        let aturat = confirm ("estas a l'atur?")
        
   
        if((edat>=18 && Univesitari) || aturat){
        
            contadorbeques++
            console.log(contadorbeques)
            nomsbeques.push(nom)
            alert(`felicitats ${nom}! tens una beca.`)
        
        }else{
            alert("Ho sentim, NO tens beca")
        }
   
    }

    if(contadorbeques == Maximbeques){

        result.innerHTML = `les 5 persones que tenen beca son : <br> ${nomsbeques.join("<br>")} `
    }

}
