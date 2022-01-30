import React from 'react';
import classes from './ProfileComponent.module.css'
import MyPosts from "./MyPosts/MyPosts";

export const ProfileComponent = () => {
    return (
        <div>
            <div>
                <img src='https://media.fshoq.com/images/267/panorama-of-venice-267-small.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};