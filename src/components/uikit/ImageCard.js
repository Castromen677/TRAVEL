import React from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import {w, h} from '../../../constans' //Константы

const ImageCart = ({data, onPress}) => {
    console.log("_______________")
    const {block, subView, images, labelCart} = styles
    const {image, name} = data.show
    const imgHttps = `https${image.medium.slice(4)}`
    console.log(imgHttps)
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={block}>
                <View styl={subView}>
                    <Image style={images} source={{uri: imgHttps}}/>
                </View>
                <Text style={labelCart}>{name.toUpperCase()}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    block: {
        width: w / 2.4,
        //backgroundColor: 'none',
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