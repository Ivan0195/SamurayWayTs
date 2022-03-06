import React from 'react';
import {
    addPostActionType, sendNewMessageActionType,
    StateType, updateNewMessageTextActionType,
    updateNewPostTextActionType
} from "./State";
import {PostPropsType} from "../Components/ProfileComponent/MyPosts/Post/Post";

export const postsReducer = (state: StateType, action:  addPostActionType | updateNewPostTextActionType | updateNewMessageTextActionType | sendNewMessageActionType) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostPropsType = {
                postText: state.newPostText,
                avaAddress: 'https://b1.culture.ru/c/735787.jpg',
                userName: 'Viktor Tsoy',
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            break

        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            break
        default: return state
    }
    return state
}

export const addPostAC = (): addPostActionType => ({type: 'ADD-POST'})
export const updatePostTextAC = (newText: string): updateNewPostTextActionType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText
})


