import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {ProfileComponent} from "./Components/ProfileComponent/ProfileComponent";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {MessagesPropsType} from "./Components/Dialogs/Messages/Messages";
import {DialogItemPropsType} from "./Components/Dialogs/DialogItem/DialogItem";
import {PostPropsType} from "./Components/ProfileComponent/MyPosts/Post/Post";
import {
    addPostActionType,
    sendNewMessageActionType,
    updateNewMessageTextActionType,
    updateNewPostTextActionType
} from "./Redux/State";

export type AppPropsType = {
    forDialogItem: Array<DialogItemPropsType>
    forMessages: Array<MessagesPropsType>
    forMyPosts: Array<PostPropsType>
    newPostText: string
    dispatch: (action: addPostActionType | updateNewPostTextActionType | updateNewMessageTextActionType | sendNewMessageActionType) => void
    newMessageText: string
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs forDialogItem={props.forDialogItem}
                                                                   forMessages={props.forMessages}
                                                                   newMessageText={props.newMessageText}
                                                                   dispatch={props.dispatch}/>}/>
                        <Route path='/profile' element={<ProfileComponent forMyPosts={props.forMyPosts}
                                                                          newPostText={props.newPostText}
                                                                          dispatch={props.dispatch}
                        />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>

    )
}


export default App;
