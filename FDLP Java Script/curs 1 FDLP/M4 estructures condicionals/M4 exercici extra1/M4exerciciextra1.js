function myFunction(){

    let divident= parseInt(document.getElementById("num1").value)
    let divisor= parseInt(document.getElementById("num2").value)
    let result = document.getElementById("result")
    
    if(divisor >=2 && divisor <=7){

        if((divident % divisor) == 0){

            result.innerHTML = `El divident ${divident} es multiple del divisor ${divisor}`

        }else{

            result.innerHTML = `El divident ${divident} NO es multiple del divisor ${divisor}`
        }
    
    }else{
        result.innerHTML = "Error! el divisor ha de ser un numero entre el 2 i el 7"
    }
     
}