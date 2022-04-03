import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {SuperMyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile-reducer";

type ProfileComponentPropsType = {
    profile:ProfileType
}

export const ProfileComponent = (props:ProfileComponentPropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <SuperMyPostsContainer/>
        </div>
    );
};