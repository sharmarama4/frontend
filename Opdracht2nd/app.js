// let projects=false;
// let projectHolder=document.getElementById("projectList")

// function showItem() {
//     projects = !projects
//     console.log(projects)
//     if (projects== true) {
//         projectHolder.style.display = "block"
        
//     } else {
//        projectHolder.style.display = "none"
         
//     }
// }
let searchInput = document.getElementById("name")

let welcome = document.getElementById("welcome")
function search(){

    welcome.innerHTML = `Welcome ${searchInput.value}`

    document.getElementById("welcome").style.display = "block"

    document.getElementById("welcomeMsg").style.display = "none"

}


document.querySelectorAll('#projectLijst>li').forEach(li=>{
li.addEventListener('dblclick',(e)=>{
    e.preventDefault()
    console.log('double click!!!!')
})
})

function toonItem(e) {
    console.log(e.firstChild.nextSibling.innerHTML)
    for (let x = 0; x < itemLijst.children.length; x++) {
        console.log(itemLijst.children[x].firstChild.nextSibling.innerHTML)
        if (itemLijst.children[x].firstChild.nextSibling.innerHTML == e.firstChild.nextSibling.innerHTML){
        itemLijst.children[x].lastChild.previousSibling.style.display="block"
}else{
    itemLijst.children[x].lastChild.previousSibling.style.display="none"
}

}
}

document.querySelectorAll('#itemLijst>li').forEach(li=>{
    li.addEventListener('dblclick',(e)=>{
        e.preventDefault()
        console.log('double click!!!!')
    })
})

document.querySelector('#itemLijst').addEventListener('dblclick',(e)=>{
    e.preventDefault()
    console.log('double click!!!!')
})
function closeitem(e){
    console.log("piep")
    for (let x = 0; x < itemLijst.children.length; x++) {
        
        if (itemLijst.children[x].firstChild.nextSibling.innerHTML == e.firstChild.nextSibling.innerHTML){
        itemLijst.children[x].lastChild.previousSibling.style.display="none"
        }
}
}