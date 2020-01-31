import React, { useState } from 'react';

const InputElement = props => {
  return (
    <React.Fragment>
        <label>{props.label}</label>
        <input
        className='form-control'
          type={props.controlType}
          onChange={props.inputChangeHandler}
          value={props.inputValue}
          placeHolder={props.inputPlaceHolder}
        ></input>
    </React.Fragment>
  );
};

export default InputElement;
