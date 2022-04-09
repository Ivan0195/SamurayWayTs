import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {ProfileComponent} from "./Components/ProfileComponent/ProfileComponent";
import {Route, Routes} from "react-router";
import {BrowserRouter, NavLink} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {UsersCContainer} from "./Components/Users/UsersCContainer";
import {ProfileAPI, ProfileContainer} from "./Components/ProfileComponent/ProfileInfo/ProfileContainer";
import {HeaderAPI, HeaderContainer} from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";



function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderAPI/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        {/*<Route path='/profile/:userId' element={<ProfileAPI/>}/>*/}
                        <Route path='/profile/*' element={<ProfileAPI/>}/>
                        <Route path='/users' element={<UsersCContainer/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>

    );
}


export default App;
