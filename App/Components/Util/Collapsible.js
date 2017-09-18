import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'

const Collapsible = ({ options, onCheck, title }) => (
  <View>
    <Text>{title}</Text>
    <View>
      {
        options.map((option, i) => {
          const handleCheck = () => {
            console.log(option.filterType, !option.checked);
            onCheck(option.filterType, !option.checked);
          };
          return (
            <CheckBox
              key={i}
              title={option.text}
              onIconPress={handleCheck}
              checked={option.checked}
            />
          )
        })
      }
    </View>
  </View>
);

Collapsible.propTypes = {
  options: PropTypes.array.isRequired,
  onCheck: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Collapsible
