import Constants from '../constants/';

export const fakeAction = (value) => {
  return {
    type: Constants.FAKE_CONSTANT,
    value
  }
};
