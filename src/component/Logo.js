import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Logo extends Component<{}> {
    render() {
        return (

            <View style={styles.container}>
                <Image style={{width: 75, height: 70, marginVertical: 20}}
                       source={require('../Image/Logo.png')}/>
                <Text style={styles.LogoText}>Pengaduan Kerusakan Kelas</Text>
                <Text style={styles.LogoText2}>FAKULTAS SASTRA DAN ILMU PENDIDIKAN</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    LogoText: {
        fontWeight: '500',
        fontSize: 18,
        color: '#ffffff'

    },
    LogoText2: {
        fontSize: 18,
        fontWeight: '500',
        color: '#ffffff'
    }
});

