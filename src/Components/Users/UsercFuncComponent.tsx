import React from 'react';
import {AllUsersType} from "../../Redux/all-users-reducer";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


export type UsersFuncComponentPropsType = {
    allUsers: AllUsersType
    onPageChange: (page: number) => void
    toggleFollowingInProgress: (isFollowing:boolean, userId: number) => void
    follow: (id:number) => void
    unfollow: (id:number) => void
}

const UsersFuncComponent = (props: UsersFuncComponentPropsType) => {

    let pagesCount = Math.ceil(props.allUsers.totalCount / props.allUsers.pageCount)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => <span className={props.allUsers.selectedPage === p ? s.selected : ''}
                                      onClick={() => props.onPageChange(p)}>{p + ' '}</span>)}
            </div>
            {props.allUsers.items.map(m => <div key={m.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + m.id}>
                        <img
                            src={m.photos.small === null ? 'https://image.shutterstock.com/image-vector/unknown-user-icon-trendy-flat-600w-619490732.jpg' : m.photos.small}
                            className={s.img}/>
                    </NavLink>
                </div>
                <div><button disabled={props.allUsers.followingInProgress.some(id => id === m.id)} onClick={() => {
                    !m.followed ? props.follow(m.id) : props.unfollow(m.id)
                }}>{m.followed ? 'unfollow' : 'follow'}</button></div>
            </span>
                <span>
                <span>
                    <div>{m.name}</div>
                    <div>{m.status}</div>
                </span>
            </span>
            </div>)}
        </div>
    )
}

export default UsersFuncComponent













/* props.toggleFollowingInProgress(true, m.id)
                     usersAPI.followUser(m.id)
                     .then(data => {
                         if (data.resultCode === 0) {
                             props.toggleFollow(m.id)
                         }
                         props.toggleFollowingInProgress(false, m.id)
                     })*/