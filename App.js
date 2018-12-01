//Родитель
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './src/components/uikit/Header';

const url = 'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json'
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
            //console.log(data[0])
            //Post Date
            this.setState({data})
        } catch (e) {
            throw e
            console.log("Ошибка", e)

        }

    }

    //View
    render() {
        console.log(this.state.data)
        return (
            <View style={styles.containter}>
                <Header title={this.state.title}/>
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

