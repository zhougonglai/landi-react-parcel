import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Store from './store';
import App from './containers/App';

// import 'antd/dist/antd-mobile.css';
import './styles/app.styl';

class Root extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Provider  store={Store}>
          <Route component={App}/>
        </Provider>
      </BrowserRouter>
    )
  }
}

render(<Root />, document.getElementById('app'));

if(module.hot) {
  module.hot.accept(()=>{
    console.log('page replace!!!');
    render(<Root />, document.getElementById('app'));
  });
}