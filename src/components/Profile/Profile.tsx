import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../redux/state";

type DialogsPropsType={
    profilePage:ProfilePageType
}
const Profile:React.FC<DialogsPropsType> = (props) => {

    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts posts={props.profilePage.posts}/>

            </div>
        </div>
    )
}
export default Profile;