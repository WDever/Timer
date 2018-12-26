import React from 'react';
import classNames from 'classnames/bind';
import styles from './Form.scss';

const cx = classNames.bind(styles);

const Form = ({ onChange, value }) => {
  return (
    <div className={cx('form-wrapper')}>
      <div className={cx('inputs-wrapper')}>
        <input
          type="number"
          placeholder="00"
          name='hours'
          className={cx('inputs')}
        /> :
        <input
          type="number"
          placeholder="00"
          name='minuates'
          className={cx('inputs')}
        /> :
        <input
          type="number"
          placeholder="00"
          name='second'
          className={cx('inputs')}
        />
      </div>
    </div>
  );
}

export default Form;
