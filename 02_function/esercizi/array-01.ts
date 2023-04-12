
/**
 *
 * 1. Creazione di un array di numeri e utilizzo del metodo filter()
 *    per restituire solo i numeri pari.
 *
 * 2. Creazione di un array di stringhe e utilizzo del metodo map()
 *    per aggiungere una lettera alla fine di ogni stringa.
 *
 * 3. Creazione di un array di oggetti rappresentanti prodotti in un negozio online.
 *  Utilizzo del metodo filter() per restituire solo i prodotti con un prezzo
 *  inferiore a 50 euro.
 *
 */

// 1. Creazione di un array di numeri e utilizzo del metodo filter()
//    per restituire solo i numeri pari.

const numeri: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numeriPari1: number[] = [];
for (let numero of numeri) {
// for (let i = 0; i < numeri.length; i++) {
//    const numero = numeri[i];
    if (numero % 2 === 0) {
        numeriPari1.push(numero);
    }
}
console.log("=====[ Numeri pari 1 ]=====", numeriPari1);

/*
function filtraNumeriPari(numero: number): boolean {
    return numero % 2 === 0;
}
const numeriPari2: number[] = numeri.filter(filtraNumeriPari);
*/
const numeriPari2: number[] = numeri.filter( (numero: number) => numero % 2 === 0 );
console.log("=====[ Numeri pari 2 ]=====", numeriPari2);


// 2. Creazione di un array di stringhe e utilizzo del metodo map()
//    per aggiungere una lettera alla fine di ogni stringa.
const nomi: string[] = ["Mario", "Luigi", "Peach", "Toad", "Yoshi"];
const nomiConS1: string[] = [];
for (let nome of nomi) {
    nomiConS1.push(nome + "s");
}
console.log("=====[ Nomi con S 1 ]=====", nomiConS1);

// const nomiConS2: string[] = nomi.map( x => x + "s" );
const nomiConS2: string[] = nomi.map( (x) => {
    const x2 = x + "s";
    // aggiungi altre elaborazioni se necessario
    return x2;
});
console.log("=====[ Nomi con S 2 ]=====", nomiConS2);


// 3. Creazione di un array di oggetti rappresentanti prodotti in un negozio online.
//  Utilizzo del metodo filter() per restituire solo i prodotti con un prezzo
//  inferiore a 50 euro.
// TODO: da implementare



// 8. Creazione di un array di numeri e utilizzo del metodo map()
//    per calcolare il quadrato di ogni numero.

const numeri2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numeriAlQuadrato1: number[] = numeri2.map( (numero) => numero * numero );
const numeriAlQuadrato1: number[] = numeri2.map( (numero) => Math.pow(numero, 2) );

console.log("=====[ Numeri al quadrato 1 ]=====", numeriAlQuadrato1);
