import React from 'react';

import classes from './Button.module.scss';

const Button = (props) => (
    <button
      style={props.customStyle}
      disabled={props.disabled}
      className={[classes.Button, classes[props.btnType]].join(' ')}
      onClick={props.clicked}>{props.children}</button>
);

export default Button;