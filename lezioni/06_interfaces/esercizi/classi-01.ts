/**
 * ## classi-01.ts
 *
 * Definisci una classe denominata `Punto` per rappresentare un punto
 * in uno spazio bidimensionale.
 *
 * La classe deve contenere le seguenti proprietà: x (numero), y (numero).
 *
 * La classe deve contenere un metodo per calcolare la distanza tra il punto
 * e l'origine (0, 0).
 *
 * La classe deve contenere un metodo per calcolare la distanza tra il punto
 * e un altro punto passato come parametro.
 *
 * Crea un'istanza della classe e stampa la distanza tra il punto e l'origine
 * e la distanza tra il punto e un altro punto.
 */


import {Punto} from "./classi-01.model";


const p1 = new Punto(1, 1);
const p2 = new Punto(2, 3);

console.log("p1: ", p1);
console.log("p2: ", p2);
console.log("distanza p1 dall'origine: ", p1.distanzaDallOrigine());
console.log("distanza p1 dal punto p2: ", p1.distanzaDalPunto(p2));
console.log("area del punto p1: ", p1.getArea());
console.log("perimetro del punto p1: ", p1.getPerimetro());
