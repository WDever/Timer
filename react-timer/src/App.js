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

    const starter = contents ? this.timerStart() : clearInterval(this.interval);  // eslint rule: ? operator should be like this
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

    // component update

    this.setState(() => ({  // setState is asynchronous
      time: time - 1,
    }), () => this.statesSetter());  // stateSetter will call after setState working is done
  }

  statesSetter = () => {
    const { time, hour, min, sec } = this.state;

    if (time === 0) {
      this.setState({
        sec: time - (hour * 3600) - (min * 60)  // This makes sec: 0, bcuz when time is 0, sec didnt update. But with this code, it is updated
      });
      clearInterval(this.interval);
    } else {
      this.setState(() => ({
        hour: Math.floor(time / 3600),
      }), () => {
        this.setState((prevState, prevProps) => ({
          min: Math.floor((time - prevState.hour * 3600) / 60),  // prevState.hour means just changed hour value. Without this, min will be -1
        }), () => {
          this.setState((prevState, prevProps) => ({
            sec: time - (prevState.hour * 3600) - (prevState.min * 60),  // prevState means just changed valud. Without this, sec will be -1
          }));
        });
      });
    }
  }

  componentDidMount = () => {
    
  }

  render() {
    const {
      contents,
      hour,
      min,
      sec,
      time
    } = this.state;

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
