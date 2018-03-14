import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
	Alert
} from 'react-native';

import Logo from '../component/Logo'
import Form from '../component/Form'
import {Actions} from 'react-native-router-flux';
export default class Login extends Component<{}> {

// SignUps(){
// this.props.navigation.navigate('SignUpa')
// }

masuk(){
	Actions.SignUp();
}

render(){	
	return(
		<View style={styles.container}>
		
		<Logo/>
		<Form type="Login"/>
		<View style={styles.SignUpcon}>
		<Text style={styles.SignUp}>Don't have an account yet?</Text>
		<TouchableOpacity onPress={this.masuk}> 
		<Text style={styles.SignUpButton} > SignUp</Text>	
		</TouchableOpacity>
		</View>

		</View>

		)
}	
}
const styles = StyleSheet.create({
	container :{
		backgroundColor:'#455a64',
		flex :1,
		alignItems:'center',
		justifyContent:'center'
	},
	SignUpcon :{
		flexGrow :1,
		alignItems:'center',
		justifyContent:'flex-end',
		marginVertical:16,
		flexDirection:'row'
	},
	SignUp:{
		color:'rgba(255,255,255,0.7)',
		fontSize:16,
	},
	SignUpButton:{
		color:'#ffffff',
		fontSize:16,
		fontWeight:'500'
	}
});
