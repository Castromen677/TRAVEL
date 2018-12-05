//Родитель
import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, ImageCart} from "../components/uikit";
import {
    STARGATE_DETAILS
} from '../routes'
import { WHITE, BLUE } from '../../constants'

const url = 'https://api.tvmaze.com/search/shows?q=stargate'
//const url = 'https://api.tvmaze.com/search/shows?q=girls'

export default class HomeScreen extends Component {
    //Model
    state = {
        title: 'TravelGuide',
        data: []
    }
    componentDidMount = async () => {
        try {
            const respons = await fetch(url) // Get Data
            const data = await respons.json()
            this.setState({ data }) //Post Date
        } catch (e) {
            throw e
        }
    }
    onGoBack = (someDataFromChildren) => {
        console.log('someDataFromChildren', someDataFromChildren)
    }
    //View
    render() {
        const {title, data} = this.state
        const {containter, blockCart} = styles
        const { navigation } = this.props
        return (
            <View style={containter}>
                <Header title={title}
                        headerColor={BLUE}
                        onPress={() => navigation.openDrawer()}
                        leftIcon='ios-menu'
                        leftColor={WHITE}
                />
                <ScrollView>
                    <View style={blockCart}>
                        {data.map(item => (
                            <ImageCart data={item.show}
                                       key={item.show.id}
                                       onPress={() => navigation.navigate(STARGATE_DETAILS, ({ show: item.show, onGoBack: this.onGoBack}))}
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
    },
    blockCart: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginBottom: 120,
        marginTop: 20
    }

})

