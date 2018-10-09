const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const Form = document.getElementById('SetForm');
const innerForm = document.getElementById('setForm_in');
let time = 0;
let TimerStart;
const secondBtns = document.getElementById('secondBtn');
const timerSet = document.getElementById('timer');
const submitBtn = document.getElementById('SetFormBtn');
const saveBtn = document.getElementById('Save');
const reBtn = document.getElementById('rePlay');
const clearBtn = document.getElementById('clear');

// Form

window.onload = function () {
  submitBtn.addEventListener('click', GoNext);
  sec.addEventListener('keydown', GoNextKey);
  saveBtn.addEventListener('click', saveTime);
  reBtn.addEventListener('click', rePlay);
  clearBtn.addEventListener('click', clear);
  if(localStorage.time != '') {
    hour.value = Math.floor(localStorage.time / 3600);
    min.value = Math.floor((localStorage.time - hour.value * 3600) / 60);
    sec.value = localStorage.time - hour.value * 3600 - min.value * 60;
  }
  else {
    hour.value = 0;
    min.value = 0;
    sec.value = 0;
  }
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
  localStorage.setItem('time', time);
  console.log(localStorage.time);
};

const rePlay = () => {
  saveBtn.style.display = 'flex';
  reBtn.style.display = 'none';
  time = parseInt(hour.value * 3600) + parseInt(min.value * 60) + parseInt(sec.value);
  TimerStart = setInterval('timer()', 1000);
};

const clear = () => {
  localStorage.clear();
}

// (() => {
//   submitBtn.addEventListener('click', GoNext);
//   sec.addEventListener('keydown', GoNextKey);
//   saveBtn.addEventListener('click', saveTime);
//   reBtn.addEventListener('click', rePlay);
// })();
