import React, { Component } from 'react';

import NavigationBar from '../ui/components/NavigationBar.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../client/main.css';

class App extends Component {
  //this.props.content is defined by what is passed to App.jsx in routes.jsx, currently this is always the MyProgress component

  render() {
    return(
      <div>
        {this.props.content}
      </div>
    )
  }
};

export default App;
