import React from 'react';
import {Msg} from 'react-weui';
import {connect} from 'react-redux';

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
          <Msg 
            type="success"
            title="Action Success"
            description={`count: ${counter.count}`}
            buttons={[{
                type: 'primary',
                label: 'Ok',
                onClick: this.increment
            }, {
                type: 'default',
                label: 'Cancel',
                onClick: this.decrement
            }]}/>
        </Page>
    )
  }
}

const mapStateToProps = ({categories, counter}) => ({categories, counter});

export default connect(mapStateToProps)(App);