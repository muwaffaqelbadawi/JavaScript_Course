// Fetch API requires a discussion of ...
// Callbacks, Promisses, Thenables and asyn await

// Promises
// 3 stats: pending, Fulfilled, Rejected

// 2nd parameter of Fetch is object

// Abstract into functions

// Maybe from a form
const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return requestObj;
};

const buildRequestURL = (requestData) => {
  return `https://api.chucknorris.io/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value;

  postJokeToPage(joke);

  // const response = await fetch("https://api.chucknorris.io/jokes/random");
  // const requestJoke = async (firstName, lastName) => {
  //   // const response = await fetch("https://api.chucknorris.io/jokes/random");
  //   const response = await fetch(
  //     `https://api.chucknorris.io/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`
  //   );
};

// requestJoke("Bruce", "Lee");

const postJokeToPage = (joke) => {
  console.log(joke);
};

// Procedural "workflow" funcion
const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestURL = buildRequestURL(requestData);
  await requestJoke(requestURL);
  console.log("finished!");
};

processJokeRequest();

/* const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });
  const jsonResponse = await response.json();
  console.log(jsonResponse);
};

postData(jokeObj); */

/* 
const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      // Accept: "text/plain",
      Accept: "application/json",
    },
  });
  const jsonJokeData = await response.json();
  console.log(jsonJokeData);
};

getDadJoke();
 */

/* // workflow funcion
const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });

  // console.log(userEmailArray);
  // return userEmailArray;
  postToWebPage(userEmailArray);
};

// console.log(getAllUserEmails());

const postToWebPage = (data) => {
  console.log(data);
};

getAllUserEmails();
 */
/* 
// Async / await

const myUsers = {
  userList: [],
};
 */
/* const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
}; */

/* const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
  //   console.log(data);
};

anotherFunc();
console.log(myUsers.userList);
 */
/* 
// pending
const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });

console.log(users); */

/* const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("!Yes resolved the promise");
  } else {
    reject("No rejected the promise");
  }
}); */

/* console.log(myPromise);

myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((error) => {
    console.log(error);
  }); */

/* const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("my next promise resolved!");
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
});

myPromise.then((value) => {
  console.log(value);
}); */

/* 
// Callbacks
function firstFunction(parameters, callback) {
  // do stuff
  callback();
}

// AKA callback hell
firstFunction(para, function () {
  secondFunction(para, function () {
    thirdFunction(para, function () {

    });
  });
});
 */
