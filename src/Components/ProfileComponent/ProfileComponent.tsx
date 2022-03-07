import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {SuperMyPostsContainer} from "./MyPosts/MyPostsContainer";


export const ProfileComponent = () => {
    return (
        <div>
            <ProfileInfo/>
            <SuperMyPostsContainer/>
        </div>
    );
};