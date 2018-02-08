import React from 'react';
import {Flex} from 'antd-mobile';

export default class Page extends React.Component{
  render() {
    return (
      <div className="default-page-style">
        {this.props.children}
      </div>
    )
  }
}