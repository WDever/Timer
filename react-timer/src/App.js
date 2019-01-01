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
  };

  time = 0;

  handleAction = () => {
    const { contents, hour, min, sec } = this.state;

    this.time = Number(hour * 3600 + min * 60 + sec);

    this.setState(() => ({
      contents: !contents,
    }));

    return contents ? this.timeChecker() : clearInterval(this.interval);
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({
      [e.target.name]: Number(value),
    });
  };

  handleSave = () => {
    localStorage.setItem('time', this.time);
  };

  handleClear = () => localStorage.getItem('time') !== null
      ? this.timeClear()
      : alert('저장된 시간이 없습니다.');

  timeClear = () => {
    localStorage.clear();

    this.time = 0;

    this.timesSetter();
  };

  timeChecker = () => {
    this.interval = setInterval(() => this.timerHandler(), 1000);
    return this.time !== 0 ? this.interval : alert('시간을 설정해주세요.');
  };

  timerHandler = () => {
    const { hour, min } = this.state;

    this.time -= 1;

    if (this.time === 0) {
      this.setState({
        sec: this.time - hour * 3600 - min * 60, // This makes sec: 0, bcuz when time is 0, sec didnt update. But with this code, it is updated
      });
      clearInterval(this.interval);
    } else {
      this.timesSetter();
    }
  };

  timesSetter = () => {
    this.setState(
      () => ({
        hour: Math.floor(this.time / 3600),
      }),
      () => {
        this.setState(
          prevState => ({
            min: Math.floor((this.time - prevState.hour * 3600) / 60), // prevState.hour means just changed hour value. Without this, min will be -1
          }),
          () => {
            this.setState(prevState => ({
              sec: this.time - prevState.hour * 3600 - prevState.min * 60, // prevState means just changed valud. Without this, sec will be -1
            }));
          },
        );
      },
    );
  };

  componentDidMount = () => {
    if (localStorage.getItem('time')) {
      this.time = Number(localStorage.getItem('time'));
      this.timerHandler();
    }
  };

  render() {
    const { contents, hour, min, sec, time } = this.state;

    const { handleAction, handleChange, handleSave, handleClear } = this;

    return (
      <TimerTemplate
        form={(
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
          handleSave={handleSave}
          handleClear={handleClear}
          contents={contents}
        />
      </TimerTemplate>
    );
  }
}

export default App;
