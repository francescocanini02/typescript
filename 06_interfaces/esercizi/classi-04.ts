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

import { IDimensione, IPosizione, Punto } from "./classi-01.model";
import { MCerchio, MPunto, MRettangolo } from "./classi-04.model";


/**
 * Definisco delle funzioni di utilità per stampare le informazioni delle figure
 * geometriche, sfruttando le interfacce per accedere ai metodi comuni.
 */
function stampaPosizione(nome: string, f: IPosizione, fase: string): void {
    console.log(`[${fase}] ${nome}:`, f);
    console.log(`[${fase}] ${nome} distanza dall'origine:`, f.distanzaDallOrigine());
}

function stampaDimensione(nome: string, d: IDimensione, fase: string): void {
    console.log(`[${fase}] ${nome} perimetro:`, d.getPerimetro());
    console.log(`[${fase}] ${nome} area:`, d.getArea());
}



const p1 = new MPunto(1, 1);
stampaPosizione("punto", p1, "prima");
stampaDimensione("punto", p1, "prima");
p1.moveTo(2, 2);
p1.scaleBy(2);
stampaPosizione("punto", p1, "dopo");
stampaDimensione("punto", p1, "dopo");


const c1 = new MCerchio(new Punto(1, 1), 3);
stampaPosizione("cerchio", c1, "prima");
stampaDimensione("cerchio", c1, "prima");
c1.moveTo(2, 2);
c1.scaleBy(2);
stampaPosizione("cerchio", c1, "dopo");
stampaDimensione("cerchio", c1, "dopo");

const r1 = new MRettangolo(new Punto(1, 1), 3, 4);
stampaPosizione("rettangolo", r1, "prima");
stampaDimensione("rettangolo", r1, "prima");
r1.moveTo(2, 2);
r1.scaleBy(2);
stampaPosizione("rettangolo", r1, "dopo");
stampaDimensione("rettangolo", r1, "dopo");

