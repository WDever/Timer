import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const cx = classNames.bind(styles);

const Button = ({ onClick, contents }) => (
  <div className={cx('Button-wrapper')}>
    <div
      className={cx('Button')}
      onClick={onClick}
      onKeyDown={onClick}
      onLo
      role="Button"
      tabIndex="0"
    >
      {contents ? '시작' : '정지'}
    </div>
  </div>
  );

Button.propTypes = {
  onClick: PropTypes.func,
  contents: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => console.warn('No handleAction!'),
  contents: true,
};

export default Button;
