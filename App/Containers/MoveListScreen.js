import React, { Component } from 'react'
import NavigationBar from 'react-native-navbar'
import { ScrollView, TouchableWithoutFeedback } from 'react-native'
import AppActions from '../Redux/AppRedux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import MoveList from '../Components/Moves/MoveList'
import R from 'ramda'
import Drawer from 'react-native-drawer'
import FilterSidebar from '../Components/Filters/FilterSidebar';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MoveListScreenStyle'
import characters from "../Assets/data";



class MoveListScreen extends Component {
  constructor(props){
    super(props);
    this.toggleRightSidebar = this.toggleRightSidebar.bind(this);
  }

  toggleRightSidebar() {
    this._drawer.toggle()
  }

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


    const FilterBtn = (
      <TouchableWithoutFeedback onPress={this.toggleRightSidebar} >
        <Icon name="filter" size={30} style={{ alignSelf: 'center', marginRight: 8 }} color="white" />
      </TouchableWithoutFeedback>
    );

    return (
      <Drawer
        content={<FilterSidebar filters={this.props.filters} onFilterCheck={this.props.setMoveFilter} />}
        tapToClose={true}
        side={'right'}
        ref={(ref) => this._drawer = ref}
        acceptPan={false}
        type={'overlay'}
        openDrawerOffset={0.2}
        closedDrawerOffset={-3}
      >
        <NavigationBar
          leftButton={leftButtonConfig}
          rightButton={FilterBtn}
          title={titleConfig}
          containerStyle={styles.navStyle}
        />
        <ScrollView style={styles.scrollView}>
          <MoveList moves={moves} />
        </ScrollView>
      </Drawer>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    character: state.app.character,
    filters: state.app.filters,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMoveFilter: (filter, checked) => dispatch(AppActions.setMoveFilter(filter, checked))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoveListScreen)
