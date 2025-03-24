/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(e=>{
        if(e.profession=="developer") console.log(`id : ${e.id}, Name : ${e.name}, Age : ${e.age}, Profession : ${e.profession}`)
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(e=>{
        if(e.profession=="developer") console.log(`id : ${e.id}, Name : ${e.name}, Age : ${e.age}, Profession : ${e.profession}`)
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    const person={id:4, name:"susan", age:"20", profession:"intern"} 
    arr.push(person)
    arr.map(e=>{
        console.log(`id : ${e.id}, Name : ${e.name}, Age : ${e.age}, Profession : ${e.profession}`)
    })
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr=arr.filter(e=> e.profession!='admin')
    arr.map(e=>{
        console.log(`id : ${e.id}, Name : ${e.name}, Age : ${e.age}, Profession : ${e.profession}`)
    })
  }
  
  function concatenateArray() {
    //Write your code here, just console.log

    let arr2 = [
        { id: 7, name: "Divya", age: "40", profession: "admin" },
        { id: 5, name: "Vishnavi", age: "27", profession: "admin" },
        { id: 6, name: "Sukanya", age: "29", profession: "manager" },
      ];
      arr = arr.concat(arr2);
      arr.map(e=>{
        console.log(`id : ${e.id}, Name : ${e.name}, Age : ${e.age}, Profession : ${e.profession}`)
    })
  }