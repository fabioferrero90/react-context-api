import { PostsProvider } from "./context/PostsContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PostPage from "./components/PostPage"
import PostCard from "./components/PostCard"

function App() {
  return (
    <PostsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostPage />} />
          <Route path="/:id" element={<PostCard />} />
        </Routes>
      </BrowserRouter>
    </PostsProvider>
  )
}

export default App