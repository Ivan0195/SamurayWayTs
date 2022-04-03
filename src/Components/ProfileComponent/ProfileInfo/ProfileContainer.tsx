import React from 'react';
import {ProfileComponent} from "../ProfileComponent";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {setUsersProfile} from "../../../Redux/posts-reducer";
import {ProfilePropsType} from "../../../Redux/profile-reducer";
import {useMatch} from "react-router-dom";


export class ProfileContainer extends React.Component<ProfilePropsType>{

    componentDidMount() {
        //@ts-ignore
        let userId = this.props.match.params.userId
        if (!userId){userId=2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUsersProfile(response.data)
    })}

    render() {
        return (
            <div>
                <ProfileComponent profile={this.props.profile}/>
            </div>
        );
    }
};

export const withRouter = (Component: any) =>{
    return (props: any) => {
        const match = useMatch('/profile/:userId/');
        return <Component {...props} match={match}/>;
    };
}


let mapStateToProps = (state:AppStateType) => ({
    profile: state.profile
})



export const ProfileAPI = connect(mapStateToProps, {setUsersProfile})(withRouter(ProfileContainer))