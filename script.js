var display = document.getElementById("dis");

function toclear(input){
    display.value = "" 
}

function toclear2(input){
 
    display.value = display.value.slice(0,-1)
    
}

function toclick(input){
    display.value += input
}


function tocalculate(input){
    display.value =  eval(display.value)
}