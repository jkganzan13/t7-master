import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/AppRedux'
import Immutable from 'seamless-immutable'

describe('setMoveFilter', () => {
  test('should push filterType to state.filters when value is true', () => {
    const state = reducer(INITIAL_STATE, Actions.setFilter('TEST_FILTER', true));
    expect(state.filters).toEqual(['TEST_FILTER'])
  });
  test('should remove filterType from state.filters when value is false', () => {
    const newState = Immutable({
      character: null,
      filters: ['TEST_FILTER']
    });
    const state = reducer(newState, Actions.setFilter('TEST_FILTER', false));
    expect(state.filters).toEqual([])
  });
});
