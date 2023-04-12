/**
 * ### promise-03.ts
 *
 * La funzione fornita qui sotto esegue una richiesta HTTP GET a un endpoint API REST
 * restituendo Una Promise di un oggetto JSON che rappresenta una pagina di elenco utenti.
 *
 * Estraete dalla Promise l'elenco degli utenti in un array di oggetti "User"
 * per stamparne il contenuto in console.
 *
 * ```typescript
 *
 * interface User {
 *     id: number;
 *     email: string;
 *     first_name: string;
 *     last_name: string;
 *     avatar: string;
 * }
 *
 * interface UserListResponse {
 *     page: number;
 *     per_page: number;
 *     total: number;
 *     total_pages: number;
 *     data: User[];
 *     support: {
 *         url: string;
 *         text: string;
 *     }
 * }
 *
 *
 * function getUserList(): Promise<UserListResponse> {
 *     return fetch('https://reqres.in/api/users')
 *         .then(response => {
 *             if (!response.ok) {
 *                 throw new Error(response.statusText)
 *             }
 *             return response.json() as Promise<UserListResponse>
 *         });
 * }
 * ```
 */

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


const pUserList = getUserList();
pUserList
    .then(response => {
        // console.log("risultato ottenuto: ", response);

        // estraggo l'array di oggetti User
        const users: User[] = response.data;
        let i = 0;
        for (const user of users) {
            i++;
            console.log(`user ${i}: { ${user.id}, ${user.first_name}, ${user.last_name}, ${user.email}, ${user.avatar} }`);
        }
    })
    .catch(error => {
        console.log("risultato in errore: ", error);
    });
