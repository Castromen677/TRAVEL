//Header
//import
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {w} from '../../../constans'

//body props
const Header = ({
                    detail,
                    leftIcon,
                    leftColor,
                    headerColor,
                    title,
                    onPress
                }) => {
    const {headerBlock, headerTitle} = styles
    return (
        <View style={headerBlock}>
            <Text style={headerTitle}>{props.title}</Text>
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
        backgroundColor: '#8bc34a',
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: "relative"

    },
    headerTitle: {
        color: "white",
        fontSize: 28,
        margin: 10,
        ...ifIphoneX({
            paddingTop: 60,
        }, {
            paddingTop: 35,
        }),
        textAlign: 'center',
        fontWeight: "bold",
        fontFamily: "AppleSDGothicNeo-Regular"

    }
});

//export
export {Header}
