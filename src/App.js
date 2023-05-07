import React, {useMemo, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Супер - язык програмирования Web'},
        {id: 2, title: 'VUE', body: 'Бибилотека програмирования Web'},
        {id: 3, title: 'REACT', body: 'Фреймовр програмирования Web'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const[modal, setModal] = useState(false)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const createPost = (newPost)=> {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p=> p.id !== post.id))
    }

  return (
    <div className="App">
        <MyButton onClick={()=>{setModal(true)}}>Создать пост</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin  : '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>

    </div>
  );
}

export default App;
