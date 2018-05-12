import React from 'react';
import ReactDOM from 'react-dom';
import { App } from  'App';

class Index extends React.Component {
  render(){
    return(
      <div id="root"></div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
