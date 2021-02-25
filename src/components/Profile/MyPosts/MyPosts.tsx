import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type posts = {
    /*id:number*/
    message: string
    likesCount: number
}
type profilePageType = {
    posts: Array<posts>
}

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 13},
        {id: 2, message: 'blabla', likesCount: 55},
        {id: 2, message: 'dadada', likesCount: 66},

    ]
    let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            My post
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>


            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}
export default MyPosts;



