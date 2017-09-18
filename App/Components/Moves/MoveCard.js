import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { generateButtonString } from '../../Assets/generators'

const colorWhite = {
  color: 'white',
};

const style = {
  card: {
    borderWidth: 1,
    margin: 5,
  },
  row: {
    flexDirection:'row',
    flex: 1
  },
  text: {
    marginRight: 5,
    ...colorWhite,
  },
  moveNum: {
    height: 20,
    flex: 1,
    textAlign: 'center',
    borderWidth: 1,
    backgroundColor: 'black',
    ...colorWhite,
  },
  triangleTopLeft: {
    borderStyle: 'solid',
    borderTopWidth: 20,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderTopColor: 'black',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  flexOffset: {
    flex: 1,
  },
  flexContent: {
    flex: 8,
    flexDirection:'row',
  },
  moveName: {
    fontSize: 16,
    flex: 7,
    ...colorWhite,
  },
  moveSpeed: {
    textAlign: 'center',
    flex: 1,
    ...colorWhite,
  },
  content: {
    marginBottom: 5,
  }
};

const Row = ({ children, rowStyle }) => (
  <View style={{ ...style.row, ...rowStyle }}>
    {children}
  </View>
);

const Content = ({ children, rowStyle }) => (
  <Row rowStyle={rowStyle}>
    <Text style={style.flexOffset}>{''}</Text>
    <View style={style.flexContent}>
      { children }
    </View>
  </Row>
);

const MoveCard = ({ move }) => {
  const {
    number,
    name,
    notation,
    hitLevel,
    damage,
    speed,
    onBlk,
    onHit,
    onCh,
    notes,
    properties,
  } = move;

  return (
    <View style={style.card}>
      <Row>
        <View style={style.row}>
          <Text style={style.moveNum}>{number}</Text>
          <Text style={style.triangleTopLeft}>{''}</Text>
        </View>
        <Text style={style.moveName}>{name}</Text>
      </Row>
      <Content rowStyle={style.content}>
        { generateButtonString(notation) }
      </Content>
    </View>
  );
}

export default MoveCard;
