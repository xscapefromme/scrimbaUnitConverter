/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 

let meter = "3.281"
let liter = ".264"
let kilogram = "2.204"

const convertBtn = document.querySelector(".conversion-card__convertBtn")
const inputNum = document.querySelector("#conversion-card__inputNum")
let lengthOut = document.querySelector("#lengthLine")
let volumeOut = document.querySelector("#volumeLine")
let massOut = document.querySelector("#massLine")


convertBtn.addEventListener('click', function(){
    let meterFeetConversion = `${inputNum.value}` * Number(meter)
    let feetMeterConversion = `${inputNum.value}` / Number(meter)
    let litersGallonConversion = `${inputNum.value}` * Number(liter)
    let gallonsLiterConversion = `${inputNum.value}` / Number(liter)
    let kiloPoundsConversion = `${inputNum.value}` * Number(kilogram)
    let poundsKiloConversion = `${inputNum.value}` / Number(kilogram)


    if(1 <= inputNum.value &&  inputNum.value < 1000){
    lengthOut.textContent = `${inputNum.value} meters = ${meterFeetConversion.toFixed(3)} feet | ${inputNum.value} feet = ${feetMeterConversion.toFixed(3)} meters`

    volumeOut.textContent = `${inputNum.value} liters = ${litersGallonConversion.toFixed(3)} gallons | ${inputNum.value} gallons = ${gallonsLiterConversion.toFixed(3)} liters`

    massOut.textContent = `${inputNum.value} kilos = ${kiloPoundsConversion.toFixed(3)} pounds | ${inputNum.value} pounds = ${poundsKiloConversion.toFixed(3)} kilos`
    } else if(inputNum.value < 1){
        lengthOut.textContent = "please input a number that is positive and > 0"
        volumeOut.textContent = "please input a number that is positive and > 0"
        massOut.textContent = "please input a number that is positive and > 0"
    } else{
        lengthOut.textContent = "please input a value that is less than 1000"
        volumeOut.textContent = "please input a value that is less than 1000"
        massOut.textContent = "please input a value that is less than 1000"
    }

})





