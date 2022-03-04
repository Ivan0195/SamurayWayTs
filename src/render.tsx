import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType, updateNewPostText} from "./Redux/State";


export const rerenderEntireTree = (props:StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App forDialogItem={props.users}
                 forMessages={props.messages}
                 forMyPosts={props.posts}
                 addPostForMyPosts={addPost}
                 newPostText={props.newPostText}
            updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
