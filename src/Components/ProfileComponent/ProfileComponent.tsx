import React from 'react';
import classes from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import {PostPropsType} from "./MyPosts/Post/Post";

export type ProfileComponentPropsType ={
   forMyPosts: Array<PostPropsType>
}

export const ProfileComponent = (props:ProfileComponentPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts forMyPosts={props.forMyPosts}/>
        </div>
    );
};