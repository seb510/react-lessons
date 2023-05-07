import React, {useRef, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: " Javascript - язык програмирования Web"},
        {id: 2, title: "VUE", body: " Vue.js - язык програмирования Web"},
        {id: 3, title: "REACT", body: " React - язык програмирования Web"},
    ])

    const createPost = (newPost)=> {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p=> p.id !== post.id))
    }


  return (
    <div className="App">
        <PostForm create={createPost}/>
        {posts.length
            ?
            <PostList remove={removePost} posts={posts} title="Посты про JS"/>
            :
            <h2 style={{textAlign: 'center'}}>
                Посты не найдены
            </h2>
        }

    </div>
  );
}

export default App;
