// PUNTO A

class Accumulatore1 {
    private carica1: number = 0;
  
    carica(n: number): void {
      this.carica1 = Math.min(this.carica1 + n, 5000);
    }
  
    scarica(n: number): void {
      this.carica1 = Math.max(this.carica1 - n, 0);
    }
  
    livello(): number {
      return this.carica1;
    }
  
    livello100(): number {
      return (this.carica1 / 5000) * 100;
    }
  }
  const batteria1 = new Accumulatore1();
batteria1.carica(2800);
console.log(batteria1.livello()); 
batteria1.scarica(300);
console.log(batteria1.livello()); 
console.log(batteria1.livello100()); 


// PUNTO B

class AccumulatoreParametrizzato {
    private carica2: number = 0;
    private readonly valoreMassimo: number;
  
    constructor(valoreMassimo: number) {
      this.valoreMassimo = valoreMassimo;
    }
  
    carica(n: number): void {
      this.carica2 = Math.min(this.carica2 + n, this.valoreMassimo);
    }
  
    scarica(n: number): void {
      this.carica2 = Math.max(this.carica2 - n, 0);
    }
  
    livello(): number {
      return this.carica2;
    }
  
    livello100(): number {
      return (this.carica2 / this.valoreMassimo) * 100;
    }
  }
  
  const batteria2 = new AccumulatoreParametrizzato(5000);
batteria2.carica(2800);
console.log(batteria2.livello()); 
batteria2.scarica(300);
console.log(batteria2.livello()); 
console.log(batteria2.livello100()); 



