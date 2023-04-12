/**
 *   - tipo-04.ts
 *
 * Definisci un tipo di dato per rappresentare un numero di telefono.
 * L'input dovrebbe essere una stringa con il formato "xxx-xxx-xxxx",
 * dove "x" rappresenta un cifra numerica. Crea una funzione che accetta
 * un numero di telefono come parametro e restituisce true se il formato
 * è corretto e false altrimenti.
 */

console.log("=====[ tipo-04.ts ]=====");

function validaTelefono_old(telefono: string): boolean {
    if (telefono.length === 12
        && telefono.substring(3, 4) === "-"
        && telefono.substring(7, 8) === "-"
        && (telefono.substring(0, 3)).match("[0-9]{3}")
        && (telefono.substring(4, 7)).match("[0-9]{3}")
        && (telefono.substring(8, 12)).match("[0-9]{4}")) {
        return true;
    } else {
        return false;
    }
}

function validaTelefono(telefono: string): boolean {
    if (telefono.length === 12
        && (telefono.match("[0-9]{3}-[0-9]{3}-[0-9]{4}"))) {
        return true;
    } else {
        return false;
    }
}

let telefono1 = "123-456-7890";     // true
let telefono2 = "12A-456-7890";      // false
let telefono3 = "123-45B-7890";    // false

console.log(validaTelefono(telefono1));
console.log(validaTelefono(telefono2));
console.log(validaTelefono(telefono3));
