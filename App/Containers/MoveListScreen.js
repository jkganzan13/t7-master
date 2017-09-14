import React, { Component } from 'react'
import NavigationBar from 'react-native-navbar';
import { ScrollView, View, TouchableWithoutFeedback, Text, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import MoveCard from '../Components/MoveCard'
import R from 'ramda'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MoveListScreenStyle'
import characters from "../Assets/data";

const FilterBtn = (
  <TouchableWithoutFeedback onPress={() => console.log('filter clicked')} >
    <Icon name="filter" size={30} style={{ alignSelf: 'center', marginRight: 8 }} color="white" />
  </TouchableWithoutFeedback>
);

class MoveListScreen extends Component {
  render () {
    const character = R.find(R.propEq('number', this.props.character))(characters);
    if(!character) return null;

    const leftButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigation.goBack(),
      tintColor: 'white',
    };

    const titleConfig = {
      title: character.name,
      tintColor: 'white',
    };

    const movesFromCommandList = R.reject(m => R.isNil(m.number), character.moves);
    const moves = R.sortBy(R.prop('number'))(movesFromCommandList);

    return (
      <View style={styles.container}>
        <NavigationBar
          leftButton={leftButtonConfig}
          rightButton={FilterBtn}
          title={titleConfig}
          containerStyle={styles.navStyle}
        />
        <ScrollView style={styles.scrollView}>
          <KeyboardAvoidingView behavior='position'>
            {
              moves.map((move, i) => (
                <MoveCard
                  key={i}
                  move={move}
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
    character: state.app.character
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoveListScreen)
