import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PostFeed } from './components/container'

export default class InstaClone extends Component {

    render() {
        return (
            <View style={{ flex: 1, width: 100+"%", height: 100+"%" }}>
                <View style={styles.tempNav}>
                    <Text>Instagram</Text>
                </View>
                <PostFeed />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    tempNav: {
        width: 100 + '%',
        height: 56 ,
        marginTop: 20,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "#EAEAEA",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center"
    }
})