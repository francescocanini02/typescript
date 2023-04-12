import { Persona } from "./classi";
import * as Circle from "./math/circle";
import calc from "./math/rectangle";
import { StampanteEtichette } from "./stampa-etichette";

console.log(Circle.PI);
console.log(Circle.calculateCirumcumference(10));
console.log(Circle.calculateArea(10));

console.log(calc(20, 50));

let p: Persona = new Persona("Daniele", "Arduini");

let stampante = new StampanteEtichette(p);
