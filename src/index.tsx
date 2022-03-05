import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, StateType} from "./Redux/State";


export const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App forDialogItem={state.users}
                 forMessages={state.messages}
                 forMyPosts={state.posts}
                 addPostForMyPosts={store.addPost.bind(store)}
                 newPostText={state.newPostText}
                 updateNewPostText={store.updateNewPostText.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

store.subscribe(()=>rerenderEntireTree(store.getState()))

