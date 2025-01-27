import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const PostsContext = createContext()

const PostsProvider = ({children}) => {
  const api_base_url = import.meta.env.VITE_API_BASE_URL
  const [posts, setPosts] = useState([])

  const fetchData = () => {
    axios.get(`${api_base_url}/posts`)
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => {
        console.log('Errore nel caricamento delle pizze: ', err);

      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PostsContext.Provider value= {{posts, fetchData}}>
      {children}
    </PostsContext.Provider>
  )
}

const usePostsContext = () => useContext(PostsContext);

export {PostsProvider, usePostsContext}