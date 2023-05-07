import React, {useRef, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Супер - язык програмирования Web'},
        {id: 2, title: 'VUE', body: 'Бибилотека програмирования Web'},
        {id: 3, title: 'REACT', body: 'Фреймовр програмирования Web'},
    ])

    const [selectedSort, setSelectedSort] = useState("")

    const createPost = (newPost)=> {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p=> p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        console.log(sort)
        setPosts([...posts].sort((a, b)=>a[sort].localeCompare(b[sort])))
    }


  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin  : '15px 0'}}/>
        <div>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
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
