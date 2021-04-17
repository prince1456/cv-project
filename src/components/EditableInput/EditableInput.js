import React, { useState } from "react";
import Aux from "../../hoc/_Aux/_Aux";

import classes from "./EditableInput.module.scss";

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

const EditableInput = (props) => {
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(props.placeholder);
  const [fontSize, setFontsize] = useState(props.fontSize);
  const calculateFontSize = props.calculateFontSize;
  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleChange = ({ target: { value } }) => {
    setInput(value);
  };

  const handleSubmit = () => {
    let val = input?.trim();

    if (val) {
      const newFontSize = calculateFontSize(val, fontSize);
      setInput(val);
      setFontsize(newFontSize);
      setEditing(false);
      if (props.changed) props.changed(val);
    }
  };

  const resetFields = () => {
    setInput(props.placeholder);
  };

  const handleKeyDown = (event) => {
    if (event.which === ESCAPE_KEY) {
      resetFields(event);
    } else if (event.which === ENTER_KEY) {
      handleSubmit(event);
    }
  };

  return (
    <Aux>
      <label
        className={
          editing
            ? [classes.hidden, classes[props.inputType]].join(" ")
            : classes[props.inputType]
        }
        style={{ fontSize: fontSize }}
        onClick={handleEdit}
      >
        {input}
      </label>
      <input
        className={
          editing
            ? [classes[props.inputType], classes.Input].join(" ")
            : classes.hidden
        }
        value={input}
        onChange={handleChange}
        onBlur={handleSubmit}
        onKeyDown={handleKeyDown}
      />
    </Aux>
  );
};

export default EditableInput;

EditableInput.defaultProps = {
  fontSize: 50,
};
