import { Observable } from "rxjs";

console.log('E02ObservableComponent onStart()');

/* crea un nuovo observable, dato un observer. */
const observable$: Observable<string> = new Observable<string>(observer => {
  let limite = 0;

  const interval = setInterval(() => {
    observer.next('Hello from Observable! (' + limite + ')');
    limite++;

    // simulo il verificarsi di un errore all'interno dell'Observable
    if (limite > 5) {
      observer.error('Superato il limite!');
    }
  }, 2000);

  // per unsubscribe()
  return () => {
    clearInterval(interval);
  };
});


/* Subscribe */
let observable$ub = observable$.subscribe(
  (value) => console.log(value),
  (error) => console.warn('Intercettato Errore per eventuale gestione: ' + error),
  () => console.log("Completato!")
);


    // Gli Observable sono funzioni che prendono un observer e ritornano una funzione
