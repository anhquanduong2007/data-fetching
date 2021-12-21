import type { NextPage } from 'next';
export interface post {
  userId: number,
  id: number,
  title: string,
  body: string
}
const Home: NextPage<{posts: post[]}> = ({posts}) => {
  return (
      <div>
        {
          posts.map((post) => (
            <div key = {post.id} className = "border-2 mt-5 px-2.5">
                 <div >{post.title}</div>
                 <div >{post.body}</div>
            </div>
         
          ))
        }
        
      </div>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const posts: post[] = await res.json();
  return {
    props: {
      posts,
    },
  }
}
export default Home
