import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import {w, h} from '../../../constans' //Константы

const ImageCart = ({ data }) => {
    console.log("W - ", w, " H - ", h)
    const {block, image, labelCart} = styles
    const {imageUrl , name} = data
    return (
        <View style={{block}}>
            <Image style={image} source={{uri: imageUrl}}/>
            <Text style={labelCart}>{name.toUpperCase()}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    block: {
        flex: 1,
        shadowColor: "#000",
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4
    },
    image: {
        width: w / 2.4,
        height: h * 0.23,
        backgroundColor: 'red',
        borderRadius: 5,
        margin: 10
    },
    labelCart: {
        fontFamily: "AppleSDGothicNeo-Regular",
        fontSize: 18,
        width: w / 2.4,
        alignItems: 'center',
        textAlign: 'center',
        margin: 10,

    }
})
export {ImageCart}