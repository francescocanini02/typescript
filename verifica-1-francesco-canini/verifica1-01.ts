function unisciArray(array1: number[], array2: number[]): number[] {
  return [...array1, ...array2];
}
const array1 = [7, 8, 9];
const array2 = [4, 5, 6];
const arrayCombinato = unisciArray(array1, array2);
console.log(arrayCombinato); 
