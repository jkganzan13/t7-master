import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import R from 'ramda'
import CONSTANTS from '../Constants'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setCharacter: ['character'],
  setMoveFilter: ['filter', 'checked'],
})

export const AppTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  character: 19,
  filters: [],
})

/* ------------- Reducers ------------- */

export const setCharacter = (state, { character }) => state.merge({ character });

export const setMoveFilter = (state, { filter, checked }) => {
  const filters = !!checked ? [...state.filters, filter] : R.reject(R.equals(filter), state.filters);
  return state.merge({ filters });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CHARACTER]: setCharacter,
  [Types.SET_MOVE_FILTER]: setMoveFilter,
})
