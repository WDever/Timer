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
    time: 0,
  };

  handleAction = () => {
    const { contents, hour, min, sec } = this.state;

    const starter = () =>
      contents ? this.timeChecker() : clearInterval(this.interval); // eslint rule: ? operator should be like this

    this.setState(
      () => ({
        contents: !contents,
        time: Number(hour * 3600 + min * 60 + sec),
      }),
      () => starter(),
    );
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({
      [e.target.name]: Number(value),
    });
  };

  handleSave = () => {
    const { time } = this.state;

    localStorage.setItem('time', time);

    console.log(localStorage.getItem('time'));
  };

  handleClear = () => {
    console.log('active');
    console.log(localStorage.getItem('time'));
    return localStorage.getItem('time') !== null
      ? this.timeClear()
      : alert('저장된 시간이 없습니다.');
  };

  timeClear = () => {
    localStorage.clear();

    this.setState(
      () => ({
        time: 0,
      }),
      () => this.timesSetter(),
    );
  };

  timeChecker = () => {
    const { time } = this.state;

    return time !== 0 ? this.timerStart() : alert('시간을 설정해주세요.');
  };

  timerStart = () => {
    this.interval = setInterval(() => {
      this.timerAction();
    }, 1000);
  };

  timerAction = () => {
    const { time } = this.state;

    // component update

    this.setState(
      () => ({
        // setState is asynchronous
        time: time - 1,
      }),
      () => this.timerHandler(),
    ); // timerHandler will call after setState working is done
  };

  timerHandler = () => {
    const { time, hour, min } = this.state;

    if (time === 0) {
      this.setState({
        sec: time - hour * 3600 - min * 60, // This makes sec: 0, bcuz when time is 0, sec didnt update. But with this code, it is updated
      });
      clearInterval(this.interval);
    } else {
      this.timesSetter();
    }
  };

  timesSetter = () => {
    const { time } = this.state;
    this.setState(
      () => ({
        hour: Math.floor(time / 3600),
      }),
      () => {
        this.setState(
          prevState => ({
            min: Math.floor((time - prevState.hour * 3600) / 60), // prevState.hour means just changed hour value. Without this, min will be -1
          }),
          () => {
            this.setState(prevState => ({
              sec: time - prevState.hour * 3600 - prevState.min * 60, // prevState means just changed valud. Without this, sec will be -1
            }));
          },
        );
      },
    );
  };

  componentDidMount = () => {
    if (localStorage.getItem('time')) {
      this.setState(
        () => ({
          time: Number(localStorage.getItem('time')),
        }),
        () => this.timerHandler(),
      );
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
