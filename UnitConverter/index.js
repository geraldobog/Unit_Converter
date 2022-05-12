

//conver to feet
function convL(){
    let feet = input*2.8
    L = feet.toFixed(3)
    output = input + " meters = " + L + " feet | " + L + " feet = " + input + " meters " 
    document.getElementById("length").textContent = output
}


function convV(){
    let gallons = input*0.264
    G = gallons.toFixed(3)
    output = input + " liters = " + G + " gallons | " + G + " gallons = " + input + " liters " 
    document.getElementById("volume").textContent = output
}

function convM(){
    let pounds = input*2.2046
    P = pounds.toFixed(3)
    output = input + " kilograms = " + P + " pounds | " + P + " pounds = " + input + " kilograms " 
    document.getElementById("mass").textContent = output
}

function calculate(){
    
     let textBox = document.getElementById('input')
     input = textBox.value

    convL()
    convV()
    convM()
}

