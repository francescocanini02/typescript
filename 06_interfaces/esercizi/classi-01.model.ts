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


export interface IPosizione {
    distanzaDallOrigine(): number;
    distanzaDalPunto(p: Punto): number;
}

/**
 * Tutte le classi che implementano questa interfaccia
 * hanno una dimensione (area e perimetro)
 */
export interface IDimensione {
    getArea(): number;
    getPerimetro(): number;
}


export class Punto implements IPosizione, IDimensione {
    constructor(
        public x: number,
        public y: number) {
    }

    distanzaDalPunto(p: Punto): number {
        const dx = this.x - p.x;
        const dy = this.y - p.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    distanzaDallOrigine(): number {
        return this.distanzaDalPunto(new Punto(0, 0));
    }

    /**
     * Il punto non ha area
     */
    getArea(): number {
        return 0;
    }

    /**
     * Il punto non ha perimetro
     */
    getPerimetro(): number {
        return 0;
    }

}
