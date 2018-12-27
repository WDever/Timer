import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Form.scss';

const cx = classNames.bind(styles);

const Form = ({ onChange, hour, min, sec, contents }) => {
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

Form.propTypes = {
  onChange: PropTypes.func,
  hour: PropTypes.number,
  min: PropTypes.number,
  sec: PropTypes.number,
  contents: PropTypes.bool
}

Form.defaultProps = {
  onChange: () => console.warn('no onChange'),
  hour: 0,
  min: 0,
  sec: 0,
  contents: true
}

export default Form;
