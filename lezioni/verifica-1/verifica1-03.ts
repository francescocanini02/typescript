function tuttoInMaiuscolo(arrayDiStringhe: string[]): string[] {
    const arrayInMaiuscolo: string[] = [];
  
    for (let str of arrayDiStringhe) {
      arrayInMaiuscolo.push(str.toUpperCase());
    }
  
    return arrayInMaiuscolo;
  }
  const arrayDiStringhe: string[] = ["sono", "francesco", "canini"];
const arrayInMaiuscolo: string[] = tuttoInMaiuscolo(arrayDiStringhe);

console.log(arrayInMaiuscolo);

