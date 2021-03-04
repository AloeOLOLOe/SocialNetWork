import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../redux/state";

type MyPostsPropsType={
    posts:Array<PostType>
}

export const MyPosts:React.FC<MyPostsPropsType> = (props) => {


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




