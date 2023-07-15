/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map( (element) => {
        if(element.profession === "developer"){
            console.log(element);
        }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach( (element) => {
        if(element.profession === "developer"){
            console.log(element);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let getid = arr.length;
    let newarr = {id:getid+1,name:"susan",age:"20",profession:"intern"};
    arr.push(newarr);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter( (element) => {
        if(element.profession !== "admin"){
            console.log(element);
        }
    });
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let getid = arr.length;
    let employees = [
        { id: getid+1, name: "raj", age: "19", profession: "developer" },
        { id: getid+2, name: "sakshi", age: "33", profession: "admin" },
        { id: getid+3, name: "adi", age: "22", profession: "developer" }
      ];
      
      let addarr = arr.concat(employees);
      
      console.log(addarr);
  }