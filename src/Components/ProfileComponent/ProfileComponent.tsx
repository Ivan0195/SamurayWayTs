import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostPropsType} from "./MyPosts/Post/Post";
import {addPostActionType, PostsType, updateNewPostTextActionType} from "../../Redux/store";

export type ProfileComponentPropsType = {
    forMyPosts: PostsType
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