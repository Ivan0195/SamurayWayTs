import React from 'react';
import {ProfileInfo, ProfileInfoPropsType} from './ProfileInfo/ProfileInfo';
import {SuperMyPostsContainer} from "./MyPosts/MyPostsContainer";
import {MyPostPropsType} from "./MyPosts/MyPosts";

/*export  type ProfileComponentPropsType = {
    ProfileInfo: ProfileInfoPropsType
    MyPosts: MyPostPropsType
}*/

export const ProfileComponent = () => {
    return (
        <div>
            <ProfileInfo/>
            <SuperMyPostsContainer/>
        </div>
    );
};