// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let f = function dado() {
    return Math.floor(Math.random() * 6 + 1);
};

console.log("f(): ", f());

let g = () => {
    return Math.floor(Math.random() * 6 + 1);
};
let h = () => Math.floor(Math.random() * 6 + 1);

console.log("g(): ", g());
console.log("h(): ", h());

let hello = () => {
    console.log("hello!");
};
hello();

const printMessage = (msg: string): void => {
    console.log(msg);
};
printMessage("Ciao!");

setTimeout(() => {
    console.log("dentro la setTimeout, f(): ", f());
}, 5000);

setInterval(() => {
    console.log("dentro la setInterval, f(): ", f());
}, 2000);
