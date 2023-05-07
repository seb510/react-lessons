import React, {useMemo, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Супер - язык програмирования Web'},
        {id: 2, title: 'VUE', body: 'Бибилотека програмирования Web'},
        {id: 3, title: 'REACT', body: 'Фреймовр програмирования Web'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(()=>{
        if(filter.sort){
            return [...posts].sort((a, b)=>a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(()=> {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost)=> {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p=> p.id !== post.id))
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin  : '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        {sortedAndSearchedPosts.length
            ?
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
            :
            <h2 style={{textAlign: 'center'}}>
                Посты не найдены
            </h2>
        }

    </div>
  );
}

export default App;
