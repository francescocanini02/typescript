/**
 * ## classi-03.ts
 *
 * Definisci una classe denominata `Rettangolo` per rappresentare un rettangolo
 * in uno spazio bidimensionale.
 * La classe deve contenere le seguenti proprietà: base (numero), altezza (numero).
 * La classe deve contenere un metodo per calcolare l'area del rettangolo.
 * La classe deve contenere un metodo per calcolare il perimetro del rettangolo.
 * Crea un'istanza della classe e stampa l'area e il perimetro del rettangolo.
 *
 * NOTA: La classe `Punto` è già definita nell'esercizio precedente,
         pertanto non duplicate la sua definizione, piuttosto importatela.
 */

import { Punto } from "./classi-01.model";
import { Rettangolo } from "./classi-03.model";

const r1 = new Rettangolo(new Punto(1, 1), 3, 4);

console.log("r1: ", r1);
console.log("distanza r1 dall'origine: ", r1.distanzaDallOrigine());
console.log("area del rettangolo r1: ", r1.getArea());
console.log("perimetro del rettangolo r1: ", r1.getPerimetro());
