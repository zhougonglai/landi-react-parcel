import React from 'react';
import {render} from 'react-dom';

import { 
  Button, 
  Flex, 
  WhiteSpace, 
  WingBlank,
  NavBar,
  Result,
  Icon
} from 'antd-mobile';

import './styles/app.styl';

const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;

class App extends React.Component {
  render () {
    return (
      <div id="content">
        <NavBar 
        mode="dark"
        icon={<Icon type="left" />}
        rightContent={<Icon type="ellipsis"/>}
        >header</NavBar>
        <div>
          <Result
            img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
            title="支付成功"
            message={<div>998.00元 <del>1098元</del></div>}
          />
        </div>
      </div>
    )
  }
}




if(module.hot) {
  module.hot.accept(()=>{
    render(<App />, document.getElementById('app'));
  });
} else {
  render(<App />, document.getElementById('app'));
}