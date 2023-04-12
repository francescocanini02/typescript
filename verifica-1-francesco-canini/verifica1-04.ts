function convertiInLinguaNumeroX(numero: number, lingua: string): string {
    if (lingua === 'it') {
      switch (numero) {
        case 0:
          return 'zero';
        case 1:
          return 'uno';
        case 2:
          return 'due';
        case 3:
          return 'tre';
        case 4:
          return 'quattro';
        case 5:
          return 'cinque';
        case 6:
          return 'sei';
        case 7:
          return 'sette';
        case 8:
          return 'otto';
        case 9:
          return 'nove';
        default:
          return 'Numero non valido';
      }
    } else if (lingua === 'en') {
      switch (numero) {
        case 0:
          return 'zero';
        case 1:
          return 'one';
        case 2:
          return 'two';
        case 3:
          return 'three';
        case 4:
          return 'four';
        case 5:
          return 'five';
        case 6:
          return 'six';
        case 7:
          return 'seven';
        case 8:
          return 'eight';
        case 9:
          return 'nine';
        default:
          return 'Number not valid';
      }
    } else {
      return 'Lingua non valida';
    }
  }
  console.log(convertiInLinguaNumeroX(8, 'it')); 
console.log(convertiInLinguaNumeroX(8, 'en')); 
