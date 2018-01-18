import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'mobx-react';

import {
  Button,
  Msg
} from 'react-weui';

import Page from './components/Page';
import Store from './store';
import App from './containers/App';

import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './styles/app.styl';

const appstore = Store.getInstance();

const store = {
  appstore
}

class Root extends React.Component {
  render () {
    return (
      <Provider {...store}>
        <App />
      </Provider>
    )
  }
}

render(<Root />, document.getElementById('app'));

if(module.hot) {
  module.hot.accept(()=>{
    render(<Root />, document.getElementById('app'));
  });
}