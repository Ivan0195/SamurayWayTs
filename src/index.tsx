import React from 'react';
import './index.css';
import {state, StateType, subscribe} from "./Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./Redux/State";


export const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App forDialogItem={state.users}
                 forMessages={state.messages}
                 forMyPosts={state.posts}
                 addPostForMyPosts={addPost}
                 newPostText={state.newPostText}
                 updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(state)

subscribe(()=>rerenderEntireTree(state))

