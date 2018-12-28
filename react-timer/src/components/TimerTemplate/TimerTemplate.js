import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TimerTemplate.scss';

const cx = classNames.bind(styles);

const TimerTemplate = ({ children, form }) => {
  return (
    <div className={cx('timer-template')}>
      <div className={cx('title')}>
        타이머
      </div>
      <section className={cx('form-template')}>
        {form}
      </section>
      <section className={cx('children-template')}>
        {children}
      </section>
    </div>
  );
}

TimerTemplate.propTypes = {
  children: PropTypes.element,
  form: PropTypes.element
};

TimerTemplate.defaultProps = {
  children: null,
  form: null
};

export default TimerTemplate
