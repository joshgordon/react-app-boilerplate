import { fromJS } from 'immutable';
import Constants from '../constants/';

const initialState = fromJS ({});

const fakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.FAKE_CONSTANT:
      return state;
    default:
      return state;
  }
}
export default fakeReducer;
