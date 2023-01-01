import React, { useState } from "react";
import Input from "./Input";
const Form = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    gmail: "",
    sex: null,
    isFriendly: true,
  });
  const {
    firstName,
    lastName,
    password,
    confirmPassword,
    gmail,
    sex,
    isFriendly,
  } = formDetails;
  const changeInput = (event) => {
    let checkbox = undefined;
    if(event.target.type === 'checkbox'){
        if (event.target.checked){
            checkbox = true
        }else{
            checkbox= false
        }
    }else{
        checkbox = event.target.value
    }
    setFormDetails((prevDetails) => {
      return {
        ...prevDetails,
        [event.target.name] : checkbox
      };
});
  };
  const submitForm = (e) => {
    e.preventDefault()
if(formDetails.confirmPassword === formDetails.password){
    console.log(formDetails);

}else{
    console.log('passwords are not matching');
}
};
  return (
    <>
      <form onSubmit={submitForm}>
        <Input
          type={"text"}
          value={firstName}
          name={"firstName"}
          handleChange={changeInput}
        />
        <Input
          type={"text"}
          value={lastName}
          name={"lastName"}
          handleChange={changeInput}
        />
        <Input
          type={"email"}
          value={gmail}
          name={"gmail"}
          handleChange={changeInput}
        />
        <Input
          type={"password"}
          value={password}
          name={"password"}
          handleChange={changeInput}
        />
        <Input
          type={"password"}
          value={confirmPassword}
          name={"confirmPassword"}
          handleChange={changeInput}
        />
        <Input
          type={"checkbox"}
          checked={isFriendly}
          name={"isFriendly"}
          handleChange={changeInput}
        />
        <button>Submit</button>
      </form>
    </>
  );
};
export default Form;
