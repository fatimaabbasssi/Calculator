var display = document.getElementById("dis");

function toclear(input){
    display.value = "" 
}

// function toclear2(input){
//     display.value =  input
// }

function toclick(input){
    display.value += input
}


function tocalcu(input){
    display.value =  eval(display.value)
}