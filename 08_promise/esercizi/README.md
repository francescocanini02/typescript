Esercitazioni TypeScript: Promise
=================================

Ecco alcuni esercizi per fare pratica con le Promise.

Prima della scrittura del codice, preparate la cartella di lavoro:

1. Create una cartella denominata "esercizi-classi-XXXXXX-YYYYY",
   dove XXXXXX è il vostro nome e YYYYY è il vostro cognome

2. Create all'interno della cartella i parametri di configurazione per
   il compilatore TypeScript (tsconfig.json)


Per ogni esercizio:

1. Inserite il codice della soluzione all'interno del rispettivo file .ts
2. Eseguite la compilazione per generare il corrispondente file .js
3. Eseguire il codice .js con "node"


Consegnate un unico archivio .zip contenente tutti i file.


Elenco esercizi:
----------------

### promise-01.ts

Implementare la seguente funzione che restituisce una Promise di un numero casuale tra 1 e 10.
Utilizzo del metodo then() per stampare il numero in console.

function getRandomNumber01(): Promise<number> {
    // TODO
}


### promise-02.ts

Con riferimento all'esercizio precedente, modificare l'implementazione della funzione
in modo tale che se il numero casuale è minore o uguale a 5 la Promise viene risolta
con il numero stesso, altrimenti viene rifiutata con un messaggio di errore.
Utilizzo del metodo then() per stampare il numero in console o il metodo catch() per
stampare il messaggio di errore.

function getRandomNumber02(): Promise<number> {
    // TODO
}


### promise-03.ts

La funzione fornita qui sotto esegue una richiesta HTTP GET a un endpoint API REST
restituendo Una Promise di un oggetto JSON che rappresenta una pagina di elenco utenti.

Estraete dalla Promise l'elenco degli utenti in un array di oggetti "User"
per stamparne il contenuto in console.

```typescript
// interfaccia come da formato dell'oggetto JSON restituito dall'endpoint API REST
// consultabile nella documentazione all'URL https://reqres.in/, https://reqres.in/api-docs/

interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface UserListResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
    support: {
        url: string;
        text: string;
    }
}


function getUserList(): Promise<UserListResponse> {
    return fetch('https://reqres.in/api/users')
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as Promise<UserListResponse>
        });
}


```

### promise-04.ts

Nell'esercizio precedente 'promise-03.ts' la funzione fornita recuperava una singola pagina
di elenco utenti dal servizio API REST, recuperate ora l'intero elenco degli utenti
estraendo l'elenco degli utenti da tutte le pagine per stamparne il contenuto in console.

La documentazione dell'endpoint API REST consultabile agli URL:

 - https://reqres.in/
 - https://reqres.in/api-docs/

