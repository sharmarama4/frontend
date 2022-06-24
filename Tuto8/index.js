// console.log("hello")
//  //objects
//    let person={
//      naam:"Rama",
//      leeftijd:"12",
//     woonplaats:"mechelen"
//  }
//  console.log(person)
//  console.log(person.naam)
//  console.log(`this person is ${person.naam} and live in ${person.woonplaats}`)
//  console.log("deze person name is "+person.naam+" en is "+person.leeftijd+" years.")
//  let person2={
//     naam:"Rama",
//     leeftijd:12,
//     adres:{
//     straat:"Olivetenvest",
//     nummer: 5,
//      woonplaats:"Mechelen"
//             }
  
// }
//  console.log(person2.adres.straat)
// //spread operator
//  person2={...person2, email:"Sharama@2012.com"}
//  console.log(person2)
//  document.querySelector("#data").innerHTML=person2.naam
//  document.querySelector("#table>tbody").innerHTML=`<tr>
//     <td style="padding:20px;border:2px solid black">${person2.naam}</td>
//      <td>${person2.leeftijd}</td>
//     <td>${person2.adres.woonplaats}</td>
//  </tr>`
// // //array
//  let arr1=[1, 2, 3, 4, 5]
//  console.log(arr1[3])
//  let arr2=["Raj","Rita","Sita","Gita"]
//  console.log(arr2[3])
//  console.log(arr2.length)
// arr2[1]="Piet"
//  console.log(arr2)

// // //elementen toevoegen aan aarry
//  arr2=[...arr2,"Marc"]
//  console.log(arr2)
//  arr2.push("Macs")
//  console.log(arr2)
 //objecten in array*/
 let students=[
    {naam:"Jan",
    leeftijd:23,
    email:"kkrr414@gmail.com",
    adres:{
        straat:"leopold",
        nummer: 42,
        woonplaats:"Antwerpen"  
    }
    },
   
   {naam:"kush",
   leeftijd: 27,
   email:"kkrr414@gmail.com",
   adres:{
    straat:"Stationstaat",
    nummer: 43,
   woonplaats:"Leuven"
 }
},
{naam:"kush",
leeftijd: 37,
email:"kkrr414@gmail.com",
adres:{
 straat:"Stationstraat",
 nummer: 40,
woonplaats:"Leuven"
}
}]
 console.log(students)
 console.log(students[1].naam)
// //for loop
for(let i=0;i<students.length;i++){
    console.log(i)
     console.log(students[i].naam)
     students[i].id=i
    console.log(students)

 }
 for(let x=0; x<students.length; x++){
    console.log(students[x].naam)
    students[x].isStudent=true
 }
 console.log(students)
 //map
 students.map((student)=>{
     console.log(student)
     console.log(`student ${student.naam} is ${student.leeftijd}jaar.`)
 })
 students.map((student)=>{
    document.querySelector("#table>tbody").innerHTML+=`<tr>
     <td style="padding:20px; bordrer:2px solid black" border-collapse: collapse>${student.naam}</td>
     <td>${student.leeftijd}</td>
     <td>${student.adres.woonplaats}</td>
     </tr>`
    })











