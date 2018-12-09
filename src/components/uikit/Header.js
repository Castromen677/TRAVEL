//Header
//import
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {w} from '../../../constans'

//body props
const Header = ({title, IsDetail, onPress}) => {
    console.log("IsDetail", IsDetail)
    console.log("title", title)
    const {headerBlock, headerTitle, leftButtonStyle} = styles
    return (
        <View style={headerBlock}>
            <TouchableOpacity onPress={onPress} style={[{display: IsDetail ? 'flex' : 'none'}]}>
                <Text style={leftButtonStyle}>{'<'}</Text>
            </TouchableOpacity>
            <Text numberOfLines={1} ellipsizeMode='tail' style={headerTitle}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headerBlock: {
        ...ifIphoneX({
            height: 115,
        }, {
            height: 90,
        }),
        //height: 90,
        flexDirection: 'row',
        backgroundColor: '#8bc34a',
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: "relative"

    },
    headerTitle: {
        color: "white",
        fontSize: 24,
        margin: 10,
        ...ifIphoneX({
            paddingTop: 60,
        }, {
            paddingTop: 35,
        }),
        width: w - 100,
        textAlign: 'left',
        fontWeight: "bold",
        fontFamily: "AppleSDGothicNeo-Regular"

    },
    leftButtonStyle: {
        fontSize: 34,
        padding: 10,
        color: 'white',
        ...ifIphoneX({
            paddingTop: 60,
        }, {
            paddingTop: 35,
        })
    }
});

//export
export {Header}
