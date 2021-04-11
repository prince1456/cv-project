import React from 'react';

import classes from './Modal.module.scss';
import Aux from '../../../hoc/_Aux/_Aux';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';

const Modal = props => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={classes.Modal}>
        <div className={classes.Header}>
          {props.header?.toUpperCase()}
        </div>
        <hr />
        <div
          className={classes.Content}
          style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
          }}
        >
          {React.cloneElement(props.children, { callback: props.continued })}
        </div>
        <div className={classes.Footer}>
          <Button clicked={props.modalClosed} btnType="Secondary">
            Cancel
          </Button>
          {props.showContinueBtn ?
          <Button
            clicked={props.continued} 
            disabled={!props.active} 
            btnType="Primary">
            Continue
          </Button>
          : null}
        </div>
      </div>
    </Aux>
  );
};

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
