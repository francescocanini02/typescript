interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  async function getPostList(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<Post[]>;
  }

  const X = new Date().getFullYear() % 10 + 1;

  getPostList()
    .then(posts => {
      const userPosts = posts.filter(post => post.userId === X);

      userPosts.forEach(post => {
        console.log(`id: ${post.id}, userId: ${post.userId}, title: ${post.title}`);
      });
    })
    .catch(error => {
      console.error(error);
    });




//     /**
//  * ### promise-04.ts
//  *
//  * Nell'esercizio precedente 'promise-03.ts' la funzione fornita recuperava una singola pagina
//  * di elenco utenti dal servizio API REST, recuperate ora l'intero elenco degli utenti
//  * estraendo l'elenco degli utenti da tutte le pagine per stamparne il contenuto in console.
//  *
//  * La documentazione dell'endpoint API REST consultabile agli URL:
//  *
//  *  - https://reqres.in/
//  *  - https://reqres.in/api-docs/
//  */

// // interfaccia come da formato dell'oggetto JSON restituito dall'endpoint API REST
// // consultabile nella documentazione all'URL https://reqres.in/, https://reqres.in/api-docs/

// interface User {
//     id: number;
//     email: string;
//     first_name: string;
//     last_name: string;
//     avatar: string;
// }

// interface UserListResponse {
//     page: number;
//     per_page: number;
//     total: number;
//     total_pages: number;
//     data: User[];
//     support: {
//         url: string;
//         text: string;
//     }
// }


// function getUserListPage(page: number = 1): Promise<UserListResponse> {
//     console.log("getUserListPage() page: ", page);
//     return fetch('https://reqres.in/api/users?page=' + page)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.statusText)
//             }
//             return response.json() as Promise<UserListResponse>
//         });
// }


// // vedi onSerieConWhile() in https://stackblitz.com/edit/promise-in-sequenza-2

// const userList: User[] = [];

// const impaginatore = (p: number): Promise<UserListResponse> => {
//     return getUserListPage(p)
//         .then(response => {
//             // console.log("risultato ottenuto: ", response);
//             // estraggo l'array di oggetti User
//             const users: User[] = response.data;
//             userList.push(...users);

//             if (p < response.total_pages) {
//                 return impaginatore(p + 1);
//             } else {
//                 return response;
//             }
//         });
// };


// const pResponseImpaginata = impaginatore(1)
//     .then(ignore => {
//         let i = 0;
//         for (const user of userList) {
//             i++;
//             console.log(`user ${i}: { ${user.id}, ${user.first_name}, ${user.last_name}, ${user.email}, ${user.avatar} }`);
//         }
//     })
//     .catch(error => {
//         console.log("risultato in errore: ", error);
//     });
