// Higher Oreder Functions

// A higher order function is a function the does at least one
// of the following:
// ** Takes one or more functions as an argument (parameter)
// ** Return functions as the result


import { posts } from "./posts.js";

posts.forEach(post => {
    console.log(post);
});
console.clear();

const filteredPosts = posts.filter(post => {
    return post.userId === 10;
})

console.log(filteredPosts);
// console.clear();

const mappedPosts = filteredPosts.map(post => {
    return post.id *10;
})
console.log(mappedPosts);

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post;
});
console.log(reducedPostsValue);







// Modules
/* import * as Guitars from "./guitars.js";
import User from './user.js'

const me = new User("me@me.com", "Muwaffaq");
// import playGitar from "./guitars.js";
// import { shredding as shred, plukking as fingerpicking} from "./guitars.js";

console.log(me);
console.log(me.greeting());

console.log(Guitars.playGitar());
// console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plukking());
 */

/* console.log(playGitar());
console.log(shred());
console.log(fingerpicking()); */
