import React, {Component} from 'react';

import {Router, Scene, Stack} from 'react-native-router-flux';

import Login from './pages/Login';
import SignUp from './pages/SignUp';


export default class Routes extends Component<{}> {
    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" initial={true}/>
                    <Scene key="SignUp" component={SignUp} title="SignUp"/>

                </Stack>
            </Router>
        )
    }
}

// import {StackNavigator} from 'react-navigation'
// import Login from './pages/Login'
// import SignUp from './pages/SignUp'
// export const Stack = StackNavigator({

// 	Login :{
// 		screen : Login
// 	},
// 	SignUpa : {
// 		screen: SignUp
// 	}
// })