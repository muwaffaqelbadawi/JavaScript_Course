// Modules













// Web Storage API

// Not Part of the DOM - refers to the window API
// Available to JS via the globale variable: Window

// We do not have to type window, It is implied
// window.alert("hey");
// alert("hey");

/* window.localStorage;
window.sessionStorage;

const myArr = ["eat", "sleep", "code"];
const myObj = {
  name: "Muwaffaq",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(`Hello ${this.name}`);
  },
};

// myObj.logName();

localStorage.setItem("mySessionStore", JSON.stringify(myArr));
const storeLength = localStorage.length;
// const key = localStorage.key(0);
// localStorage.clear();
// localStorage.removeItem("myLocalStorage");
// sessionStorage.setItem("mySessionStore", myArr);
// sessionStorage.setItem("mySessionStore", myObj);
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));

console.log(storeLength); */

// window.alert(window.location);
// alert(location);

// JavaScript Event Listener

//Syntax: addEventListener(event, function, useCapture)
/* document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
}); */

/* const initApp = () => {
  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Submi event");
  });
}; */

/*
const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener(
    "click",
    (event) => {
      view.classList.toggle("purple");
      view.classList.toggle("darkblue");
      //   view.classList.add("purple");
      //   view.classList.add("darkblue");
    },
    false
  );

  div.addEventListener(
    "click",
    (event) => {
      div.classList.toggle("blue");
      div.classList.toggle("black");
    },
    false
  );

  h2.addEventListener(
    "click",
    (event) => {
      const myText = event.target.textContent;
      myText === "My 2nd View"
        ? (event.target.textContent = "Clicked")
        : (event.target.textContent = "My 2nd View");
    },
    false
  );

  const nav = document.querySelector("nav");
  nav.addEventListener(
    "mouseover",
    (event) => {
      event.target.classList.add("height100");
    },
    false
  );
  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  })
}; */

/* const doSomething = () => {
    alert("doing something!");
}

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);
h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "clicked";
}, false) */
