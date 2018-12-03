import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import {w, h} from '../../../constans' //Константы

const ImageCart = ({data}) => {
    console.log("_______________")
    const {block, subView, images, labelCart} = styles
    const {image, name} = data
    return (
        <View style={block}>
            <View styl={subView}>
                <Image style={images} source={{uri: image}}/>
            </View>
            <Text style={labelCart}>{name.toUpperCase()}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    block: {
        width: w / 2.4,
        backgroundColor: 'white',
        margin: 5,
    },
    subView: {
        shadowColor: "#000",
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
    },
    images: {
        borderRadius: 5,
        width: w / 2.4,
        height: w * 0.63
    },
    labelCart: {
        fontFamily: "AppleSDGothicNeo-Regular",
        fontSize: 18,
        alignItems: 'center',
        textAlign: 'center',
        margin: 10,

    }
})
export {ImageCart}