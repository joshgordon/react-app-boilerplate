import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/';

const _store = createStore (
  rootReducer,
  applyMiddleware(
    thunk
  )
);

if (module.hot) {
  module.hot.accept ('../reducers/', () =>
    _store.replaceReducer (require ('../reducers/'))
  );
}

export default _store;
