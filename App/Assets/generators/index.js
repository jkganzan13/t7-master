import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView, Text, Image, View } from 'react-native'
import R from 'ramda';
import buttons from '../button/png'
import arrows from '../arrow/png'

const styles = StyleSheet.create({
  buttons: {
    width: 20,
    height: 20,
  },
  text: {
    marginRight: 5,
    color: 'white',
  }
});

const ButtonImage = ({ command }) => <Image style={styles.buttons} source={buttons[command]} />;

const ArrowImage = ({ command }) => <Image style={styles.buttons} source={arrows[command]} />;
const arrowKeys = R.keys(arrows);

const buttonKeys = R.keys(buttons);

export const generateButtonString = (commands) => {
  return commands.map((command, i) => {
    if(R.contains(command, arrowKeys)) {
      return <ArrowImage key={i} command={command} />
    }
    if(R.contains(command, buttonKeys)) {
      return <ButtonImage key={i} command={command} />
    }
    return <Text key={i} style={styles.text}>{command}</Text>
  })
};
