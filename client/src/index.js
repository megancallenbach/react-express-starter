import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './containers/homepage';
import { register } from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

export const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </Router>
  </Provider>, document.getElementById('root'));
register();