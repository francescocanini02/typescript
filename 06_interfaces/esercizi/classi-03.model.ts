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

/**
 * Il rettangolo è una figura con l'origine in basso a sinistra.
 * Il rettangolo ha una dimensione definita da base e altezza.
 */
export class Rettangolo extends Punto {

    constructor(origine: Punto,
        public base: number,
        public altezza: number) {

        if ( origine == null ) {
            origine = new Punto(0, 0);
        }
        super(origine.x, origine.y);
    }

    getArea(): number {
        return this.base * this.altezza;
    }

    getPerimetro(): number {
        return (this.base + this.altezza) * 2;
    }
}
