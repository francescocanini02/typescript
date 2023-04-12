/**
 * ## classi-02.ts
 *
 * Definisci una classe denominata `Cerchio` per rappresentare un cerchio
 * in uno spazio bidimensionale.
 *
 * La classe deve contenere le seguenti proprietà:
 * centro (istanza della classe `Punto`),
 * raggio (numero).
 *
 * La classe deve contenere un metodo per calcolare l'area del cerchio.
 * La classe deve contenere un metodo per calcolare la lunghezza del cerchio.
 * Crea un'istanza della classe e stampa l'area e la lunghezza del cerchio.
 *
 * NOTA: La classe `Punto` è già definita nell'esercizio precedente,
 *       pertanto non duplicate la sua definizione, piuttosto importatela.
 *
 */

import { Punto } from "./classi-01.model";


/**
 * Il cerchio è un punto con un raggio, quindi estende la classe Punto.
 * Il cerchio ha una dimensione, quindi implementa l'interfaccia IDimensione.
 */
export class Cerchio extends Punto {
    constructor(
        centro: Punto,
        public raggio: number) {

        super(centro.x, centro.y);
    }

    getArea(): number {
        return Math.pow(this.raggio, 2) * Math.PI;
    }

    getPerimetro(): number {
        return 2 * this.raggio * Math.PI;
    }

}
