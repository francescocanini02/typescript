console.log("TYPES");

//
// string
//
let myName: string = "Daniele";
// myName = 10;
console.log("myName = " + myName);

//
// number
//
let myAge: number = 47.5;
myAge = 30;
//myAge = -5;
//myAge = "40";

function stampaEta(eta: number) {
    console.log("myAge = " + eta);
}


console.log("myAge = " + myAge);
console.log("myAge = " + Number(myAge) );

stampaEta(myAge);
stampaEta( Number( String(myAge) ) );

let myAgeString: string;

myAgeString = String(myAge);    // "30"
myAge = Number(myAgeString);    // 30
stampaEta(myAge);

console.log("IN LETTERE?");
myAge = Number('quarantasette');    // 47? no! ma NaN
stampaEta(myAge);



//
// boolean
//
let hasHobbies = true;

//
// array
//
let hobbies: string[] = ["Tennis", "Fotografia"];
console.log(hobbies[0]);
//hobbies = [100, 25];

let hobbies2: any[] = ["Tennis", "Fotografia"];
hobbies2 = [100, 25];
// hobbies2 = 100;

let address2: [string, number];
address2 = ["via Firenze", 33];
//address2 = [13, "via Bologna"];

let address: (string | number)[] = ["via Firenze", 33];
address = ["AA", "BB", 2, 3, "CC", 4, "dd", 22, 21 ];

//
// enum
//
enum Color {
    Red, // 0
    Yellow, // 1
    Green = 100, // 100
    Blue // ???
};

let myColor: Color = Color.Blue;
// myColor = Color.Green;

console.log("myColor = " + myColor);

enum ColoreStringa {
    Red = "red", // "red"
    Yellow = "yellow", // "yellow"
    Green = "green", // 100
    Blue = "blue" // "blue"
};
let myColor2: ColoreStringa = ColoreStringa.Blue;
console.log("myColor2 = " + myColor2);


function stampaEta2(eta: number) {
    console.log("myAge = " + eta);
}

var f = stampaEta2;

console.log("====[stampa eta]===");
stampaEta2(5);
f(5);


console.log("====[stampa eta 2]===");

function dammiStampa() {
    return stampaEta2;
}
function dammiRisultatoDiStampaEta2() {
    return stampaEta2(6);
}

var f2 = dammiStampa(); // in f2 mette il valore ritornato dalla funzione dammiStampa()
var f3 = dammiStampa;   // in f3 mette la funzione dammiStampa()
var f4 = dammiRisultatoDiStampaEta2(); // in f4 mette il valore ritornato dalla funzione
                                       //  dammiRisultatoDiStampaEta2()

f2(4);  // viene chiamata stampaEta2(4)
console.log("f3(): " + f3());   // viene chiamata dammiStampa()
console.log("f4: " + f4);     // in f4 c'è undefined

// modo 1
function comemipare() {
    console.log("comemipare!");
}
var aaaa = comemipare;

// modo 2
var bbbb = function fdgbdfbfdndfmdmdmd() {
    console.log("comemipare_in_linea!");
}

var cccc = () => {
    console.log("comemipare_in_linea!");
}


aaaa();
comemipare();

bbbb();
cccc();



var a = 100;

function fun() {
    var a = 10;
    return () => {
             var b = a + 1;
             return b;
           }
}

var g = fun();
var risultato = g(); // returns ??
console.log("risultato=" + risultato);

