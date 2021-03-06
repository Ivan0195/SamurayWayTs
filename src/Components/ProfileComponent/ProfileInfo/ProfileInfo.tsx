import React from 'react';
import classes from './ProfileInfo.module.css'
import {ProfileType} from "../../../Redux/profile-reducer";
import Preloader from "../../Common/Preloader";
import s from '../../Users/Users.module.css'
import ProfileStatus from "../../ProfileStatus/ProfileStatus";

export type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status:string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile.profile) {
        return <Preloader/>
    }

    return <div>
        {/*<div>
            <img src='https://media.fshoq.com/images/267/panorama-of-venice-267-small.jpg'/>
        </div>*/}
        <div className={classes.descriptionBlock}>
            <img src={props.profile.profile.photos.large ? props.profile.profile.photos.large : 'https://genslerzudansdentistry.com/wp-content/uploads/2015/11/anonymous-user.png'} className={s.profileLargeAva}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
};