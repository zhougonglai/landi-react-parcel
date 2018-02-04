import React from 'react';
import {Flex} from 'antd-mobile';

export default class Page extends React.Component{
  state = {
    current: 'mail',
  }

  componentWillMount() {
    const page = await import('../utils/helper');
    console.log(page);
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Flex className="page" direction="column" align="stretch">
        <Flex.Item>
          {this.props.children}
        </Flex.Item>
      </Flex>
    )
  }
}