import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { App, HelloWorld } from './components/';
import store from './store/';

require ('font-awesome/less/font-awesome.less');

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HelloWorld} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById ('app')
);
