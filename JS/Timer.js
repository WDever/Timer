let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let Form = document.getElementById('SetForm');
let innerForm = document.getElementById('setForm_in');
let time = 0;
let TimerStart;
let timerSet = document.getElementById('timer');
let secondBtns = document.getElementById('secondBtn');
let submitBtn = document.getElementById('SetFormBtn');
let saveBtn = document.getElementById('Save');
let reBtn = document.getElementById('rePlay');

// Form

window.onload = function () {
  submitBtn.addEventListener('click', GoNext);
  sec.addEventListener('keydown', GoNextKey);
  saveBtn.addEventListener('click', saveTime);
  reBtn.addEventListener('click', rePlay);
};

const GoNext = () => {
  submitBtn.style.display = 'none';
  secondBtns.style.display = 'flex';
  innerForm.style.display = 'none';
  TimerStart = setInterval('timer()', 1000);
  time = parseInt(hour.value * 3600) + parseInt(min.value * 60) + parseInt(sec.value);
  timerSet.style.display = 'flex';
  timerSet.innerHTML = `${hour.value} : ${min.value} : ${sec.value}`;
  console.log(time);
};

const GoNextKey = () => {
  if (window.event.keyCode == 13) {
    submitBtn.style.display = 'none';
    secondBtns.style.display = 'flex';
    innerForm.style.display = 'none';
    TimerStart = setInterval('timer()', 1000);
    time = parseInt(hour.value * 3600) + parseInt(min.value * 60) + parseInt(sec.value);
    timerSet.style.display = 'flex';
    timerSet.innerHTML = `${hour.value} : ${min.value} : ${sec.value}`;
    console.log(time);
  }
};

// FormEnd

// Timer func

const timer = () => {
  console.log('실행');
  --time;
  console.log(time);
  hour.value = Math.floor(time / 3600);
  min.value = Math.floor((time - hour.value * 3600) / 60);
  sec.value = time - hour.value * 3600 - min.value * 60;

  timerSet.innerHTML = `${hour.value} : ${min.value} : ${sec.value}`;
  if (time === 0) {
    clearInterval(TimerStart);
  }
};

const saveTime = () => {
  clearInterval(TimerStart);
  saveBtn.style.display = 'none';
  reBtn.style.display = 'flex';
  timerSet.innerHTML = `${hour.value} : ${min.value} : ${sec.value}`;
};

const rePlay = () => {
  saveBtn.style.display = 'flex';
  reBtn.style.display = 'none';
  time = parseInt(hour.value * 3600) + parseInt(min.value * 60) + parseInt(sec.value);
  TimerStart = setInterval('timer()', 1000);
};
