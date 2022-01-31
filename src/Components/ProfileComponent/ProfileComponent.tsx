import React from 'react';
import classes from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export type ProfileInfoPropsType = {

}

export const ProfileComponent = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};