import { faCopy, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import React, { Component } from 'react'
import { Alert, SafeAreaView, Share, StyleSheet, Clipboard } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import { Button, Colors, Text, TextField, View } from 'react-native-ui-lib'

Colors.loadColors({
    primary: "#1111F2",
    secondary: "#F46A0C",
    background: "#FFF",
    text: "#1C1A17"
})

interface StateProps {
    wallet: string
}

export default class Receive extends Component<{navigation: NavigationProp<ParamListBase>}, StateProps> {
    constructor(props: any) {
        super(props)

        this.state = {
            wallet: "0x00000000000000000000000000000000"
        }
    }

    async onShareClick() {
        try {
            const result = await Share.share({
                message: `Hei, send token to ${this.state.wallet}`
            })
        } catch (error: any) {
            Alert.alert(error.message)
        }
    }

    onCopyClick() {
        Clipboard.setString("Hello Wold")

        Alert.alert(
            "INFO",
            "Wallet string berhasil di copy ke clipboard",
            [{
                text: "Ok"
            }]
        )
    }
    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.qrcodeContainer}>
                        <Text style={styles.textTitle}>Wallet Address</Text>
                        <QRCode
                            value={this.state.wallet}
                            size={250}
                        ></QRCode>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <TextField
                            label='Your wallet string'
                            style={styles.textField}
                            value={this.state.wallet}
                            readonly
                        />
                    </View>
                    <View style={styles.btnGroup}>
                        <Button style={styles.button} onPress={(e) => this.onShareClick() }><FontAwesomeIcon icon={faShare} color='white' size={25}/></Button>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto"
        // margin: 40
    },
    qrcodeContainer: {
        margin: 10,
        marginTop: 35,
        borderRadius: 15,
        padding: 30
    },
    textTitle: {
        fontSize: 15,
        fontWeight: "500",
        marginBottom: 20
    },
    textField: {
        borderColor: Colors.text,
        borderBottomWidth: 1,
        padding: 10,
        height: 50,
        borderRadius: 5
    },
    btnGroup: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 5,
        margin: 30,
        width: 30,
        height: 30*2
    }
})