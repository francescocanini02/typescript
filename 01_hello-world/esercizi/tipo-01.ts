/**
 * - tipo-01.ts
 *
 * Definisci un'interfaccia per rappresentare
 * una persona con le seguenti proprietà:
 * nome (stringa), età (numero) e
 * indirizzo (oggetto con proprietà strada, città e stato).
 *  Crea una funzione che accetta un'istanza di questa
 *  interfaccia come parametro e stampa le proprietà della
 *  persona.
 */

console.log("=====[ tipo-01.ts ]=====");

interface Indirizzo {
    strada: string;
    citta: string;
    stato: string;
};

interface Persona {
    nome: string;
    eta: number;
    indirizzo: Indirizzo;
    indirizzoLavoro?: Indirizzo;
}

let persona1: Persona = {
    nome: "Luca",
    eta: 20,
    indirizzo: { strada: "Via Brombeis", citta: "Rimini", stato: "Italia" },
};

function stampaPersona(p: Persona): void {
    console.log(p);
}
stampaPersona(persona1);


function stampaIndirizzo(p: Persona): void {
    console.log("Indirizzo di " + p.nome + " è: ");
    console.log(p.indirizzo.strada);
    console.log(p.indirizzo.citta);
    console.log(p.indirizzo.stato);    
}

stampaIndirizzo(persona1);
