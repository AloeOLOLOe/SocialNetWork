import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

type postsData = {
    /*id:number*/
    message:string
    likesCount:number
}
type profilePageType = {
    posts:Array<postsData>
}

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 13},

    ]

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
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    )
}
export default MyPosts;



