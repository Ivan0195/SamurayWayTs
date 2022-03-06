import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType} from "./Redux/store";
import {store} from "./Redux/redux-store";


export const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App forDialogItem={state.users.users}
                 forMessages={state.messages}
                 forMyPosts={state.posts}
                 newPostText={state.posts.newPostText}
                 dispatch={store.dispatch.bind(store)}
                 newMessageText={state.messages.newMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())

store.subscribe(()=>rerenderEntireTree(store.getState()))