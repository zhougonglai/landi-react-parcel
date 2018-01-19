import React from 'react';
import {Msg} from 'react-weui';
import {inject, observer} from 'mobx-react';

import Page from '../components/Page';

@inject('appstore')
@observer
class App extends React.Component {
  componentWillMount() {
    console.log(this.props.appstore);
  }

  log = () => {
    this.props.appstore.setUser({a:1, b:2, c:3 , d:123123});
  }

  logout = () => {
    this.props.appstore.setUser({});
  }

  render() {
    const {appstore} = this.props;

    return (
      <Page id="content">
          <Msg 
            type="success"
            title="Action Success"
            description={JSON.stringify(appstore.user)}
            buttons={[{
                type: 'primary',
                label: 'Ok',
                onClick: this.log
            }, {
                type: 'default',
                label: 'Cancel',
                onClick: this.logout
            }]}/>
        </Page>
    )
  }
}

export default App;