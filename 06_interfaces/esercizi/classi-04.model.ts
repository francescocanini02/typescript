/**
 * ## classi-04.ts
 *
 * Definire le classi `MPunto`, `MCerchio` e `MRettangolo` come versioni
 * estese delle rispettive classi `Punto`, `Cerchio` e `Rettangolo` definite
 *  negli esercizi precedenti.
 *
 * Le classi estese devono implementare un'interfaccia comune `IMovable`
 * che consente il posizionamento nello spazio bidimensionale
 * delle figure geometriche attraverso la chiamata al metodo moveTo(x1, y2).
 *
 * ```
 * interface IMovable {
 *    moveTo(x: number, y: number): void;
 * }
 * ```
 *
 * Le classi estese devono implementare un'interfaccia comune `IScalable`
 * che consente di moltiplicare le dimensioni delle figure geometriche di un
 *  fattore numerico, attraverso la chiamata al metodo scaleBy(factor).
 *
 * ```
 * interface IScalable {
 *    scaleBy(factor: number): void;
 * }
 * ```
 *
 * Creare un'istanza di ogni classe e posizionarla nello spazio bidimensionale
 * attraverso la chiamata al metodo moveTo(x1, y2), modificare le dimensioni
 * attraverso la chiamata al metodo scaleBy(factor) e stampare le informazioni
 * relative alle figure geometriche.
 */

import { Punto } from "./classi-01.model";
import { Cerchio } from "./classi-02.model";
import { Rettangolo } from "./classi-03.model";

export interface IMovable {
    moveTo(x: number, y: number): void;
}

export interface IScalable {
    scaleBy(factor: number): void;
}


export class MPunto extends Punto implements IMovable, IScalable {

    moveTo(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    // Il punto non ha dimensioni, quindi non ha senso scalare un punto
    scaleBy(factor: number): void {
    }
}


export class MCerchio extends Cerchio implements IMovable, IScalable {

    moveTo(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    scaleBy(factor: number): void {
        this.raggio *= factor;
    }
}


export class MRettangolo extends Rettangolo implements IMovable, IScalable {

    moveTo(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    scaleBy(factor: number): void {
        this.base *= factor;
        this.altezza *= factor;
    }
}
