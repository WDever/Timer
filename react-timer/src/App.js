import React, { Component } from 'react';
import Form from './components/Form';
import TimerTemplate from './components/TimerTemplate';
import Button from './components/Button';

class App extends Component {
  state = {
    contents: true,
    hour: 0,
    min: 0,
    sec: 0,
    time: 0
  };

  handleAction = () => {
    const { contents } = this.state;

    console.log(this.state.hour);
    console.log(this.state.min);
    console.log(this.state.sec);

    this.setState({
      contents: !contents
    });
  };

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({
      [e.target.name]: value
    });
  }

  render() {
    const {
      contents,
      hour,
      min,
      sec,
      time
    } = this.state
    const {
      handleAction,
      handleChange
    } = this;

    return (
      <TimerTemplate form={(
        <Form
          onChange={handleChange}
          hour={hour}
          min={min}
          sec={sec}
          value={time}
          contents={contents}
        />
)}
      >
        <Button
          onClick={handleAction}
          contents={contents}
        />
      </TimerTemplate>
    );
  }
}

export default App;
