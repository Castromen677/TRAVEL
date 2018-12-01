//Header
//import
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


//body props
const Header = props => {
    console.log(props)
    return (
        <View style={styles.headerBlock}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headerBlock: {
        //flex: 0.5,
        height: 90,
        //justifyContent: 'flex-start',
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
        //flex: 1,
        margin: 10,
        paddingTop: 40,
        fontWeight: "bold",
        fontFamily: "AppleSDGothicNeo-Regular"

    }
});

//export
export { Header }
