import React from 'react';
import classes from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import {PostPropsType} from "./MyPosts/Post/Post";
import {addPost} from "../../Redux/State";

export type ProfileComponentPropsType ={
   forMyPosts: Array<PostPropsType>
   addPostForMyPosts: (postMessage:string)=>void
}

export const ProfileComponent = (props:ProfileComponentPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts forMyPosts={props.forMyPosts}  addPostForMyPosts={props.addPostForMyPosts}/>
        </div>
    );
};