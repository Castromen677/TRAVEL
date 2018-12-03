//Header
//import
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';


//body props
const Header = props => {
    console.log(props)
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
        paddingTop: 40,
        fontWeight: "bold",
        fontFamily: "AppleSDGothicNeo-Regular"

    }
});

//export
export {Header}
