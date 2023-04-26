Esercitazioni TypeScript: classi, interfacce e moduli
=====================================================

Ecco alcuni esercizi per fare pratica con le classi, interfacce e moduli.

Prima della scrittura del codice, preparate la cartella di lavoro:

  1. Create una cartella denominata "esercizi-classi-XXXXXX-YYYYY",
     dove XXXXXX è il vostro nome e YYYYY è il vostro cognome
  2. Create all'interno della cartella i parametri di configurazione per
     il compilatore TypeScript (tsconfig.json)


Per ogni esercizio:

  1. Inserite il codice della soluzione all'interno del rispettivo file .ts
  2. Eseguite la compilazione per generare il corrispondente file .js
  3. Eseguire il codice .js con "node"


Consegnate un unico archivio .zip contenente tutti i file.


Elenco esercizi:

## Premessa

All'interno di una libreria si vogliono modellare le figure geometriche
nel piano cartesiano.
Ogni figura geometrica avrà sempre una posizione nel piano cartesiano,
la cui distanza dall'origine o da un qualsiasi altro punto è determinabile
chiamando i rispettivi metodi dell'interfaccia comune a tutte le figure geometriche:

```
export interface IPosizione {
    distanzaDallOrigine(): number;
    distanzaDalPunto(p: Punto): number;
}
```

Le figure avranno anche una loro dimensione nel piano, misurabile in base
attraverso il primetro e l'area occupata, determinabile chiamando i rispettivi
metodi dell'interfaccia comune a tutte le figure geometriche:

```
export interface IDimensione {
    getArea(): number;
    getPerimetro(): number;
}
```

NOTA: il Punto avrà sempre perimetro ed area pari a zero.

Le figure geometriche sono:

  * Punto
  * Cerchio
  * Rettangolo




## classi-01.ts

Definisci una classe denominata `Punto` per rappresentare un punto in uno spazio bidimensionale. La classe deve contenere le seguenti proprietà: x (numero), y (numero). La classe deve contenere un metodo per calcolare la distanza tra il punto e l'origine (0, 0). La classe deve contenere un metodo per calcolare la distanza tra il punto e un altro punto passato come parametro. Crea un'istanza della classe e stampa la distanza tra il punto e l'origine e la distanza tra il punto e un altro punto.


## classi-02.ts

Definisci una classe denominata `Cerchio` per rappresentare un cerchio in uno spazio bidimensionale. La classe deve contenere le seguenti proprietà: centro (istanza della classe `Punto`), raggio (numero). La classe deve contenere un metodo per calcolare l'area del cerchio. La classe deve contenere un metodo per calcolare la lunghezza del cerchio. Crea un'istanza della classe e stampa l'area e la lunghezza del cerchio.

NOTA: La classe `Punto` è già definita nell'esercizio precedente, pertanto non duplicate la sua definizione, piuttosto importatela.


## classi-03.ts

Definisci una classe denominata `Rettangolo` per rappresentare un rettangolo in uno spazio bidimensionale. La classe deve contenere le seguenti proprietà: base (numero), altezza (numero). La classe deve contenere un metodo per calcolare l'area del rettangolo. La classe deve contenere un metodo per calcolare il perimetro del rettangolo. Crea un'istanza della classe e stampa l'area e il perimetro del rettangolo.

NOTA: La classe `Punto` è già definita nell'esercizio precedente, pertanto non duplicate la sua definizione, piuttosto importatela.


## classi-04.ts

Definire le classi `MPunto`, `MCerchio` e `MRettangolo` come versioni estese delle rispettive classi `Punto`, `Cerchio`
e `Rettangolo` definite negli esercizi precedenti.
Le classi estese devono implementare una interfaccia comune `IMovable` che consente il posizionamento nello spazio bidimensionale
delle figure geometriche attraverso la chiamata al metodo moveTo(x1, y2).

```
interface IMovable {
    moveTo(x: number, y: number): void;
}
```

Le classi estese devono implementare una interfaccia comune `IScalable` che consente di moltiplicare le dimensioni 
delle figure geometriche di un fattore numerico, attraverso la chiamata al metodo scaleBy(factor).

```
interface IScalable {
    scaleBy(factor: number): void;
}
```

Creare un'istanza di ogni classe e posizionarla nello spazio bidimensionale attraverso la chiamata al metodo moveTo(x1, y2), modificare le dimensioni attraverso la chiamata al metodo scaleBy(factor) e stampare le informazioni relative alle figure geometriche.
