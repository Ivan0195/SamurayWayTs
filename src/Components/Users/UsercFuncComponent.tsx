import React from 'react';
import {AllUsersType} from "../../Redux/all-users-reducer";
import s from './Users.module.css'


export type UsersFuncComponentPropsType = {
    allUsers: AllUsersType
    toggleFollow: (id: number) => void
    setUsers: (allUsers: AllUsersType) => void
    setSelectedPage: (page:number) => void
    onPageChange: (page:number) => void
}

const UsersFuncComponent = (props:UsersFuncComponentPropsType) => {

    let pagesCount = Math.ceil(props.allUsers.totalCount/props.allUsers.pageCount)

    let pages = []
    for (let i=1; i<=pagesCount; i++){
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => <span className={props.allUsers.selectedPage===p ? s.selected : ''} onClick={() => props.onPageChange(p)}>{p+' '}</span> )}
            </div>
            {/*  <button onClick={this.getUsers}>Get Users!</button>*/}
            {props.allUsers.items.map(m => <div key={m.id}>
            <span>
                <div><img src={m.photos.small===null ? 'https://image.shutterstock.com/image-vector/unknown-user-icon-trendy-flat-600w-619490732.jpg' : m.photos.small} className={s.img} /></div>
                <div><button onClick={()=>props.toggleFollow(m.id)}>{m.followed ? 'unfollow' : 'follow'}</button></div>
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




