import { FETCH_WEATHER } from '../actions/index';

// first arg is always state, second is always action
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // don't mutate the state!
      // instead, create an entirely new array and return that instead.
      return [ action.payload.data, ...state ]; // [ city, city, city ] NOT [ city, [ city, city ] ]
  }
  return state;
}
