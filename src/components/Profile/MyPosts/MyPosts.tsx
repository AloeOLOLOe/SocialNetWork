import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type posts = {
    id:number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<posts>
}

const MyPosts:React.FC<ProfilePageType> = (props) => {


    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
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



