//Родитель
import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, ImageCart} from "../components/uikit";
import {STARGATE_DETAILS} from "../routes";

const url = 'https://api.tvmaze.com/search/shows?q=stargate'

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
        const {navigation} = this.props
        console.log("this.props", this.props)
        return (
            <View style={containter}>
                <Header title={title}/>
                <ScrollView>
                    <View style={blockCart}>
                        {data.map(item => (
                            <ImageCart data={item}
                                       key={item.show.id}
                                       //onPress={()=> console.log("OnPress")}
                                       onPress={() => navigation.navigate(STARGATE_DETAILS, (item.show))}
                            />
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
        backgroundColor: 'white'
    },
    blockCart: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: 120,
        marginTop: 20
    }

})

