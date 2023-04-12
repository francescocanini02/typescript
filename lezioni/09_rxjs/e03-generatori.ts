import { interval, Subscription, from } from 'rxjs';

console.log('E03GeneratoriComponent onStart() START');

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
]);

arraySource$.subscribe(
  (value) => console.log('arraySource$ value: ' + value),
  (error) => console.warn('arraySource$ error: ' + error),
  () => console.log('arraySource$ complete'),
);



/* genera un evento ad ogni intervallo di periodo 1000 ms = 1 s */
const source$ = interval(1000);

/* Subscribe */
let source$ub = source$.subscribe(
  (value) => console.log('source$ value: ' + value),
  (error) => console.warn('source$ error: ' + error),
  () => console.log('source$ complete')
  );

console.log('E03GeneratoriComponent onStart() END');
