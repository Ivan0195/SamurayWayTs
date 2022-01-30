import React from 'react';
import classes from './Post.module.css'
export type PostPropsType = {
    avaAddress: string
    postText: string
    userName: string
    likesCount: number
}

const Post = (props:PostPropsType) => {
    return (
        <div>
            <div className={classes.item}>
                <img src={props.avaAddress}/>
                {props.postText}
                <div>{props.userName}</div>
                <div>♡ {props.likesCount}</div>
            </div>
        </div>
    )
};


export default Post;