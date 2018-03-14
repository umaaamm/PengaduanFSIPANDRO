import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Logo from '../component/Logo'
import Form from '../component/Form'

import {Actions} from 'react-native-router-flux';
export default class SignUp extends Component<{}> {

  goback(){
    Actions.pop()
  }
  render(){
   return(
    <View style={styles.container}>
    <Logo/>
    <Form type="SignUp"/>
    <View style={styles.SignUpcon}>
      <Text style={styles.SignUp}>Already hava a account?</Text>
    <TouchableOpacity onPress={this.goback}>
      <Text style={styles.SignUpButton} > SigIn</Text>	
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
