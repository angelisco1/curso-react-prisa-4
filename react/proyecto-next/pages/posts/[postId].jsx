import React from 'react'
import { useRouter } from 'next/router'


export const getServerSideProps = (context) => {
  const postId = context.query.postId
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(resp => resp.json())
    .then(({id,title,body}) => {
      const post = {id, title, body}
      return { props: { post: post } }
    }
  )}


const PostId = ({post}) => {

  // const router = useRouter()
  // console.log(router)

  return (
    <div>
      {/* <h1>Post {router.query.postId}</h1> */}
      <h1>Post {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default PostId
