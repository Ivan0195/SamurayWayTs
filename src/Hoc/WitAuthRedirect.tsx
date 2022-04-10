import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";
import {Navigate} from "react-router-dom";

export type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({isAuth: state.auth.isAuth})

function WithAuthRedirect<T> (Component:ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if(!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T} />
    }

    const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
};

export default WithAuthRedirect;