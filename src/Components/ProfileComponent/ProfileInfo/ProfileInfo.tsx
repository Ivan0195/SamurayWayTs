import React from 'react';
import classes from './ProfileInfo.module.css'

export type ProfileInfoPropsType = {}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return <div>
        <div>
            <img src='https://media.fshoq.com/images/267/panorama-of-venice-267-small.jpg'/>
        </div>
        <div className={classes.descriptionBlock}>
            ava + description
        </div>
    </div>
};