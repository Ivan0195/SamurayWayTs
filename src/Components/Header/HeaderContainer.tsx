import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AuthType, setAuthUserData} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {usersAPI} from "../../api/api";


export type HeaderContainerPropsType = {
    isAuth: boolean,
    login: string,
    setAuthUserData: (data:AuthType) => void
}

export class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        usersAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
    this.props.setAuthUserData(data.data)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}


const mapStateToProps = (state: AppStateType) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})


export const HeaderAPI = connect(mapStateToProps, {setAuthUserData})(HeaderContainer)

