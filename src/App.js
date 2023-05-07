import React, {useMemo, useRef, useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Супер - язык програмирования Web'},
        {id: 2, title: 'VUE', body: 'Бибилотека програмирования Web'},
        {id: 3, title: 'REACT', body: 'Фреймовр програмирования Web'},
    ])

    const [selectedSort, setSelectedSort] = useState("")
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo(()=>{
        if(selectedSort){
            return [...posts].sort((a, b)=>a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;
    }, [selectedSort, posts])

    const sortedAndSearchedPosts = useMemo(()=> {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPosts])

    const createPost = (newPost)=> {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p=> p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin  : '15px 0'}}/>
        <div>

            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Поиск..."
            />
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
