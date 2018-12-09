import React, {PureComponent} from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import {Header, ImageDetail} from "../components/uikit"


class DetailsScreen extends PureComponent {
    render() {
        console.log("this.props", this.props)
        const {name, image, summary} = this.props.navigation.state.params
        const {containter,sub, h1, h2} = styles
        const data = {image}
        return (
            <View style={containter}>
                <Header title={name}
                        IsDetail
                        onPress={() => this.props.navigation.goBack()}
                />

                <ScrollView>
                    <View style={sub}>
                        <ImageDetail data={data}></ImageDetail>
                        <Text style={h1}>{name.toUpperCase()}</Text>
                        <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 150
    },
    sub:{
        flex: 1,
        alignItems: 'center',
        marginTop: 20

    },
    h1: {
        color: 'black',
        textAlign: 'left',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 24
    },
    h2: {
        color: 'gray',
        padding: 10,
        fontSize: 16
    }
})


export default DetailsScreen