import React from 'react';
import classNames from 'classnames/bind';
import styles from './Form.scss';

const cx = classNames.bind(styles);

const Form = () => {
  return (
    <div className={cx('form-wrapper')}>
      <div>
        <input
          type="number"
          placeholder="test"
          name='hours'
        />
        <input
          type="number"
          placeholder="test"
          name='minuates'
        />
        <input
          type="number"
          placeholder="test"
          name='second'
        />
      </div>
      <div className={cx('button')}>버튼</div>
    </div>
  );
}

export default Form;
