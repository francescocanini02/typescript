/**
 *  - tipo-08.ts
 *
 * Crea un'interfaccia per rappresentare un animale con le seguenti proprietà:
 * nome (stringa), specie (stringa) e numero di zampe (numero).
 * Crea una funzione che accetta un array di animali come parametro e
 * restituisce un nuovo array contenente solo gli animali che hanno quattro zampe.
 */

console.log('=======[ tipo-08.ts ]=======');

interface Animale {
    nome: string;
    specie: string;
    numZampe: number;
}

function filtraAnimaliPerZampe(animali: Animale[], numeroZampe: number = 4): Animale[] {
    return animali.filter(animal => animal.numZampe === numeroZampe);
}

// Esempio di utilizzo
const animali: Animale[] = [
    { nome: "Scooby Doo", specie: "cane", numZampe: 4 },
    { nome: "Tom", specie: "gatto", numZampe: 4 },
    { nome: "Jerry", specie: "topo", numZampe: 2 },
    { nome: "Bugs Bunny", specie: "coniglio", numZampe: 2 },
    { nome: "Porky Pig", specie: "maiale", numZampe: 4 },
    { nome: "Topolino", specie: "topo", numZampe: 2 },
    { nome: "Pluto", specie: "cane", numZampe: 4 },
    { nome: "Paperino", specie: "anatra", numZampe: 2 },
    { nome: "Pippo", specie: "cane", numZampe: 2 },
    { nome: "Gatto Silvestro", specie: "gatto", numZampe: 4 },
    { nome: "Titti", specie: "uccello", numZampe: 2 },
    { nome: "Pecora Shawn", specie: "pecora", numZampe: 4 },
    { nome: "Cip e Ciop", specie: "scoiattolo", numZampe: 4 },
    { nome: "Pantera Rosa", specie: "pantera", numZampe: 4 },
    { nome: "Gatto Felix", specie: "gatto", numZampe: 4 },
    { nome: "Taz", specie: "diavolo della tasmania", numZampe: 4 },
    { nome: "Snoopy", specie: "cane", numZampe: 4 },
    { nome: "Lupo Alberto", specie: "lupo", numZampe: 4 },
    { nome: "Timon", specie: "suricato", numZampe: 4 },
    { nome: "Pumba", specie: "facocero", numZampe: 4 }
];

const animaliConQuattroZampe = filtraAnimaliPerZampe(animali);
console.log("Animali con 4 zampe: ", animaliConQuattroZampe);
