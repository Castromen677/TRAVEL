import React from 'react'
import {View,  Image, StyleSheet} from 'react-native'
import {w, h} from '../../../constans' //Константы

const ImageDetail = ({data}) => {
    console.log("data", data)
    const {block, subView, images, labelCart} = styles
    const {image} = data
    const imgHttps = `https${image.medium.slice(4)}`
    //console.log(imgHttps)
    return (
            <View style={block}>
                <View styl={subView}>
                    <Image style={images} source={{url : imgHttps}}/>
                </View>
            </View>
    )
}
const styles = StyleSheet.create({
    block: {
        //backgroundColor: 'none',
        margin: 5,
    },
    subView: {
        shadowColor: "#000",
        borderRadius: 5,
        backgroundColor: 'white',
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.4,
    },
    images: {
        width: w / 1.67,
        height: w * 0.9,
        borderRadius: 5,
    }
})
export {ImageDetail}