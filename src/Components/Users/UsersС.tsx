import React from 'react';
import {AllUsersType} from "../../Redux/all-users-reducer";
import s from './Users.module.css'
import axios from "axios";

export type UsersPropsType = {
    allUsers: AllUsersType
    toggleFollow: (id: number) => void
    setUsers: (allUsers: AllUsersType) => void
}

class UsersC extends React.Component <UsersPropsType> {

    getUsers = () => {
        if(this.props.allUsers.items.length === 0) {axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => this.props.setUsers(response.data))}
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get Users!</button>
                {this.props.allUsers.items.map(m => <div key={m.id}>
            <span>
                <div><img src={m.photos.small===null ? 'https://image.shutterstock.com/image-vector/unknown-user-icon-trendy-flat-600w-619490732.jpg' : m.photos.small} className={s.img} /></div>
                <div><button onClick={()=>this.props.toggleFollow(m.id)}>{m.followed ? 'unfollow' : 'follow'}</button></div>
            </span>
                    <span>
                <span>
                    <div>{m.name}</div>
                    <div>{m.status}</div>
                </span>
                        {/*  <span>
                    <div>{m.location.country}</div>
                    <div>{m.location.city}</div>
                </span>*/}
            </span>
                </div>)}
            </div>
        )
    }
}

export default UsersC




