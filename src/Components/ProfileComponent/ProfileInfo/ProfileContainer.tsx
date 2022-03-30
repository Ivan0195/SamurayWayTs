import React from 'react';
import {SuperMyPostsContainer} from "../MyPosts/MyPostsContainer";
import {ProfileInfo, ProfileInfoPropsType} from "./ProfileInfo";
import {MyPostPropsType} from "../MyPosts/MyPosts";
import {ProfileComponent} from "../ProfileComponent";
import axios from "axios";
import {connect} from "react-redux";
import App from "../../../App";
import {AppStateType} from "../../../Redux/redux-store";


export class ProfileContainer extends React.Component<ProfileInfoPropsType, MyPostPropsType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/ptofilr/2`).then(response => {

    })}

    render() {
        return (
            <div>
                <ProfileComponent/>
            </div>
        );
    }
};


let mapStateToProps = (state:AppStateType) => ({
    a:13
})

export const ProfileAPIContainer = connect(mapStateToProps, {setUsersProfile})(ProfileContainer)