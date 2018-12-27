import React from 'react';
import classNames from 'classnames/bind';
import styles from './Form.scss';

const cx = classNames.bind(styles);

const Form = ({ onChange, value, hour, min, sec, contents }) => {
  const readAble = !contents;
  return (
    <div className={cx('form-wrapper')}>
      <div className={cx('inputs-wrapper')}>
        <input
          value={hour}
          onChange={onChange}
          type="number"
          placeholder="00"
          name="hour"
          className={cx('inputs')}
          readOnly={readAble}
        /> :
        <input
          value={min}
          onChange={onChange}
          type="number"
          placeholder="00"
          name="min"
          className={cx('inputs')}
          readOnly={readAble}
        /> :
        <input
          value={sec}
          onChange={onChange}
          type="number"
          placeholder="00"
          name="sec"
          className={cx('inputs')}
          readOnly={readAble}
        />
      </div>
    </div>
  );
}

export default Form;
