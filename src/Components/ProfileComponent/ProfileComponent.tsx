import React from 'react';
import classes from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostPropsType} from "./MyPosts/Post/Post";
import {addPostActionType, updateNewPostTextActionType} from "../../Redux/State";

export type ProfileComponentPropsType = {
    forMyPosts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: addPostActionType | updateNewPostTextActionType) => void
}

export const ProfileComponent = (props: ProfileComponentPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts forMyPosts={props.forMyPosts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
};