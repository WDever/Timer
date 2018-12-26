import React, { Component } from 'react';
import Form from './components/Form';
import TimerTemplate from './components/TimerTemplate';
import Button from './components/Button';

class App extends Component {
  state = {
    contents: true
  };

  handleAction = () => {
    const { contents } = this.state;

    this.setState({
      contents: !contents
    });
  };

  render() {
    const { contents } = this.state;
    const { handleAction } = this;
    return (
      <TimerTemplate form={<Form />}>
        <Button
          onClick={handleAction}
          contents={contents}
        />
      </TimerTemplate>
    );
  }
}

export default App;
