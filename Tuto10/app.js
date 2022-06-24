let box1 = document.querySelector(".mouseLeave")

function mouseEnter(){
    box1.style.width = "400px";
    box1.style.backgroundColor = "red"
}
function mouseLeave(){
    box1.style.width = "300px";
    box1.style.backgroundColor ="green"
}

let box2 = document.querySelector(".mouseMove")
function mouseMove(e){
    var x = e.clientX;
    var y = e.clientY;
    box2.innerHTML = `De muis bevindt zich op x ${x} en y ${y}`
}

let popup = document.getElementById("popup")
function mouseDown(){
    popup.style.visibility = "visible"
}
function mouseUp(){
    popup.style.visibility = "hidden"
}

let zichtbaar = false;
let tekst = document.getElementById("testTekst")
function tonen(){
    zichtbaar = !zichtbaar
    console.log(zichtbaar)
    if(zichtbaar == true){
        tekst.style.visibility = "visible"
    }else{
        tekst.style.visibility = "hidden"
    }
}

//BOEKENLIJST
let titel = document.getElementById("titel")
let schrijver = document.getElementById("schrijver")
let verhaal = document.getElementById("verhaal")
let boek = document.getElementById("boek")
let btnLijst = document.getElementById("btnLijst")
let boeklijst =[]

btnLijst.addEventListener('click', function(){
    let obj={
        titel:titel.value,
        schrijver: schrijver.value,
        verhaal: verhaal.value
    }
    boeklijst.push(obj)
    console.log(boeklijst)
    localStorage.setItem("boek",JSON.stringify(boeklijst))
  
  boek.innerHTML += `<tr>
  <td>${titel.value}</td>
  <td>${schrijver.value}</td>
  <td>${verhaal.value}</td>
  <td> <i class="fa-solid fa-trash-can" onclick="removeRij(this)"></i> </td>
  </tr>`
  titel.value="";
schrijver.value="";
verhaal.value="";

})

function removeRij(e){
    console.log(e.parentElement.parentElement)
    e.parentElement.parentElement.remove()
}
window.addEventListener("DOMContentLoaded", function(){
    let storageBoek=JSON.parse(this.localStorage.getItem("boek"))
    console.log(storageBoek[0].titel)
    storageBoek.map((boekje)=>{
        console.log(boekje)
        boek.innerHTML+=`<tr>
         <td>${boekje.titel}</td>
            <td>${boekje.schrijver}</td>
            <td>${boekje.verhaal}</td>
            <td> <i class="fa-solid fa-trash-can" onclick="removeRij(this)"></i> </td>
            </tr>`
        })
    })
  
//     boek.innerHTML += `<tr>
//     <td>${titel.value}</td>
//     <td>${schrijver.value}</td>
//     <td>${verhaal.value}</td>
//     <td> <i class="fa-solid fa-trash-can" onclick="removeRij(this)"></i> </td>
//     </tr>`

// let storageBoek=JSON.parse(localStorage.getItem("boek"))
