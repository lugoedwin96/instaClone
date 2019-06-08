import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class InstaClone extends Component {
    render() {
        return (
            <View style={{ flex: 1, width: 100+"%", height: 100+"%" }}>
                <View style={styles.tempNav}>
                    <Text style={styles.appTitle}>Instagram</Text>
                </View>

                <View style={styles.userBar} />

                <View style={{ flexDirection: "row" }}>
                    <Image 
                        style={{ width: 40, height: 40}}
                        source={{
                            uri:
                                "https://lh3.googleusercontent.com/GBvqZUUdkfJxKj9HlcilGaP06EK_74SUr8gVdNIlhLA_wh3vtCqBiuJGim5WYtox-3XyieQ-4sxI_fJeGR5DxAA5=s1024"
                        }}
                    />
                    <Text>Tags213</Text>
                </View>
                <View>
                </View>

                <Image
                    style={{ width: 100+"%", height: 100 }}
                    source={{
                        uri: 
                        "https://lh3.googleusercontent.com/beVAM2QriV9WGgk4oiV-OJfXDVmHsvfioW0afGkkkaaGpMOR1mIjz9lkeza2b3HV1Mz72ysAP_0TnhW4PJ6bl8rbVg=s1024"
                    }}
                /> 
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
    },

    userBar: {
        width: 100 + '%',
        height: 50,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row"
    }
})