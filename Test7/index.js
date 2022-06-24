console.log("hello")
// //objects
// let person={
//     naam:"John",
//     leeftijd:25,
//     woonplaats:"Mechelen"
// }
// console.log(person)
// console.log(person.naam)
// console.log(`deze person heet ${person.naam}en woont in ${person.woonplaats}.`)
// console.log("deze persoon heet"+person.naam+"en is"+person.leeftijd+" .")
// let person2={
//     naam:"John",
//     leeftijd:25,
//     adres:{
//      straat:"Olivetenvest",
//      nummer: 5,
//      woonplaats:"Mechelen"
//    }
// }
// console.log(person2.adres.straat)
// //spread operator
// person2={...person2,email:"easy@yahoo.com"}
// console.log(person2)

// document.querySelector("#data").innerHTML=person2.naam
// document.querySelector("#table>tbody").innerHTML=`<tr>
// <td style="padding:20px; bordrer:2px solid black">${person2.naam}</td>
// <td>${person2.leeftijd}</td>
// <td>${person2.adres.woonplaats}</td>
// </tr>`
// //arrays
// let arr1=[1, 2, 3, 4, 5]
// //console.log(arr1)
// console.log([2])

// let arr2=["Rita","Raj","Radhika","Rati","Raj"]
// console.log(arr2[3])
// console.log(arr2.length)//how much objects
// arr2[1]="Amrit"//updaten
// console.log(arr2)
// //elementen toevoegen aan array
// arr2 = [...arr2, "Eshwar"]
// console.log(arr2)
// arr2.push("Kushal")
// console.log(arr2)
// //objecten in een array*/
// let students=[
//   {naam:"Gauri",
//     leeftijd:25,
//     woonplaats:"Mechelen"

// },
// {naam:"Kush",
// leeftijd:27,
// woonplaats:"Leuven"
// },
// {naam:"Peter",
// leeftijd:24,
// woonplaats:"Brussel"}]
// console.log(students)

// console.log(students[1].naam)
// console.log(students.length)
// //for loop
// for(let i=0; i<students.length;i++){
//    console.log(i) 
//    console.log(students[i].naam)
//    students[i].id=i
//    console.log(students)//id
// }
let students=[
    {naam:"Gauri",
      leeftijd:25,
      email:"kkrr414@gmail.com",
      adres:{
      straat:"leopold",
      nummer: 42,
      woonplaats:"Mechelen"
  
    }
     
  
  },
  {naam:"Kush",
  leeftijd:28,
  email:"raj14@yahoo.com",
  adres:
  {straat:"leopold",
  nummer:30,
  woonplaats:"Gent"

}
  },
  {naam:"Peter",
  leeftijd:30,
  email:"rama14@yahoo.com",
  adres:{straat:"leopold",
  nummer: 43,
  woonplaats:"Antwerpen"

}
 
}]
for(let i=0;i<students.length;i++){
    console.log(students[i].naam)
    students[i].isStudent=true
}
console.log(students)
//map
students.map((student)=>{
    console.log(student)
    console.log(`student ${student.naam} is ${student.leeftijd}jaar.`)
})
// students.map((student)=>{
//     document.querySelector("#table>tbody").innerHTML += `<tr>
//     <td>${student.naam}</td>,
//     <td>${student.leeftijd}</td>, 
//     <td>${student.adres.woonplaats}</td>
//     </tr>`
//     })
students.map((student)=>{
document.querySelector("#table>tbody").innerHTML+=`<tr>
 <td style="margin:20px; padding:20px; border:2px solid black;">${student.naam}</td>
 <td style="margin:20px; padding:20px; border:2px solid black;">${student.leeftijd}</td>
 <td style="margin:20px; padding:20px; border:2px solid black;">${student.adres.woonplaats}</td>
 </tr>`
})




