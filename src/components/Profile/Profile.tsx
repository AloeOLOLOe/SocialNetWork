import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
type posts = {
    id:number
    message: string
    likesCount: number
}
type ProfileType={
    posts: Array<posts>
}

const Profile:React.FC<ProfileType> = (props) => {

    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.posts}/>

            </div>
        </div>
    )
}
export default Profile;