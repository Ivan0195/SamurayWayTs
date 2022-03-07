import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../Redux/store";


export type MyPostPropsType = {
    forMyPosts: PostsType
    newPostText: string
    updateNewPostText: (text:string) => void
    addPost: () => void
}

const MyPosts = (props: MyPostPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost()
        if (newPostElement.current != undefined) {
            newPostElement.current.value = ''
        }
    }

    const onPostChange = () => {
        const newText = newPostElement.current ? newPostElement.current.value : ''
        props.updateNewPostText(newText)
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
                {props.forMyPosts.posts.map((m, index) => <Post avaAddress={m.avaAddress}
                                                 postText={m.postText}
                                                 userName={m.userName}
                                                 likesCount={m.likesCount} key={index}/>)}
            </div>
        </div>
    );
};

export default MyPosts;