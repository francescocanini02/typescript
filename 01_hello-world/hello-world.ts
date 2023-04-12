/**
 * Hello World
 */
console.log("Hello World!");

function saluto(msg: string) {
    console.log("Ciao " + msg);
}

saluto("Daniele");
saluto("4");


/**
 * Approfondimento su tipi di dati
 */

// Boolean
let fatto: boolean = true;  // or = false
let fatto2 = true;
// fatto = 0;               // KO: errore di compilazione


// Number
let anno: number = 2018;
// anno = "2018";          // KO: errore di compilazione



// String
let colore: string;
colore = "rosso";

let colore2;        // se non indico il tipo e non inizializzo, il tipo inferito è "any"
colore2 = "blu";
colore2 = 0;


// Array
let elenco1: number[] = [1, 2, 3, 4];
elenco1 = [ 1, 2, 3 ];


let elenco2: Array<number> = [1, 2, 3, 4];      // Array<number> è un alias di number[]

let elenco3: string[];
elenco3 = [ "a", "b" ];



// Tupla (Array composto da tipi non omogenei)
let indirizzo: [string, number];
indirizzo = ["Corso d'Augusto", 4];


// Any: disabilita il controllo dei tipi
let nonsaprei: any = 4;
nonsaprei = 'pippo';
nonsaprei = true;


// Enum
// Se non indico il valore di un elemento, viene assegnato il valore precedente + 1
enum Colore {
    Rosso,      // 0
    Giallo,     // 1
    Blu         // 2
};

let c: Colore = Colore.Rosso;

// Se indico il valore di un elemento, viene assegnato il valore indicato
enum HTTPStatus {
    NOT_FOUND = 404,
    BAD_REQUEST = 400,
    INTERNAL_SERVER_ERROR = 500,
    NOT_PERMITTED = 403,
    NOT_AUTHENTICATED = 401
};

// Enum con valori string
enum HTTPStatusMessage {
    NOT_FOUND = "404 - Not Found",
    BAD_REQUEST = "400 - Bad Request",
    INTERNAL_SERVER_ERROR = "500 - Internal Server Error",
    NOT_PERMITTED = "403 - Not permitted",
    NOT_AUTHENTICATED = "401 - Not Authenticated"
};

let httpStatus: HTTPStatus;
httpStatus = HTTPStatus.NOT_FOUND;

let httpStatusMessage: HTTPStatusMessage;
httpStatusMessage = HTTPStatusMessage.NOT_FOUND;

console.log("httpStatus = " + httpStatus);
console.log("httpStatusMessage = " + httpStatusMessage);


// Void
function avviso(msg: string): void {
   console.log("Premi OK per continuare.");
}
avviso("errore");

// Null e undefined
let nonusabile1: null;
let nonusabile2: undefined = undefined;
// Sono dei “sotto-tipi”, assegnabili anche agli altri tipi!
nonusabile1 = null;

console.log("nonusabile1 = ", nonusabile1);


/**
 * Esempi di composizione di tipi
 */

// la variabile può contenere solo valori string o null
let variabileFacoltativa: string | null;
variabileFacoltativa = null;

let numberOrString: number | string | boolean | null;
numberOrString = "string";
numberOrString = 0;
numberOrString = true;
numberOrString = null;



//
// tipi dati personalizzati
//
type UserData = {
    id: number;
    name: string;
    surname?: string;
}

type UserAddress = {
    address: string;
    city: string;
    state?: string;
    country: string;
}


let user1: UserData;
user1 = { id: 341235134, name: "Daniele", surname: "Arduini" };

let userAddress1: UserAddress;
userAddress1 = {
 address: "via flaminia, 11",
 city: "Rimini",
 country: "Italy",
 state: "RN"
};

let userProfile1: UserData & UserAddress;

type User = UserData & UserAddress;

let data: UserData = { id: 1, name: 'Daniele' };
let address: UserAddress =
 { address: 'via Flaminia, 12', city: 'Rimini', country: 'Italy' };

 let user: User = { id: 2, name: 'Mario', surname: 'Rossi',
 address: 'via Dante, 4', city: 'Rimini', country: 'Italy' };

//
// Interfacce
//

interface IUserData {
    id: number;
    name: string;
    surname?: string;
}

interface IUserAddress {
    address: string;
    city: string;
    state?: string;
    country: string;
}

interface IUser extends IUserData, IUserAddress {}

let dataI: IUserData = { id: 1, name: 'Daniele' };
let addressI: IUserAddress =
     { address: 'via Flaminia, 12', city: 'Rimini', country: 'Italy' };

let userI: IUser = {
    id: 2, name: 'Mario', surname: 'Rossi',
    address: 'via Dante, 4', city: 'Rimini', country: 'Italy'
};

function spedisciAIndirizzo(addr: IUserAddress): void {
    console.log("spedisciAIndirizzo(): address=", addr.address);
}

function salutaUtente(usr: IUserData): void {
    console.log("salutaUtente(): usr.name=", usr.name);
}

spedisciAIndirizzo(userI);
salutaUtente(userI);
