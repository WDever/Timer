import React, { Component } from 'react';
import Form from './components/Form';
import TimerTemplate from './components/TimerTemplate';

class App extends Component {
  render() {
    return (
      <TimerTemplate form={<Form />} />
    );
  }
}

export default App;
