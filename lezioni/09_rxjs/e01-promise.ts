/**
 * Esempio di gestione di un evento con la Promise
 *
 * E' possibile gestire un solo evento, perché la Promise
 * una volta che entra nello stato 'resolve' o 'reject' ci rimane per sempre
 */

console.log('E01Promise onStart()');

/*
 * creo una Promise che dopo 2 secondi fornisce una stringa
 */
const p = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
      if (Math.random() > 0.7) {
        reject("Ho generato un errore!");
      } else {
        resolve('Hello from Promise!');
      }
  }, 2000);
});

/*
 * Chiedo alla Promise di essere avvisato quando arriva il valore
 * oppure si verifica un errore
 */
p.then(value => console.log(value))
 .catch(error => console.error("Errore dalla Promise: " + error));
