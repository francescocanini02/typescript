// non esporto nulla da questo file
// per evitare conflitti con altri file di esempio che contengono le stesse variabili/tipi
export {};

// NOTA:
// Il TypeScript, come il JavaScript, è "case-sensitive", distigue cioè le minuscole dalle maiuscole.
// Per evitare di fare confusione, nel codice si usa la convenzione di utilizzare i nomi di variabile
// che iniziano per minuscola, i nomi dei tipi (o classi) iniziano per maiuscola, le costanti globali
// sono tutte maiuscole, le costanti locali come le variabili
//
// let variabileConPiuParole: string = 'valore assegnato';
// let oggetto: TipoDiDato = { ... };
// const VALORE_GLOBALE = 100;
// const costanteLocale = 42;
//

// definisco il tipo BankAccount
type BankAccount = {
    money: number,
    deposit: (v:number) => void
};

let bankAccount: BankAccount;

bankAccount = {
    money: 2000,
    deposit(value){
        this.money += value;
    }
};

// definisco il tipo User
type User = {
    name: string,
    bankAccount: BankAccount,
    hobbies: string[]
};

let myself: User;
myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
console.log(myself.bankAccount.money);
