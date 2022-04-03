import {combineReducers, createStore} from "redux";
import {postsReducer} from "./posts-reducer";
import {messagesReducer} from "./messages-reducer";
import {allUsersReducer} from "./all-users-reducer";
import React, {ReactType} from "react";
import {usersReducer} from "./users-reducer";
import {profileReducer} from "./profile-reducer";

let reducers = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
    posts: postsReducer,
    allUsers: allUsersReducer,
    profile: profileReducer
})

export let store = createStore(reducers)

export type AppStateType = ReturnType<typeof reducers>

export type DispatchType = typeof reducers