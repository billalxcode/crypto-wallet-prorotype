import React, { Component } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { Assets, Colors, Image, Text, View } from 'react-native-ui-lib'

Assets.loadAssetsGroup("logo", {
    brify: require("../../assets/brify.png")
})

Colors.loadColors({
    primary: "#1111F2",
    secondary: "#F46A0C",
    background: "#FFF",
    text: "#1C1A17"
  })

interface StateProp {
    fadeAnimation: Animated.Value
}

export default class SplashScreen extends Component<{navigation: any}, StateProp> {
    constructor(props: any) {
        super(props)
        
        this.state = {
            fadeAnimation: new Animated.Value(0)
        }

    }
    
    fadeIn() {
        Animated.timing(this.state.fadeAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }
    
    fadeOut() {
        Animated.timing(this.state.fadeAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    componentDidMount(): void {
        this.fadeIn()

        setTimeout(() => {
            this.props.navigation.replace("MainApp")
        }, 3000)
    }

    componentWillUnmount(): void {
        this.fadeOut()
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={{ opacity: this.state.fadeAnimation }}>
                    <Image assetGroup='logo' assetName='brify' style={{
                        width: 200,
                        height: 200,

                    }} />
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary
    }
})