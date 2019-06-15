import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from "../../config/index";

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            screenWidth: Dimensions.get("window").width
        }
    }

    likedToggled() {
        this.setState({
            liked: !this.state.liked
        })
    }
    

    render() {
        const imageSelection = (this.props.item % 2 ===0) ? "https://lh3.googleusercontent.com/beVAM2QriV9WGgk4oiV-OJfXDVmHsvfioW0afGkkkaaGpMOR1mIjz9lkeza2b3HV1Mz72ysAP_0TnhW4PJ6bl8rbVg" 
        : "https://lh3.googleusercontent.com/Jm_l4eQOjcKrsCo7HpMHDkS_UbEx2lldOeCpqpb95WHU03FQtj1X_BlhKMuB31s3Dll1kF2YgnyrXiB1S42h7CP0oQ";
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const heartIconColor = (this.state.liked) ? "rgb(252,61,57)" : null;
        const picUri = imageSelection + "=s" + imageHeight + "-c";
        return (
            <View style={{ flex: 1, width: 100 + "%" }}>
                <View style={styles.userBar}>
                    <View style={{ flexDirection: "row", alignItems: "center"}}>
                        <Image 
                            style={styles.userProfilePic}
                            source={{
                                uri:
                                    "https://lh3.googleusercontent.com/GBvqZUUdkfJxKj9HlcilGaP06EK_74SUr8gVdNIlhLA_wh3vtCqBiuJGim5WYtox-3XyieQ-4sxI_fJeGR5DxAA5=s1024"
                            }}
                        />
                        <Text style={{ marginLeft: 10 }}>Tags213</Text>
                    </View>
                    <View>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>...</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => {this.likedToggled()}} activeOpacity={0.6}>
                    <Image
                        style={{ width: this.state.screenWidth , height: 450 }}
                        source={{
                            uri: picUri
                        }}
                    /> 
                </TouchableOpacity>
                <View style={styles.iconBar}>
                <TouchableOpacity onPress={() => {this.likedToggled()}} activeOpacity={0.6}>
                    <Image style={[styles.iconBar, {height: 45, width: 45, tintColor: heartIconColor}]} source={config.images.heartIcon}  />
                </TouchableOpacity>   
                    <Image  resizeMode="stretch" style={[styles.iconBar, {height: 50, width: 40}]} source={config.images.arrowIcon} />
                </View> 
                <View style={styles.iconBar}>
                    <Image style={[styles.iconBar, {height: 30, width: 30}]} source={config.images.bubbleIcon} />
                    <Text>128 Likes</Text>
                </View>
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
        height: config.styleConstants.rowHeight,
        borderBottomColor: "rgb(233,233,233)",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },

    userProfilePic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },

    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + '%',
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        paddingHorizontal: 5,
        marginLeft: 5
    }
})

