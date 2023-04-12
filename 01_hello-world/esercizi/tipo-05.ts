/**
 *   - tipo-05.ts
 *
 * Definisci un tipo di dato per rappresentare un punteggio.
 * Il punteggio dovrebbe essere un numero compreso tra 0 e 100.
 * Crea una funzione che accetta un punteggio come parametro e
 * restituisce una stringa che indica se il punteggio è
 * insufficiente, sufficiente, buono o eccellente.
 */

console.log('=======[ tipo-05.ts ]=======');

type Punteggio = number; // definizione del tipo di dato

enum Valutazione {
    INSUFFICIENTE = "insufficiente",
    SUFFICIENTE = "sufficiente",
    BUONO = "buono",
    ECCELLENTE = "eccellente"
}

function valutaPunteggio(punteggio: Punteggio): Valutazione {
  if (punteggio < 60) {
    return Valutazione.INSUFFICIENTE;
  } else if (punteggio >= 60 && punteggio < 70) {
    return Valutazione.SUFFICIENTE;
  } else if (punteggio >= 70 && punteggio < 90) {
    return Valutazione.BUONO;
  } else {
    return Valutazione.ECCELLENTE;
  }
}

// Esempio di utilizzo
const punteggio1: Punteggio = 75;
const punteggio2: Punteggio = 95;
const punteggio3: Punteggio = 40;

console.log("Valuto il punteggio di ", punteggio1, valutaPunteggio(punteggio1)); // stampa "buono"
console.log("Valuto il punteggio di ", punteggio2, valutaPunteggio(punteggio2)); // stampa "eccellente"
console.log("Valuto il punteggio di ", punteggio3, valutaPunteggio(punteggio3)); // stampa "insufficiente"

