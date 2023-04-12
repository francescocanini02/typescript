/**
 *   - tipo-02.ts
 *
 * Crea un tipo di dato enum per rappresentare i giorni
 * della settimana. Scrivi una funzione che accetta un
 *  giorno della settimana come parametro e stampa
 *  un messaggio di saluto appropriato in base al giorno.
 */

console.log("=====[ tipo-02.ts ]=====");

/**enum contiene i giorni della settimana */
enum Settimana {
    Lunedi = "lunedì",
    Martedi = "martedì",
    Mercoledi = "mercoledì",
    Giovedi = "giovedì",
    Venerdi = "venerdì",
    Sabato = "sabato",
    Domenica = "domenica",
}

/**Scrivi una funzione che accetta un
 *  giorno della settimana come parametro e stampa
 *  un messaggio di saluto appropriato in base al giorno. */
function stampaSalutoQuotidiano(g: Settimana): void {
    // uso una serie di if per determinare il giorno

    if (g == Settimana.Lunedi) {
        console.log("Buongiorno è lunedì");
    } else if (g == Settimana.Martedi) {
        console.log("Buongiorno è martedì");
    } else if (g == Settimana.Mercoledi) {
        console.log("Buongiorno è mercoledi");
    } else if (g == Settimana.Giovedi) {
        console.log("Buongiorno è giovedì");
    } else if (g == Settimana.Venerdi) {
        console.log("Grazie a Dio è venerdì");
    } else if (g == Settimana.Sabato) {
        console.log("Buongiorno è sabato");
    } else {
        console.log("Buongiorno è domenica");
    }
}

let giorno1 = Settimana.Venerdi;
stampaSalutoQuotidiano(giorno1);

/**giorno1 ti stampa l'indice numerico di enum di default, altrimenti puoi
 * associare ad un elemento di enum una stringa*/
console.log("giorno1 è: ", giorno1);

/*faccio la stessa cosa con lo switch*/
function stampaSalutoGiornoConSwitch(g: Settimana): void {
    switch (g) {
        case Settimana.Lunedi:
            console.log("è " + Settimana.Lunedi);
            break;
        case Settimana.Martedi:
            console.log("è " + Settimana.Martedi);
            break;
        case Settimana.Mercoledi:
            console.log("è " + Settimana.Mercoledi);
            break;
        case Settimana.Giovedi:
            console.log("è " + Settimana.Giovedi);
            break;
        case Settimana.Venerdi:
            console.log("è " + Settimana.Venerdi);
            break;
        case Settimana.Sabato:
            console.log("è " + Settimana.Sabato);
            break;
        case Settimana.Domenica:
            console.log("è " + Settimana.Domenica);
            break;
    }
}

stampaSalutoGiornoConSwitch(giorno1);
