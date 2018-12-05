import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import {
    STARGATE_HOME,
} from '../routes'
export default createStackNavigator(
    {
        [STARGATE_HOME] : HomeScreen
    },
    {
        initialRouteName: STARGATE_HOME,
        headerMode: 'none'
    }
)