const inputEl =document.getElementById("input-el")

const convertBtn = document.getElementById("convert-btn")

const metersEl = document.getElementById("meters-el")

const volumeEl = document.getElementById("volume-el")

const massEl = document.getElementById("mass-el")




myConvert=[]
const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204


convertBtn.addEventListener("click", function(){

    let baseValue = inputEl.value

     metersEl.textContent = `${baseValue} meter = ${Math.floor(baseValue * meterToFeet).toFixed(2) } feet  |
      ${inputEl.value} Feet = ${Math.floor(inputEl.value / meterToFeet).toFixed(2)} Meters`
      
     volumeEl.textContent = `${baseValue} meter = ${Math.floor(baseValue * literToGallon).toFixed(2)}feet  | 
     ${inputEl.value} Feet = ${Math.floor(inputEl.value / literToGallon).toFixed(2)} Meters`

     massEl.textContent = `${baseValue} meter = ${Math.floor(baseValue * kiloToPound).toFixed(2) } feet  | 
     ${inputEl.value} Feet = ${Math.floor(inputEl.value / kiloToPound).toFixed(2)} Meters`

    myConvert.push(inputEl.value)

    inputEl.value=""
});

