// https://stackblitz.com/edit/typescript-promise-1

interface Persona {
    nome: string;
    cognome: string;
    numeroCasuale: number;
}

const f = (resolve, reject) => {
    // calcolo che impiega del tempo
    // …
    const valore: Persona = {
        nome: "daniele",
        cognome: "arduini",
        numeroCasuale: Math.random()
    };

    if (valore != null) {
        resolve(valore);
    } else {
        reject("Errore nella costruzione del valore");
    }
};

let persona: Persona = null;

// const promise = new Promise<Persona>(f);
const promise = new Promise<Persona>((resolve, reject) => {
    // calcolo che impiega del tempo
    // …
    const valore: Persona = {
        nome: "daniele",
        cognome: "arduini",
        numeroCasuale: Math.random()
    };

    if (valore != null) {
        resolve(valore);
    } else {
        reject("Errore nella costruzione del valore");
    }
});

console.log("ottengo il risultato 1:");

promise.then((risultato: Persona) => {
    console.log("risultato 1 ottenuto: ", risultato);

    persona = risultato;
    persona.nome;
    persona.cognome;
});

console.log("aaaa");

promise.then((risultato2: Persona) => {
    console.log("risultato 2 ottenuto: ", risultato2);
});

promise
    .then(risultato => {
        console.log("risultato 3 ottenuto: ", risultato);
    })
    .catch(error => {
        console.log("risultato 3 in errore: ", error);
    });








/**
 * Funzione che data una persona, va a recuperare l'elenco dei documenti di quella persona
 * @param p 
 * @returns 
 */
function scaricaDocumenti(p: Persona): Promise<string[]> {
    const res = ["doc1", "doc2"];

    // uso la versione semplificata della resolve, perché ho già il risultato
    return Promise.resolve(res);

    // Oppure uso la versione classica della resolve
    //return new Promise<string[]>((resolve, reject) => {
    //    resolve(res);
    //});


    // Oppure in caso di errore:
    //return Promise.reject("Errore di comunicazione con il server");

    // Oppure in caso di errore con Promise esplicita:
    //return new Promise<string[]>((resolve, reject) => {
    //    reject("Errore di comunicazione con il server");
    //});
}


let listaDocumenti: string[] = null;

let promiseDocumenti = promise
    .then(risultato => {
        // console.log("risultato 1 ottenuto +: " + risultato);
        console.log("scarico i documenti: ", risultato);
        let pDocumenti = scaricaDocumenti(risultato);
        return pDocumenti;
    });

promiseDocumenti
    .then(lista => {
        listaDocumenti = lista;
    })
    .catch(error => {
        console.log("risultato in errore: ", error);
    });


if (listaDocumenti != null) {
    console.log("Stampo i documenti da codice globale:");
    for (let i = 0; listaDocumenti != null && i < listaDocumenti.length; i++) {
        const doc = listaDocumenti[i];
        console.log("Documento+: " + doc);
    }
} else {
    console.log(
        "Non posso stampare i documenti da codice globale perché listaDocumenti ancora null:",
        listaDocumenti
    );
}

promiseDocumenti
    .then(lista => {
        console.log("Stampo i documenti da dentro una promise:");
        for (let i = 0; i < lista.length; i++) {
            const doc = lista[i];
            console.log("Documento: " + doc);
        }
    })
    .catch(error => {
        console.error("Errore in promiseDocumenti: " + error);
    });
