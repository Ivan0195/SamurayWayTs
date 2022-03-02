import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType} from "./Redux/State";


export const rerenderEntireTree = (props:StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App forDialogItem={props.users} forMessages={props.messages} forMyPosts={props.posts} addPostForMyPosts={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
