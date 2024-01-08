import { NavigationProp, ParamListBase } from '@react-navigation/native'
import React, { Component } from 'react'
import { Alert, StyleSheet } from 'react-native'
import { Button, Modal, Colors, Text, TextField, View } from 'react-native-ui-lib'

Colors.loadColors({
  primary: "#1111F2",
  secondary: "#F46A0C",
  background: "#FFF",
  text: "#1C1A17"
})

interface StateProps {
  address: string,
  amount: number
}

export default class Send extends Component<{navigation: NavigationProp<ParamListBase>}, StateProps> {
  constructor(props: any) {
    super(props)
    this.state = {
      address: "",
      amount: 0
    }
  }

  onClickSend() {
    if (this.state.address == "") {
      Alert.alert(
        "INFO",
        "Address tidak boleh kosong!",
        [{
          text: "Ok",
          onPress: () => console.log("Cancel"),
          style: "cancel"
        }]
      )
    } else if (this.state.amount < -1) {
      Alert.alert(
        "INFO",
        "Jumlah harus lebih dari -1",
        [{
          text: "Ok",
          onPress: () => console.log("Cancel"),
          style: "cancel"
        }]
      )
    } else {
      Alert.alert(
        "INFO",
        "Transaksi telah dibuat, tunggu 5 menit untuk konfirmasi transaksi",
        [{
          text: "Ok",
          onPress: () => {
            this.setState({address: "", amount: 0})
            this.props.navigation.navigate("MainApp")
          },
          style: "cancel"
        }]
      )
    }
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.sendTitle}>Send token</Text>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextField
                label='Target address'
                placeholder='Enter target address'
                style={styles.textField}
                selectionColor={Colors.primary}
                onChangeText={text => this.setState({address: text})}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextField
                enableErrors
                label='Amount BFY'
                placeholder='Enter amount BFY'
                keyboardType="number-pad"
                style={styles.textField}
                validate={["number"]}
                validationMessage={["Masukan angka!"]}
                selectionColor={Colors.primary}
                onChangeText={text => this.setState({amount: Number(text)})}
              />
            </View>
          </View>

          <View style={styles.invoiceContainer}>
            <View>
              <Text>With gas fee:</Text>
              <Text style={styles.invoiceTotalBFY}>{ this.state.amount + 0.0005 } BFY</Text>
            </View>
          </View>

          <Button size={Button.sizes.large} label='Send now' backgroundColor={Colors.primary} style={styles.button} onPress={(e) => this.onClickSend()}></Button>
        </View>

        <Text style={{ textAlign: "center", marginTop: 20 }}>Copyright &copy; 2023 Billal Fauzan</Text>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 35,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 30
  },
  sendTitle: {
    fontSize: 25,
    fontWeight: "bold"
  },
  formContainer: {
    marginTop: 40
  },
  inputContainer: {
    marginTop: 15
  },
  textField: {
    borderColor: Colors.text,
    borderBottomWidth: 1,
    padding: 10,
    height: 50,
    borderRadius: 5
  },
  invoiceContainer: {
    marginLeft: "auto",
    marginTop: 30
  },
  button: {
    marginTop: 50,
    borderRadius: 5,
    height: 50
  },
  invoiceTotalBFY: {
    fontWeight: "bold",
    fontSize: 20
  },
  roundedDialog: {
    backgroundColor: Colors.$backgroundDefault,
    borderRadius: 12
  },
})