/**
 *  - tipo-03.ts
 *
 * Crea un'interfaccia per rappresentare un prodotto
 * con le seguenti proprietà: nome (stringa),
 *  prezzo (numero) e disponibilità (booleano).
 * Crea una funzione che accetta un array di prodotti
 *  come parametro e restituisce un nuovo array
 * contenente solo i prodotti disponibili.
 */

console.log("=====[ tipo-03.ts ]=====");

interface Prodotto {
    nome: string;
    prezzo: number;
    disponbilita: boolean;
}

let prodotto1: Prodotto = {
    nome: "L'alchimista",
    prezzo: 20,
    disponbilita: true,
};
let prodotto2: Prodotto = { nome: "La casta", prezzo: 15, disponbilita: true };
let prodotto3: Prodotto = {
    nome: "Fatto in casa da Benedetta",
    prezzo: 20,
    disponbilita: false,
};
let prodotto4: Prodotto = { nome: "1984", prezzo: 16, disponbilita: false };

let listaProdotti: Prodotto[] = [prodotto1, prodotto2, prodotto3, prodotto4];

/**
 * La funzione prende in ingresso una lista di prodotti,
 * fornisce in uscita la lista dei soli prodotti disponibili
 *
 * @param listaProdotti
 */
function disponibile(listaProdotti: Prodotto[]): Prodotto[] {
    let result: Prodotto[] = [];

    for (let i = 0; i < listaProdotti.length; i++) {
        let p = listaProdotti[i];

        if (p.disponbilita == true) {
            result.push(p);
        }
    }

    return result;
}

let listaDisponibili = disponibile(listaProdotti);

console.log(listaDisponibili);
