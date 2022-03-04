import React from 'react';
import classes from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";


export type MyPostPropsType = {
    forMyPosts:Array<PostPropsType>
    addPostForMyPosts: ()=>void
    newPostText: string
    updateNewPostText: (newPostText:string) => void
}

const MyPosts = (props:MyPostPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        let text = newPostElement.current ? newPostElement.current.value : '';
      props.addPostForMyPosts()
        if (newPostElement.current != undefined) {
            newPostElement.current.value = ''
        }
    }

    const onPostChange = () => {
props.updateNewPostText(newPostElement.current ? newPostElement.current.value : '')
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