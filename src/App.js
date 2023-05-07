import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MyTextarea from "./components/UI/textarea/MyTextarea";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "JavaScript", body: " Javascript - язык програмирования Web"},
        {id: 2, title: "VUE", body: " Vue.js - язык програмирования Web"},
        {id: 3, title: "REACT", body: " React - язык програмирования Web"},
    ])

    const [post, setPost] = useState({title: '', body: ''});
    const addNewPost = (e) => {
        e.preventDefault();

        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', body: ''})
    }

  return (
    <div className="App">
        <form action="">
            <MyInput
                value={post.title}
                type="text"
                onChange={e => setPost({...post, title: e.target.value})}
                placeholder="Название поста"
            />
            <MyTextarea
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                placeholder="Описание поста">

            </MyTextarea>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;
