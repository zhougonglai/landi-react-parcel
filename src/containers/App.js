import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd-mobile';

import Page from '../components/Page';

class App extends React.Component {

  increment = () => {
    this.props.dispatch({type: 'INCREMENT'})
  }
  decrement = () => {
    this.props.dispatch({type: 'DECREMENT'})
  }

  render() {
    const { counter } = this.props;

    return (
      <Page id="content">
        bjhbj
        <Button type="primary">asfasf</Button>
      </Page>
    )
  }
}

const mapStateToProps = ({categories, counter}) => ({categories, counter});

export default connect(mapStateToProps)(App);