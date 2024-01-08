import React, { Component } from 'react'
import { Assets, Button, Card, Colors, Icon, Image, ListItem, Text, View } from 'react-native-ui-lib'
import { StyleSheet } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

Colors.loadColors({
  primary: "#1111F2",
  secondary: "#F46A0C",
  background: "#FFF",
  text: "#1C1A17"
})

Assets.loadAssetsGroup("logo", {
  brify: require("../../assets/brify.png")
})

Assets.loadAssetsGroup("icons", {
  transaction: require("../../assets/transaction.png")
})

export default class Home extends Component<{navigation: NavigationProp<ParamListBase>}> {
  constructor(props: any) {
    super(props)
  }
  
  renderActivity() {
    return (
      <ListItem onPress={() => console.log("Pressed")} height={77.5} activeOpacity={.3} activeBackgroundColor={Colors.grey60} style={styles.transactions}>
        <ListItem.Part left>
          <Image assetGroup='icons' assetName='transaction' style={styles.transactionIcon}></Image>
        </ListItem.Part>
        <ListItem.Part middle>
          <Text grey10 text60 marginL-10>Send 100 BFY</Text>
        </ListItem.Part>
        <ListItem.Part right>
          <Text marginR-10 text100>20 Sep 2021</Text>
        </ListItem.Part>
      </ListItem>
    )
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.brifyContainer}>
            <Icon assetGroup='logo' assetName='brify' size={100}></Icon>
            <Text text30 style={{ fontWeight: "bold" }}>100 BFY</Text>
            <Text>Rp. 10.000,-</Text>

            <View style={styles.brifyActionContainer}>
              <Button onPress={() => this.props.navigation.navigate("Send") } label='Send' size={Button.sizes.large} backgroundColor={Colors.primary} style={styles.brifyActionButton}></Button>
              <Button onPress={() => this.props.navigation.navigate("Receive") } label='Receive' size={Button.sizes.large} backgroundColor={Colors.primary} style={styles.brifyActionButton}></Button>
              <Button label='Swap' size={Button.sizes.large} backgroundColor={Colors.primary} style={styles.brifyActionButton}></Button>
            </View>
          </View>
        </View>
        <View style={styles.activityContainer}>
          <Text text50 style={styles.activityTitle} grey10>Transaction History</Text>
          { this.renderActivity() }
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 35,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  brifyContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  activityContainer: {
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  activityTitle: {
    padding: 10,
    paddingTop: 20,
    fontWeight: "700",
  },
  transactions: {
    padding: 2
  },
  transactionIcon: {
    width: 30,
    height: 30,
    tintColor: Colors.green40,
    marginLeft: 10
  },
  brifyActionContainer: {
    flexDirection: "row",
    margin: 10,
    marginTop: 20,
  },
  brifyActionButton: {
    borderRadius: 5,
    margin: 2
  }
});