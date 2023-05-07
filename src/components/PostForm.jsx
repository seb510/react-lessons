import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyTextarea from "./UI/textarea/MyTextarea";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }
    return (
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
    );
};

export default PostForm;