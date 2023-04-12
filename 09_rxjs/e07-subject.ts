import { Subscription, Subject, ReplaySubject, BehaviorSubject } from 'rxjs';

console.log('E07SubjectComponent onStart()');

const array = [
  'Luke Skywalker',
  'C-3PO',
  'R2-D2',
  'Darth Vader',
  'Leia Organa',
  'Obi-Wan Kenobi',
  'Anakin Skywalker',
  'Chewbacca',
  'Han Solo',
];

const source$ = new Subject<string>();
const source2$ = new ReplaySubject<string>();
const source3$ = new BehaviorSubject<string>('Star Wars');

// emette i primi 4 elementi dell'array
for (let i = 0; i < Math.min(4, array.length); i++) {
  source$.next(array[i]);
  source2$.next(array[i]);
  source3$.next(array[i]);
}

/* Subscribe */
let source$ub = source$.subscribe(
  (value) => console.log('source$ value: ' + value),
  (error) => console.warn('source$ error: ' + error),
  () => console.log('source$ complete')
  );

let source2$ub = source2$.subscribe(
  (value) => console.log('source2$ value: ' + value),
  (error) => console.warn('source2$ error: ' + error),
  () => console.log('source2$ complete')
  );

let source3$ub = source3$.subscribe(
  (value) => console.log('source3$ value: ' + value),
  (error) => console.warn('source3$ error: ' + error),
  () => console.log('source3$ complete')
  );

// emette i rimanenti elementi dell'array
for (let i = 4; i < array.length; i++) {
  source$.next(array[i]);
  source2$.next(array[i]);
  source3$.next(array[i]);
}
source$.complete();
source2$.complete();
source3$.complete();
