import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Image,
  View,
  Button,
  TouchableWithoutFeedback ,
} from 'react-native'
import NavigationBar from 'react-native-navbar';
import { connect } from 'react-redux'
import AppActions from '../Redux/AppRedux'
import characters from '../Assets/data'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CharacterListScreenStyle'

const charStyle = {
  borderWidth: 1,
  padding: 5,
  margin: 5,
}

const CharacterIcon = ({ id, name, onCharacterPress }) => (
  <TouchableWithoutFeedback onPress={() => onCharacterPress(id)}>
    <View style={charStyle}>
      <Text style={styles.text}>{name}</Text>
      {/*<Image source={require(`../Assets/chars/${name.toLowerCase()}_thumbnail.png`)}/>*/}
    </View>
  </TouchableWithoutFeedback>
);

class CharacterListScreen extends Component {
  constructor(props) {
    super(props);

    this.navigateToMoveList = this.navigateToMoveList.bind(this);
    this.onCharacterPress = this.onCharacterPress.bind(this);
  }

  navigateToMoveList() {
    this.props.navigation.navigate('MoveListScreen')
  }

  onCharacterPress(id) {
    this.navigateToMoveList()
    this.props.setCharacter(id)
  }

  render () {

    const leftButtonConfig = {
      title: 'Menu',
      handler: () => this.props.navigation.goBack(),
      tintColor: 'white',
    };

    const titleConfig = {
      title: 'Home',
      tintColor: 'white',
    };


    return (
      <View style={styles.container}>
        <NavigationBar
          leftButton={leftButtonConfig}
          title={titleConfig}
          containerStyle={styles.navStyle}
        />
        <ScrollView style={styles.scrollView}>
          <KeyboardAvoidingView behavior='position'>
            {
              characters.map((character, i) => (
                <CharacterIcon
                  key={character.number}
                  name={character.name}
                  id={character.number}
                  fullName={character.fullName}
                  onCharacterPress={this.onCharacterPress}
                />
              ))
            }
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    character: state.app.character,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCharacter: id => dispatch(AppActions.setCharacter(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterListScreen)
