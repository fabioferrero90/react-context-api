import { usePostsContext } from "../context/PostsContext"
import { useNavigate } from "react-router-dom"
import PostCard from "./PostCard"

const Postlist = () => {

  const { posts } = usePostsContext()
  const navigate = useNavigate()

  return (
    <div className="row my-4 gap-2 justify-content-center">
      {posts.map(post => (
        <PostCard key={post.id} id={post.id}/>
      ))}
    </div>
  )
}

export default Postlist