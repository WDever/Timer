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
    const { contents, hour, min, sec } = this.state;

    this.setState({
      contents: !contents,
      time: Number((hour * 3600) + (min * 60) + sec)
    });

    const starter = contents ? this.timerStart() : clearInterval(this.interval);
  } 

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({
      [e.target.name]: Number(value)
    });
  }

  timerStart = () => {
    this.interval = setInterval(() => {
      this.timerAction();
    }, 1000);
  }

  timerAction = () => {
    const { hour, min, sec, time } = this.state;

    console.log(`HHHHH ${time}`);

    this.setState({
      time: time - 1,
      hour: Math.floor(time / 3600),
      min: Math.floor((time - hour * 3600) / 60),
      sec: time - (hour * 3600) - (min * 60),
    });

    console.log(`hour ${hour}`);
    console.log(`min ${min}`);
    console.log(`sec ${sec}`);
    console.log(`time ${time}`);

    if (time === 0) {
      console.log(`clearTime ${time}`);
      clearInterval(this.interval);
    }
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
