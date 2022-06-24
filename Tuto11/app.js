let keuze=document.getElementById("spel")
let pc=document.getElementById("pckeuze")
let winnar=document.getElementById("winnar")
let option=["blad","schaar","steen"]
let puntenU=0;
let puntenPC=0;

function uitslag(){
    let pckeuze=Math.round(Math.random()*2)
    console.log(option[pckeuze])
}
console.log(keuze.value)
//blad wint van steen
//steen wint van blad
//schaar wint van blad
//ofwel geen winner ofwel jij wint ofwel jij verlist