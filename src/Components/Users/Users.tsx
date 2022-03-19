import React from 'react';
import {AllUsersType} from "../../Redux/all-users-reducer";
import s from './Users.module.css'
import axios from "axios";

export type UsersPropsType = {
    allUsers: AllUsersType
    toggleFollow: (id: number) => void
    setUsers: (allUsers: AllUsersType) => void
}

export const Users = (props: UsersPropsType) => {
if(props.allUsers.items.length === 0) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => props.setUsers(response.data))

    /*props.setUsers({ "items": [
            {
                "name": "proslavafur",
                "id": 22905,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "romchesko_pazzi",
                "id": 22904,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "Hakob1986",
                "id": 22903,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "nilubisan",
                "id": 22902,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "AxiixA",
                "id": 22901,
                "uniqueUrlName": null,
                "photos": {
                    "small": "https://social-network.samuraijs.com/activecontent/images/users/22901/user-small.jpg?v=1",
                    "large": "https://social-network.samuraijs.com/activecontent/images/users/22901/user.jpg?v=1"
                },
                "status": "Хомячок флексит 10 часов под пхонк",
                "followed": false
            },
            {
                "name": "LordGudzo",
                "id": 22900,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "YourFriendBy",
                "id": 22899,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "mantry",
                "id": 22898,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "matry",
                "id": 22897,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "Altmer",
                "id": 22896,
                "uniqueUrlName": null,
                "photos": {
                    "small": null,
                    "large": null
                },
                "status": null,
                "followed": false
            }
        ],
        "totalCount": 17913,
        "error": null})*/
}
    return (
        <div>
            {props.allUsers.items.map(m => <div key={m.id}>
            <span>
                <div><img src={m.photos.small===null ? '' : m.photos.small} className={s.img} /></div>
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
};




