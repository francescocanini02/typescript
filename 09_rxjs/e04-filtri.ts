import { from, interval, Subscription } from 'rxjs';
import { filter, skip, take } from 'rxjs/operators';

console.log('E04FiltriComponent onStart()');

const arraySource$ = from([
  'Luke Skywalker',
  'C-3PO',
  'R2-D2',
  'Darth Vader',
  'Leia Organa',
  'Obi-Wan Kenobi',
  'Anakin Skywalker',
  'Chewbacca',
  'Han Solo'
]).pipe(
  skip(2),
  filter(x => x.length > 8),
  take(4)
);

arraySource$.subscribe(
  (value) => console.log('arraySource$ value: ' + value),
  (error) => console.warn('arraySource$ error: ' + error),
  () => console.log('arraySource$ complete'),
);



/* genera un evento ad ogni intervallo di periodo 1000 ms = 1 s */
const source$ = interval(1000).pipe(
  filter(x => x % 2 === 0),
  skip(2),
  take(4)
);

/* Subscribe */
let source$ub = source$.subscribe(
  (value) => console.log('source$ value: ' + value),
  (error) => console.warn('source$ error: ' + error),
  () => console.log('source$ complete')
  );

