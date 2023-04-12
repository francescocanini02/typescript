/**
 * ### promise-02.ts
 *
 * Con riferimento all'esercizio precedente, modificare l'implementazione della funzione
 * in modo tale che se il numero casuale è minore o uguale a 5 la Promise viene risolta
 * con il numero stesso, altrimenti viene rifiutata con un messaggio di errore.
 * Utilizzo del metodo then() per stampare il numero in console o il metodo catch() per
 * stampare il messaggio di errore.
 *
 * function getRandomNumber02(): Promise<number> {
 *     // TODO
 * }
 */

function getRandomNumber02(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        const numeroCasuale = Math.floor(Math.random() * 10) + 1;
        if (numeroCasuale <= 5) {
            resolve(numeroCasuale);
        } else {
            reject("Errore: ottenuto numero maggiore di 5");
        }
    });
}

const pNumber02 = getRandomNumber02();
pNumber02
    .then(numero => {
        console.log("numero ottenuto: ", numero);
    })
    .catch(error => {
        console.error("errore: ", error);
    });
