import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

console.log('E05TrasformazioneComponent onStart()');

const arraySource$ = from([
  'Luke Skywalker',
  'C-3PO',
  'R2-D2',
  'Darth Vader',
  'Leia Organa',
  'Obi-Wan Kenobi',
  'Anakin Skywalker',
  'Chewbacca',
  'Han Solo',
]).pipe(
  map(x => x.toUpperCase()),
);

arraySource$.subscribe(
  (value) => console.log('arraySource$ value: ' + value),
  (error) => console.warn('arraySource$ error: ' + error),
  () => console.log('arraySource$ complete'),
);



/* genera un evento ad ogni intervallo di periodo 1000 ms = 1 s */
const source$ = interval(1000).pipe(
  map(x => x * x),
);

/* Subscribe */
let source$ub = source$.subscribe(
  (value) => console.log('source$ value: ' + value),
  (error) => console.warn('source$ error: ' + error),
  () => console.log('source$ complete')
  );
