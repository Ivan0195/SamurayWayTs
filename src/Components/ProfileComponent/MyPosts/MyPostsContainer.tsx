import React from 'react';
import {addPostAC, updatePostTextAC} from "../../../Redux/posts-reducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {PostsType} from "../../../Redux/store";



type MapToPropsType = {
    forMyPosts: PostsType,
    newPostText: string
}

type MapDispatchPropsType = {
    updateNewPostText: (text:string)=> void,
    addPost: ()=> void,
}

let mapStateToProps=(state: AppStateType):MapToPropsType=>{
    return {
        forMyPosts: state.posts,
        newPostText: state.posts.newPostText,
    }
}

let mapDispatchToProps=(dispatch:Dispatch):MapDispatchPropsType=>{
    return {
        updateNewPostText: (text:string)=> {dispatch((updatePostTextAC(text)))},
        addPost: ()=>{dispatch(addPostAC())}
    }
}

export const SuperMyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)




/*

const MyPostsContainer = () => {

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const updatePostText = (newText: string) => {
        const action = updatePostTextAC(newText)
        props.store.dispatch(action)
    }

    return (
        <MyPosts forMyPosts={props.store.getState().posts} newPostText={props.store.getState().posts.newPostText} updateNewPostText={updatePostText} addPost={addPost}/>
    );
};

export default MyPostsContainer;*/
