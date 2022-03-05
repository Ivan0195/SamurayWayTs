import React from 'react';
import classes from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";
import {addPostActionType, updateNewPostTextActionType} from "../../../Redux/State";


export type MyPostPropsType = {
    forMyPosts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: addPostActionType | updateNewPostTextActionType) => void
}

const MyPosts = (props: MyPostPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        let text = newPostElement.current ? newPostElement.current.value : '';
        props.dispatch({type: 'ADD-POST'})
        if (newPostElement.current != undefined) {
            newPostElement.current.value = ''
        }
    }

    const onPostChange = () => {
        const newText = newPostElement.current ? newPostElement.current.value : ''
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText})
    }

    return (
        <div>
            <div className={classes.myPostsTitle}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>add Post</button>
                    </div>
                </div>
            </div>
            <div className={classes.posts}>
                {props.forMyPosts.map(m => <Post avaAddress={m.avaAddress}
                                                 postText={m.postText}
                                                 userName={m.userName}
                                                 likesCount={m.likesCount}/>)}
            </div>
        </div>
    );
};

export default MyPosts;