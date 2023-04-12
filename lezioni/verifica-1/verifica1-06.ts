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
  