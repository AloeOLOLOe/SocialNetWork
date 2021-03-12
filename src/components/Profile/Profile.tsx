import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../redux/state";


export type DialogsPropsType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
}
const Profile: React.FC<DialogsPropsType> = (props) => {

    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.profilePage.posts}
                         addPost={props.addPost}/>

            </div>
        </div>
    )
}
export default Profile;
//chek MyPost props addPost