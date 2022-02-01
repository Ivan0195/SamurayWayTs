import React from 'react';
import classes from './MyPosts.module.css'
import Post, {PostPropsType} from "./Post/Post";

export type MyPostPropsType = {
    forMyPosts:Array<PostPropsType>
}

const MyPosts = (props:MyPostPropsType) => {

    return (
        <div>
            <div className={classes.myPostsTitle}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>add Post</button>
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