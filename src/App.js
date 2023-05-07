import React, {useEffect, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostServices from "./API/PostServices";
import Loader from "./components/UI/Loader/Loader";
import './styles/App.css';
import {useFetching} from "./hooks/useFetching";

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const[modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async ()=> {
        const posts = await PostServices.getAll();
        setPosts(posts)
    })

    useEffect(()=> {
        fetchPosts();
    }, [])

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

        {postError &&
            <h1>Произошла ошибка</h1>
        }
        {isPostsLoading
            ? <div className="Loader-wrapper"><Loader/></div>
            : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
        }

    </div>
  );
}

export default App;
