import {combineReducers, createStore} from "redux";
import {postsReducer} from "./posts-reducer";
import {messagesReducer} from "./messages-reducer";
import {usersReducer} from "./users-reducer";

let reducers = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
    posts: postsReducer,
})

export let store = createStore(reducers)