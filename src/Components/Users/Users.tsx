import React from 'react';
import {AllUsersType} from "../../Redux/all-users-reducer";
import s from './Users.module.css'

export type UsersPropsType = {
    allUsers: AllUsersType
    toggleFollow: (id: string) => void
    setUsers: (allUsers: AllUsersType) => void
}

export const Users = (props: UsersPropsType) => {

    return (
        <div>
            {props.allUsers.allUsers.map(m => <div key={m.id}>
            <span>
                <div><img src={m.avaAddress} className={s.img} /></div>
                <div><button onClick={()=>props.toggleFollow(m.id)}>{m.isFollowed ? 'unfollow' : 'follow'}</button></div>
            </span>
                <span>
                <span>
                    <div>{m.userName}</div>
                    <div>{m.status}</div>
                </span>
                <span>
                    <div>{m.location.country}</div>
                    <div>{m.location.city}</div>
                </span>
            </span>
            </div>)}
        </div>
    )
};




