import React, {ComponentType} from 'react';
import {ProfileComponent} from "../ProfileComponent";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {getProfileTC, ProfilePropsType} from "../../../Redux/profile-reducer";
import {useMatch} from "react-router-dom";
import WitAuthRedirect from "../../../Hoc/WitAuthRedirect";
import {compose} from "redux";


export class ProfileContainer extends React.Component<ProfilePropsType>{

    componentDidMount() {
        //@ts-ignore
        let userId = this.props.match.params.userId
        if (!userId){userId=2}
        this.props.getProfileTC(userId)
        /*profileAPI.getProfile(userId).then(data => this.props.setUsersProfile(data))*/
    }

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
    profile: state.profile,
})



export const ProfileAPI = compose<ComponentType>(withRouter, connect(mapStateToProps, {getProfileTC}), WitAuthRedirect)(ProfileContainer)

    /*WitAuthRedirect(connect(mapStateToProps, {getProfileTC})(withRouter(ProfileContainer)))*/

















/*      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUsersProfile(response.data)
    })*/