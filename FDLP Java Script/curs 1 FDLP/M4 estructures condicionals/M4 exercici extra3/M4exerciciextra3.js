function Jueguen(){

    let numRandom = Math.floor(Math.random() * (4 - 1)) + 1
    let numUser = parseInt(document.getElementById("numUser").value)
    let result = document.getElementById("result")
    let message = ""


    if(numUser < 0 || numUser >3){

        result.innerHTML= "Entenc que no vols jugar. Adeu"
        return
    }

   
    switch(numUser){

        case 1: //pedra
           switch(numRandom){
                case 1: 
                    message = "Jo pedra i tu pedra. Empat!! Repetim"
                break
                case 2:
                    message = "Jo pedra i tu paper. Has guanyat!"
                break
                case 3:
                    message = "Jo pedra i tu tisora. He guanyat!"
                break
           }
        break
        case 2: //paper
            switch(numRandom){
                case 1:
                    message = "Jo paper i tu pedra. He guanyat!"
                break
                case 2:
                    message = "Jo paper i tu paper. Empat!! Repetim"
                break
                case 3:
                    message = "Jo paper i tu tisora. Has guanyat!"
                break
           }
        break
        case 3 : // tisora
            switch(numRandom){
                case 1:
                    message = "Jo tisora i tu pedra. Has guanyat!"
                break
                case 2:
                    message = "Jo tisora i tu paper. He guanyat!"
                break
                case 3:
                    message = "Jo tisora i tu tisora. Empat!! Repetim"
                break
           }
        break
       
    }

 result.innerHTML = message
    
}