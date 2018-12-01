import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './src/components/uikit/Header';


export default class App extends Component {
    //Model
    state = {
        title: 'TravelGuide'
    };
    //View
    render() {
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
            color : 'red'
        }

    })

