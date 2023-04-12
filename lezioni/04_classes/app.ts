/**
 * Definisce la classe Person che conterrà attributi e metodi che rappresentano
 * una persona.
 */
class Person {
    // nome della persona
    name: string;

    // cognome della persona
    public surname: string;

    // tipo della persona
    private type: string;

    // età della persona
    protected age: number;

    // public ... : utilizzabile da tutti, sia all'interno di Person, le sue sotto-classi e l'esterno
    // private ... : utilizzabile solamente all'interno della classe Person
    // protected ... : utilizzabile solamente all'interno della classe Person e da tutte le sotto-classi

    /**
     * Il costruttore è un speciale metodo che viene richiamato alla costruzione dell'oggetto
     * ed ha il compito di inizializzare gli attributi della classe.
     *
     * @param name
     * @param surname
     * @param type
     * @param age
     * @param birthDate
     * @param birthCity
     */
    constructor(
        name: string,
        surname: string,
        type: string = "Teacher",
        age?: number,
        private birthDate: string = "",
        private birthCity: string = ""
    ) {
        console.log("=> Person.constructor(): " + name + " " + surname);

        this.name = name;
        this.surname = surname;

        // se non fornito dall'utente nel costruttore, si utilizza il valore predefinito 'Teacher'
        this.type = type;

        if (age != null && age > 0) {
            this.age = age;
        } else {
            this.age = 0;
        }
    }

    /**
     * Getter per l'attributo 'type'
     */
    getType(): string {
        return this.type;
    }

    /**
     * Getter per l'attributo 'age'
     */
    getAge(): number {
        return this.age;
    }

    /**
     * Setter per l'attributo 'age'
     */
    setAge(newAge: number): void {
        if (newAge != null && newAge > 0) {
            this.age = newAge;
        } else {
            console.warn(
                "setAge(): impostato un valore non corretto: " + newAge
            );
        }
    }

    /**
     * Getter per l'attributo 'birthDate'
     */
    getBirthDate(): string {
        return this.birthDate;
    }

    /**
     * Getter per l'attributo 'birthCity'
     */
    getBirthCity(): string {
        return this.birthCity;
    }

    // TODO: implementare il calcolo del codice fiscale
    getFiscalCode(): string {
        return "XXXYYYAAMDDCCCCZ";
    }

    /**
     * Speciale metodo utilizzato dal compilatore quando deve convertire l'oggetto in
     * string, ad esempio nelle concatenazioni utilizzate nei console.log()
     */
    toString(): string {
        console.log("=> Person.toString(): " + this.name + " " + this.surname);
        return this.name + " " + this.surname;
    }

    static stampaAttributi(p: Person): void {
        console.log("name: " + p.name);
    }
}

let person1: Person = new Person(
    "Simone",
    "Rossi",
    "Student",
    50,
    "13/04/1970",
    "Rimini"
);
console.log("person1 name: " + person1.name);
console.log("person1 surname: " + person1.surname);
console.log("person1 type: " + person1.getType());
console.log("person1 age: " + person1.getAge());
console.log("person1 codice fiscale: " + person1.getFiscalCode());
console.log("person1 birthDate: " + person1.getBirthDate());
console.log("person1 birthCity: " + person1.getBirthCity());

let person2: Person = new Person(
    "Carlo",
    "Bianchi",
    "Student",
    0,
    "21/06/1985",
    "Riccione"
);
person2.setAge(35);
person2.setAge(-10);

console.log("person2 name: " + person2.name);
console.log("person2 surname: " + person2.surname);
console.log("person2 type: " + person2.getType());
console.log("person2 age: " + person2.getAge());
console.log("person2 codice fiscale: " + person2.getFiscalCode());
console.log("person2 birthDate: " + person2.getBirthDate());
console.log("person2 birthCity: " + person2.getBirthCity());

// quando il compilatore deve concatenare una stringa con un oggetto
// tenta di convertire l'oggetto in stringa utilizzando la funzione toString()
// dell'oggetto. Se tale funzione non è presente il browser trasformerà l'oggetto
// nella stringa '[object Object]'.
console.log("person1: " + person1.toString());
console.log("person2: " + person2);

let person3: Person = new Person("Filippo", "Bianchi");

/**
 * Classe che estende la definizione di classe Person aggiungendo
 * l'attributo 'company'
 */
class PersonWorker extends Person {
    /**
     * Costruttore della classe PersonWorker: viene ridefinito per poter gestire anche
     * il nuovo attributo 'company'
     *
     * @param name
     * @param surname
     * @param type
     * @param age
     * @param birthDate
     * @param birthCity
     * @param company
     */
    constructor(
        name: string,
        surname: string,
        type?: string,
        age?: number,
        birthDate?: string,
        birthCity?: string,
        private company: string = ""
    ) {
        // come prima istruzione deve essere chiamato il costruttore della classe padre
        super(name, surname, type, age, birthDate, birthCity);
        console.log(
            "=> PersonWorker.constructor(): " + this.name + " " + this.surname
        );

        // inserire qui eventuali altre istruzioni per inizializzare questa classe
    }

    getCompany(): string {
        return this.company;
    }

    setCompany(company: string): void {
        this.company = company;
    }

    toString(): string {
        console.log(
            "=> PersonWorker.toString(): " + this.name + " " + this.surname
        );
        let result = super.toString();
        return result + " lavora in " + this.company;
    }
}

let worker1: PersonWorker = new PersonWorker(
    "Franco",
    "Neri",
    "Worker",
    40,
    "21/06/1980",
    "Cattolica",
    "01Sistemi"
);

console.log("worker1: " + worker1.toString());

