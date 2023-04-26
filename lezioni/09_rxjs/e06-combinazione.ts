import { from, interval, Subscription, concat, merge } from 'rxjs';
import { map } from 'rxjs/operators';

console.log('E06CombinazioneComponent onStart()');

const arraySource1$ = from([
  'Luke Skywalker',
  'C-3PO',
  'R2-D2',
  'Darth Vader',
]).pipe(
  map(x => '1: ' + x)
);
const arraySource2$ = from([
  'Leia Organa',
  'Obi-Wan Kenobi',
  'Anakin Skywalker',
  'Chewbacca',
  'Han Solo',
]).pipe(
  map(x => '2: ' + x)
);

const arraySource$ = concat(
  arraySource1$,
  arraySource2$
);

arraySource$.subscribe(
  (value) => console.log('arraySource$ value: ' + value),
  (error) => console.warn('arraySource$ error: ' + error),
  () => console.log('arraySource$ complete'),
);



/* genera un evento ad ogni intervallo di periodo 1000 ms = 1 s */
const source1$ = interval(1000).pipe(map(x => '1: ' + x));
const source2$ = interval(1200).pipe(map(x => '2: ' + x));
const source3$ = interval(1400).pipe(map(x => '3: ' + x));
const source4$ = interval(1600).pipe(map(x => '4: ' + x));

const source$ = merge(
  source1$,
  source2$,
  source3$,
  source4$
);

/* Subscribe */
let source$ub = source$.subscribe(
  (value) => console.log('source$ value: ' + value),
  (error) => console.warn('source$ error: ' + error),
  () => console.log('source$ complete')
  );
