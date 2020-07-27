import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Posts = (props) => {
  const [posts, setPosts] = useState(props.posts)
  const router = useRouter()

  const listaPosts = posts.map(post => (
    <li key={post.id}>
      <Link href={`${router.pathname}/[postId]`} as={`${router.pathname}/${post.id}`} >
        <a>{post.title}</a>
      </Link>
    </li>
  ))

  return (
    <div>
      <h1>Mis posts</h1>
      <hr/>
      <ul>
        {listaPosts}
      </ul>
    </div>
  )
}

export const getServerSideProps = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(datos => {
      return {
        props: {
          posts: datos
        }
      }
    })
}

export default Posts
