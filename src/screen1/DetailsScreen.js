import React, { PureComponent } from 'react'
import { View, Text  } from 'react-native'
import {Header} from "../components/uikit/Header"
import Icon from 'react-native-vector-icons/FontAwesome'

class DetailsScreen extends PureComponent {
    render(){
        console.log("this.props", this.props)
        const {title, img, description} = this.props.navigation.state.params
        return(
            <View>
                <Header title={title}/>
                <Text>'Hello world'</Text>
                <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
                    Login with Facebook
                </Icon.Button>
            </View>
        )
    }
}
export default DetailsScreen