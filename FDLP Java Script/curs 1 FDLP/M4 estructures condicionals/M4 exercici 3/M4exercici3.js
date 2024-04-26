function myFunction(){

    let edat = parseInt(document.getElementById("age").value)
    let Univesitari = document.querySelector('input[name="Univesitari"]')
    let aturat = document.querySelector('input[name="aturat"]')
    let result = document.getElementById("result")

    if((edat>=18 && Univesitari.checked) || aturat.checked ){
        
        result.innerHTML = "tens una beca"

    }else{
        result.innerHTML = "NO tens beca"
        }

}

    

