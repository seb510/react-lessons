import React, {useState} from "react";
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

    const [title, setTitle] = useState('');
    const addNewPost = (e) => {
        e.preventDefault();
        console.log(title);
    }

  return (
    <div className="App">
        <form action="">
            <MyInput type="text"
                     value={title}
                     onChange={e => setTitle(e.target.value)}
                     placeholder="Название поста"
            />
            <MyTextarea placeholder="Описание поста"></MyTextarea>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;
