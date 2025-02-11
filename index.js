console.log("External JavaScript working")
// object creation
let laptop ={name:"Dell",qty:10,ram:"DDR4"}
console.log(laptop)

//create an array to store list of objects
let listOfLaptop = [];

let laptop0 ={name:"Dell",qty:10,ram:"DDR4"}
let laptop1 ={name:"Acer",qty:5,ram:"DDR3"}
let laptop2 ={name:"Lenovo",qty:8,ram:"DDR5"}

listOfLaptop.push(laptop)
listOfLaptop.push(laptop1)
listOfLaptop.push(laptop2)

for(let i=0;i<listOfLaptop.length;i++){
    console.log(listOfLaptop[i].name)
}

console.log("Arrow functions:")
listOfLaptop.forEach((value, key) => {
    console.log(value.ram,key);
});