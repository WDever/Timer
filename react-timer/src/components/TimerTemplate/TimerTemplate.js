import React from 'react'
import styles from './TimerTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TimerTemplate = ({ children, form }) => {
  return (
    <div className={cx('timer-template')}>
      <div className={cx('title')}>
        타이머
      </div>
      <div className={cx('form-template')}>
        {form}
      </div>
      <div className={cx('children-template')}>
        {children}
      </div>
    </div>
  );
}

export default TimerTemplate
