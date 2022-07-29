import React, { useImperativeHandle } from 'react';

//To make this component work I need to figure out how to get the ref value lifted up to the Form.js form. Until then this will remain unattached.
const Input = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => {});
  return (
    <input
      type={props.type || 'text'}
      id={props.id}
      placeholder={props.placeholder || ''}
      className={props.className}
      required
      ref={ref}
      name={props.name}
      minLength={props.minLength}
    />
  );
});

export default Input;
