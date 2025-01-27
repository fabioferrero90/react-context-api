import { usePostsContext } from "../context/PostsContext"
import { useEffect } from 'react'
import Postlist from "./Postlist"

const PostPage = () => {

  const { fetchData, posts } = usePostsContext()

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container">
      <Postlist/>
    </div>
  )
}

export default PostPage