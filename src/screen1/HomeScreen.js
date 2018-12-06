//Родитель
import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, ImageCart} from "../components/uikit";

const url = 'https://api.tvmaze.com/search/shows?q=startgate'

export default class HomeScreen extends Component {
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
        }
    }

    //View
    render() {
        const {title, data} = this.state
        const {containter, safeArea, blockCart} = styles
        return (
            <View style={containter}>
                <Header title={title}/>
                <ScrollView>
                    <View style={blockCart}>
                        {data.map(item => (
                            <ImageCart data={item} key={item.id}/>
                        ))}
                    </View>
                </ScrollView>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    containter: {
        flex: 1,
    },
    blockCart: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: 120,
        marginTop: 20
    }

})

