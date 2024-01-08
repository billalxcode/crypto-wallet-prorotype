import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { View } from 'react-native-ui-lib'

export default class Receive extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
            <QRCode value='Hello World'></QRCode>
        </View>
        <View>
            
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 35,
        backgroundColor: "#fff",
        borderRadius: 15
    }
})