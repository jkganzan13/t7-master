import { StackNavigator } from 'react-navigation'
import MoveListScreen from '../Containers/MoveListScreen'
import CharacterListScreen from '../Containers/CharacterListScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MoveListScreen: { screen: MoveListScreen },
  CharacterListScreen: { screen: CharacterListScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MoveListScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
