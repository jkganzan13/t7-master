import React from 'react';
import PropTypes from 'prop-types';
import MoveCard from './MoveCard'
import { KeyboardAvoidingView } from 'react-native'

const MoveList = ({ moves }) => (
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
);

MoveList.propTypes = {
  moves: PropTypes.array.isRequired,
};

export default MoveList
