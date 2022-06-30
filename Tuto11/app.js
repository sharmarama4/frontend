let keuze = document.getElementById("spel")
let pc = document.getElementById("pckeuze")
let winnaar = document.getElementById("winnaar")
let eigenKeuze = document.getElementById("eigenKeuze")

let opties = ["blad", "steen", "schaar"]
let puntenU = 0;
let puntenPC = 0;

function uitslag() {
    let pckeuze = Math.round(Math.random() * 2)
    console.log(opties[pckeuze])
    pc.innerHTML = `Keuze van de computer: ${opties[pckeuze]}`
    eigenKeuze.innerHTML = `Jouw keuze ${keuze.value}`
    //blad wint van steen
    //steen wint van schaar
    //schaar wint van blad
    //ofwel geen winnaar ofwel jij wint ofwel jij verliest

    if (keuze.value == "blad" && opties[pckeuze] == "blad") {
        winnaar.innerHTML += `<li> Geen winnaar, je hebt nu ${puntenU} punten. </li>`
    }
    if (keuze.value == "steen" && opties[pckeuze] == "blad") {
        winnaar.innerHTML += `<li> Jij verliest, je hebt nu ${puntenU} punten. </li>`

    }
    if (keuze.value == "schaar" && opties[pckeuze] == "blad") {
        puntenU++
        winnaar.innerHTML += `<li> Jij wint, je hebt nu ${puntenU} punten.</li>`

    }
    if (keuze.value == "blad" && opties[pckeuze] == "steen") {
        puntenU++
        winnaar.innerHTML += `<li>jij wint, je hebt nu ${puntenU} punten.</li>`

    }
    if (keuze.value == "steen" && opties[pckeuze] == "steen") {
        winnaar.innerHTML += `<li>geen winnaar, je hebt nu ${puntenU} punten. </li> `
    }
    if (keuze.value == "schaar" && opties[pckeuze] == "steen") {
        winnaar.innerHTML += `<li>jij verliest, je hebt nu ${puntenU} punten.</li>`
        puntenPC++
    }
    if (keuze.value == "blad" && opties[pckeuze] == "schaar") {
        winnaar.innerHTML += `<li>jij verliest, je hebt nu ${puntenU} punten.</li>`
        puntenPC++
    }
    if (keuze.value == "steen" && opties[pckeuze] == "schaar") {
        puntenU++
        winnaar.innerHTML += `<li>jij wint, je hebt nu ${puntenU} punten.</li>`

    }
    if (keuze.value == "schaar" && opties[pckeuze] == "schaar") {
        winnaar.innerHTML += `<li>geen winnaar </li> `
    }


}


console.log(keuze.value)

let itemLijst = document.getElementById("itemLijst")
console.log(itemLijst.children.length)

function toonItem(e) {
    console.log(e.firstChild.nextSibling.innerHTML)
    for (let x = 0; x < itemLijst.children.length; x++) {
        console.log(itemLijst.children[x].firstChild.nextSibling.innerHTML)
        if (itemLijst.children[x].firstChild.nextSibling.innerHTML == e.firstChild.nextSibling){
        itemLijst.children[x].lastChild.previousSibling.style.display="block"
}else{
    itemLijst.children[x].lastChild.previousSibling.style.display="none"
}

}
}