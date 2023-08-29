
const view1 = document.getElementById("view1");

console.log(view1);

const view2 = document.querySelector("#view2");

console.log(view2);

// Single Page Application (SPA)
view1.style.display = "flex";
view2.style.display = "flex";


const views = document.getElementsByClassName("view");

console.log(views);

// Errors
/* "use strict";

const makeError = () => {
  try {
    const name = "Dave";
    name = "Joe";
  } catch (err) {
    console.table(err);
  }
};

makeError(); */

// function phoneBuilder(PhoneBrand, phneJack, phoneSize) {
//   const color = "black";
//   const brand = PhoneBrand;
//   const jack = phneJack;
//   const size = phoneSize;

//   return {
//     speak: () =>
//       console.log(
//         `This phone is ${brand} with color ${color} and it's ${size} in size also it has a ${jack} headphone jack`
//       ),
//   };
// }

// const myPhone = phoneBuilder("Huawei", "screw", 12);
// myPhone.speak();

// Classes
/* 
class Phone {
  color = "black";
  #brand = "Huawei";

  constructor(brand) {
    this.size = 12;
  }

  gethoPneJack() {
    return this.jack;
  }

  setPhoneJack(headphoneJack) {
    this.jack = headphoneJack;
  }

  speak() {
    return `This phone is ${this.#brand} with color ${this.color} and it's ${this.size} in size also it has a ${this.jack} headphone jack`;
  }
}

const HonorLight = new Phone("Huawei");

HonorLight.setPhoneJack("screw");
console.log(HonorLight.speak()); */

// console.log(HonorLight.#brand);

// console.log(HonorLight.speak());
// console.log(HonorLight.gethoPneJack());
// console.log(HonorLight.size);
// console.log(HonorLight.color);

// const namesArr = ["Muwaffaq", "Moazzar", "Moyassar", "Faiz"]

/* for(let name in namesArr) {
  console.log(namesArr[name]);
} */

// Object
/* const vehicle = {
  wheels: 4,
  doors: 2,
  

  drive: function () {
    return "I'm driving";
  }
} */

// React method of destructuring!!
/* const car = function name({wheels}) {
  console.log(`The car has ${wheels} weels`);
}

car(vehicle); */

// const truck = Object.create(vehicle);
// truck.breaks = "Breaks";

// console.log(truck);
// console.log(truck.wheels); //inheritance
// console.log(truck.drive())

// loops
// let myNumber = 0;

// Arrays
/* let myArr = [];

myArr[0] = "Dave";
myArr[1] = 1001;
myArr[2] = false;

myArr.shift();

console.log(myArr);
 */

// User Imput
// alert("This is alert");
// let myBoolean = confirm("Ok === true\nCancel === false");
// let myName = prompt("Please enter your name");
// console.log(myName ?? "You didn't enter your name!");

// let chotice = confirm("Ok === true\n Cancel === false");
// chotice ? location.reload() : alert("Ok maybe next time");
// location.reload();

// strings

// const myVariable = "Mathematics"

/* const myNumber = 42;
// console.log(myNumber);

const myFloat = "42.015556";
// console.log(myFloat);

const myString = "42";

const myName = "Muwaffaq";

// console.log(myName[Math.floor(Math.random() * (myName.length - 1)) + 1]);

// const random_num = Math.random() * (myName.length - 1) + 1;
const nameLength = myName.length;
const randomNum = Math.random(); */

/* console.log(myName.charAt(Math.floor(randomNum * nameLength) + 1));
console.log(myName.charAt(Math.floor(randomNum * (nameLength - 1)) + 1));

console.log(myName.charAt(Math.floor(randomNum * 9) + 1));
console.log(myName[Math.floor(randomNum * 9) + 1]);

console.log(myName[Math.floor(randomNum * nameLength)]) + 1;

console.log(
  myName.charAt(Math.floor(randomNum * nameLength + 1)) ===
    myName[Math.floor(randomNum * nameLength + 1)]
); */

// console.log(Math.floor(Math.random() * (myName.length - 1)) + 1);

// console.log(Number(myString) + 2);
// console.log(Number.isInteger(myString));
// console.log(Number.parseFloat(myFloat).toFixed(2));

// Math methods
// console.log(Math.PI);
// console.log(Math.trunc(Math.PI));
// console.log(Math.round(Math.PI));
// console.log(Math.round(3.5));
// console.log(Math.ceil(3.4));
// console.log(Math.floor(3.9));
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

// The length property
// console.log(myVariable.length)

// console.log(myVariable.charAt(5));

// console.log(myVariable.indexOf("ema"));
// console.log(myVariable.lastIndexOf("at"));
// console.log(myVariable.slice(4, 6));
// console.log(myVariable.toUpperCase());
// console.log(myVariable.toLowerCase());

// console.log(myVariable.includes());
// console.log(myVariable.split());
