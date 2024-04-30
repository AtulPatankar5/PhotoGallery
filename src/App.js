import React from 'react';
import HomePage from './Component/HomePage';

class App extends React.Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <HomePage />
        </React.Fragment>
      </div>
    );
  }
}
export default App;