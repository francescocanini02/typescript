/**
 * ### promise-01.ts
 *
 * Implementare la seguente funzione che restituisce una Promise di un numero casuale tra 1 e 10.
 * Utilizzo del metodo then() per stampare il numero in console.
 *
 * function getRandomNumber01(): Promise<number> {
 *     // TODO
 * }
 */

function getRandomNumber01(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        const numeroCasuale = Math.floor(Math.random() * 10) + 1;
        resolve(numeroCasuale);
    });
}

const pNumber01 = getRandomNumber01();
pNumber01.then(numero => {
    console.log("numero ottenuto: ", numero);
});

