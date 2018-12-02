//Родитель
import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
//import Header from './src/components/uikit/Header';
//import ImageCart from './src/components/uikit/ImageCard';
import {Header, ImageCart} from "./src/components/uikit";

const url = 'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json'

const win = Dimensions.get('window')
const h = win.height
const w = win.width

export default class App extends Component {
    //Model
    state = {
        title: 'TravelGuide',
        data: []
    };
    componentDidMount = async () => {
        try {
            const respons = await fetch(url) // Get Data
            const data = await respons.json()
            this.setState({data}) //Post Date
        } catch (e) {
            throw e
            console.log("Ошибка", e)

        }

    }

    //View
    render() {
        console.log(w, "- ", w)
        return (
            <View style={styles.containter}>
                <Header title={this.state.title}/>
                <ImageCart/>
                <Text style={styles.welcom}>{'Hello Word'}</Text>
            </View>


        )
    }
};

const styles = StyleSheet.create({
    containter: {
        flex: 1,
    },
    welcom: {
        fontSize: 12,
        color: 'red'
    }

})

