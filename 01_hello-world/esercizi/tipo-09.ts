/**
 *  - tipo-09.ts
 *
 * Definisci un tipo di dato primitivo per rappresentare un indirizzo email.
 * L'input dovrebbe essere una stringa con il formato "nomeutente@dominio.com".
 * Crea una funzione che accetta un indirizzo email come parametro
 * e restituisce true se il formato è corretto e false altrimenti.
 */

console.log('=======[ tipo-09.ts ]=======');

type Email = string;

function validateEmail(email: Email): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Esempi di utilizzo
const email1: Email = "daniele.arduini@01s.it";
console.log(`L'email ${email1} è valida? ${validateEmail(email1)}`);

const email2: Email = "daniele.arduini01s.it";
console.log(`L'email ${email2} è valida? ${validateEmail(email2)}`);

const email3: Email = "daniele.arduini@01s";
console.log(`L'email ${email3} è valida? ${validateEmail(email3)}`);
