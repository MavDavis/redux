import React from "react";
const Input = (props) => {
    const {type, value, name, handleChange, checked} = props
  return <>
   <label>
    {name === 'isFriendly'? 'Are you friendly' : name}:
    <input type={type} onChange = {handleChange} name={name} required = {type === 'checkbox' ? false :true} checked = {checked  ? checked : null} />
  </label>
  <br/>
  </>;
};
export default Input;
