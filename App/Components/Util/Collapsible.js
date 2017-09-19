import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native'
import { CheckBox, Text, Icon } from 'react-native-elements'

const style = {
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  collapsible: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  headerText: {
    alignSelf: 'flex-start'
  },
  headerIcon: {
    marginLeft: 'auto'
  },
};

class Collapsible extends  Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.toggleCollapsible = this.toggleCollapsible.bind(this);
  }

  toggleCollapsible() {
    this.setState({ show: !this.state.show })
  }

  renderBody() {
    const { options, onCheck } = this.props;
    return (
      <View>
        {
          options.map((option, i) => {
            const handleCheck = () => onCheck(option.filterType, !option.checked);
            return (
              <CheckBox
                key={i}
                title={option.text}
                onPress={handleCheck}
                onIconPress={handleCheck}
                checked={option.checked}
              />
            )
          })
        }
      </View>
    )
  }

  renderHeader() {
    return (
      <View style={style.container}>
        <Text h4 style={style.headerText}>{this.props.title}</Text>
        {
          this.state.show
            ? <Icon style={style.headerIcon} name="close" onPress={this.toggleCollapsible} />
            : <Icon style={style.headerIcon} name="keyboard-arrow-down" onPress={this.toggleCollapsible} />
        }
      </View>
    )
  }

  render() {
    return (
      <View style={style.collapsible}>
        { this.renderHeader() }
        { this.state.show ? this.renderBody() : null }
      </View>
    );
  }
}

Collapsible.propTypes = {
  options: PropTypes.array.isRequired,
  onCheck: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Collapsible
