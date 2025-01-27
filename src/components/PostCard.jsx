import { usePostsContext } from "../context/PostsContext"
import { useParams } from "react-router-dom"


const PostCard = ({id}) => {

  const {posts} = usePostsContext()
  const post = posts.find(post => post.id === id)

  return (
    <div key={post.id} className="card p-2 col-4 m-2">
      <img src={`http://localhost:3000/${post.image}`} className="card-img-top" alt={post.title}/>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.content}</p>
        <p className="tags"><strong>Tags:</strong> {post.tags.join(', ')}</p>
      </div>
    </div>
  )
}

export default PostCard