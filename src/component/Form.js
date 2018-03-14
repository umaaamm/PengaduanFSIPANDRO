import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import * as firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDmOw5kYiJVSyu9H-AK04gSoOVm4P7jN2s",
    authDomain: "fsipreact.firebaseapp.com",
    databaseURL: "https://fsipreact.firebaseio.com",
    projectId: "fsipreact",
    storageBucket: "",
    messagingSenderId: "17754303659"
};
firebase.initializeApp(firebaseConfig);
const RootRef = firebase.database().ref();
const namaRef = RootRef.child("Login");

export default class Form extends Component<{}> {


    constructor(props) {
        super(props);

        this.state = ({
            user_list: [],
            username: '',
            password: '',
            loading: false,
        });
    }

    login = () => {
        if (this.state.username.trim() === '' && this.state.password.trim() === '') {
            alert('Data Kosong');
            return;
        }
        namaRef.push({
            username: this.state.username,
            password: this.state.password
        });
        alert("Data Tersimpan.");
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.TextInput}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Username"
                           placeholderTextColor="#ffffff"
                           onSubmitEditing={() => this.Password.focus()}
                           onChangeText={
                               (text) => {
                                   this.setState({username: text});
                               }
                           }
                           value={this.state.username}
                />

                <TextInput style={styles.TextInput}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Password"
                           secureTextEntry={true}
                           placeholderTextColor="#ffffff"
                           ref={(input) => this.Password = input}
                           onChangeText={
                               (text) => {
                                   this.setState({password: text});
                               }
                           }
                           value={this.state.password}
                />

                <TouchableOpacity onPress={this.login} style={styles.Button}>
                    <Text style={styles.ButtonText}>{this.props.type}</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextInput: {
        width: 300,
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        fontSize: 16,
        color: '#ffffff',
        paddingHorizontal: 16,
        marginVertical: 10
    },
    ButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    Button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    }


});
