/**
 *   - tipo-07.ts
 *
 * Definisci un tipo di dato primitivo per rappresentare un'ora del giorno.
 * L'input dovrebbe essere una stringa con il formato "hh:mm",
 * dove "hh" rappresenta le ore e "mm" rappresenta i minuti.
 * Crea una funzione che accetta un'ora del giorno come parametro e
 * restituisce una stringa che indica se l'ora è del mattino, del pomeriggio o della sera.
 */

console.log('=======[ tipo-07.ts ]=======');

type Ora = string; // Tipo di dato primitivo per rappresentare un'ora del giorno

enum FaseGiornata {
    NOTTE = "della notte",
    MATTINO = "del mattino",
    POMERIGGIO = "del pomeriggio",
    SERA = "della sera"
}

function verificaFasciaOraria(ora: Ora): FaseGiornata {
    const oraMin: number[] = ora.split(":").map((x) => parseInt(x)); // Estrarre le ore e i minuti come numeri
    if (oraMin[0] >= 0 && oraMin[0] < 6) {
        return FaseGiornata.NOTTE;
    } else if (oraMin[0] >= 6 && oraMin[0] < 12) {
        return FaseGiornata.MATTINO;
    } else if (oraMin[0] >= 12 && oraMin[0] < 18) {
        return FaseGiornata.POMERIGGIO;
    } else {
        return FaseGiornata.SERA;
    }
}

// Esempi di utilizzo
const ora1: Ora = "08:30";
console.log(`L'ora ${ora1} è ${verificaFasciaOraria(ora1)}`);
// stampa "L'ora 08:30 è del mattino"

const ora2: Ora = "15:45";
console.log(`L'ora ${ora2} è ${verificaFasciaOraria(ora2)}`);
// stampa "L'ora 15:45 è del pomeriggio"

const ora3: Ora = "21:00";
console.log(`L'ora ${ora3} è ${verificaFasciaOraria(ora3)}`);
// stampa "L'ora 21:00 è della sera"
