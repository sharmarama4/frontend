//datum
let datum=document.getElementById("datum")
let dag= new Date()//.getDate()
let options ={weekday:'short', year:'numeric', month:'long',day:'numeric'}
let volDat=dag.toLocaleString('nl-BE',options)
datum.innerHTML=volDat
let weekdag=["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]

weekdag= weekdag[new Date().getDay()]
console.log(weekdag)
//getDate(),getDay(),getMonth(),getFullyear()
let datum1 =document.getElementById("datum1")
let date=new Date().getDate()
console.log(date)

let month =["januari","februari","mart","april","may","juni"]
let maand = month[new Date().getMonth()]
console.log(maand)
let jaar=new Date().getFullYear()
console.log(jaar)
datum1.innerHTML=weekdag+" "+ date +" "+maand+" "+jaar
//opdrachtje: afhankelijke  van de tijd andere boodschap in Html
console.log(new Date().getMinutes())
/*setInterval(function(){
    datum1.innerHTML = new Date().getSeconds()

},1000)*/
let uur= new Date().getHours()
console.log(uur)


//MATH Objects
let result = Math.random()
result=Math.random()
result=(Math.round(result*10))+1
//result=(Math.round(Math.random()*10))//van 1-10
//result=(Math.round(Math.random()*10))
console.log(result)
let speelgoed =["bal","pop","logo","beer","auto","puzzels","playstation","monoply","Kleurs","cartoons"]
let kind= speelgoed[Math.round(Math.random()*10)]
console.log(speelgoed)
console.log(kind)
//functies
function test1(param1,param2,param3){
    console.log("hallo")
return console.log(param1,param2,param3)
console.log("goodbuy")
}
test1("hello",5,"😘")
test1("hello","Priyanka",10)
test1("5","hoi",5)
const test2 = (param4,param5)=>{
    console.log(param4,param5)
}
test2("hallo","hello")
let vrienden=["priyanka","Radhika","kunjal","Kushal"]
function friends(vriend){
    vrienden.push(vriend)
}
friends("Raj");
friends("sonam");
friends("Hari");

console.log(vrienden)
let z;
let a=5;
let b=7;
//a=6;
//b=4;
function gemmidelde(a,b){
    return z=(a+b)/2
}
gemmidelde(a,b)
console.log(z)

//filter
var studenten=[{
    id:1,
    naam:"jan",
    cursus:"javascript",
    punten: 25

},
{
    id:2,
    naam:"yam",
    cursus:"Html",
    punten: 15
},
{ id:3,
naam:"Marie",
cursus:"css",
punten: 55},
{id:4,
naam:"yam",
cursus:"python",
punten: 65},
{ id:5,
    naam:"Manish",
    cursus:"science",
    punten: 75}]
    let geslaagd=studenten.filter(diploma)
    function diploma(punt){
        return punt.punten>=50
    }
    console.log(geslaagd)
    geslaagd.map((student)=>{
        document.querySelector("#table>tbody").innerHTML+=`<tr>
        <td style="margin:20px; padding:20px; border:2px solid black;">${student.id}</td>
         <td style="margin:20px; padding:20px; border:2px solid black;">${student.naam}</td>
         <td style="margin:20px; padding:20px; border:2px solid black;">${student.cursus}</td>
         <td style="margin:20px; padding:20px; border:2px solid black;">${student.punten}</td>
         </tr>`
        })
        
        let nietGeslaagd=studenten.filter(diploma)
        function diploma(punt){
            return punt.punten<=50
        }
        console.log(nietGeslaagd)
        nietGeslaagd.map((student)=>{
            document.querySelector("#table>tbody").innerHTML+=`<tr>
            <td style="margin:20px; padding:20px; border:2px solid black;">${student.id}</td>
             <td style="margin:20px; padding:20px; border:2px solid black;">${student.naam}</td>
             <td style="margin:20px; padding:20px; border:2px solid black;">${student.cursus}</td>
             <td style="margin:20px; padding:20px; border:2px solid black;">${student.punten}</td>
             </tr>`
            })
    //Events
   let num1=document.getElementById("num1")
    console.log(Number(num1.value))
    let num2=document.getElementById("num2")
    let som;
    let uitkomst= document.getElementById("uitkomst")
    function bereken(){
        som=Number(num1.value)+Number(num2.value)
        uitkomst.innerHTML="De uitKomst is"+som

    }
    let counter=document.getElementById("counter")
    let optellen=document.getElementById("optellen")
    let aftreken=document.getElementById("aftreken")
    
    let count=0
    let reset=document.getElementById("reset")
    
    optellen.addEventListener("click",function(){
    count++
   counter.innerHTML=count
  console.log(count)
    })

   /*let num1=document.getElementById("num1")
    console.log(Number(num1.value))
    let num2=document.getElementById("num2")
    let min;
    let uitkomst= document.getElementById("uitkomst")
    function bereken(){
        min=Number(num1.value)-Number(num2.value)
        uitkomst.innerHTML="De uitKomst is"+min
    }

 let counter=document.getElementById("counter")
    let optellen=document.getElementById("optellen")
    let aftreken=document.getElementById("aftreken")
    
    let count=0
    let reset=document.getElementById("reset")
    
    aftreken.addEventListener("click",function(){
    count--
   counter.innerHTML=count
  console.log(count)
    })*/
  
   