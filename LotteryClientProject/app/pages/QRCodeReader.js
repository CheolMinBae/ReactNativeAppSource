import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

// import QRCodeScreen from 'app/reousrces/qrcode/QRCodeScreen';

export default class QRCodeReader extends Component {
    render() {
        return (
            <View style={{margin: 128}}>
                <Text>QRCodeReader Page</Text>
            </View>
        )
    }
}