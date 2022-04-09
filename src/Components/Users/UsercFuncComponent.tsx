import React from 'react';
import {AllUsersType} from "../../Redux/all-users-reducer";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";


export type UsersFuncComponentPropsType = {
    allUsers: AllUsersType
    toggleFollow: (id: number) => void
    setUsers: (allUsers: AllUsersType) => void
    setSelectedPage: (page: number) => void
    onPageChange: (page: number) => void
    isFetching: boolean
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
            {/*  <button onClick={this.getUsers}>Get Users!</button>*/}
            {props.allUsers.items.map(m => <div key={m.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + m.id}>
                        <img
                            src={m.photos.small === null ? 'https://image.shutterstock.com/image-vector/unknown-user-icon-trendy-flat-600w-619490732.jpg' : m.photos.small}
                            className={s.img}/>
                    </NavLink>
                </div>
                <div><button onClick={() => {

                    if (!m.followed) {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": '7d0fd936-d507-46da-9b85-084b957dbf02'
                            }
                        }).then(response => {
                            if (response.data.resultCode === 0) {
                                props.toggleFollow(m.id)
                            }
                        })
                    } else {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": '7d0fd936-d507-46da-9b85-084b957dbf02'
                            }
                        }).then(response => {
                            if (response.data.resultCode === 0) {
                                props.toggleFollow(m.id)
                            }
                        })
                    }
                }}>{m.followed ? 'unfollow' : 'follow'}</button></div>
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

export default UsersFuncComponent




