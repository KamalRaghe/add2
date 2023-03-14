let x = document.querySelector(".number")
let choice =document.querySelector(".choice")

function roll(){
    y =  Math.floor(Math.random()*10)
    x.innerHTML= y
    console.log(x.innerHTML)
    return
}



