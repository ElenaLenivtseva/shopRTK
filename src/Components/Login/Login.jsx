import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const initialState = {
    name: "",
    password: "",
    image: "",
  };
  const [values, setValues] = useState(initialState);
  const onChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div className="form">
      <div className="form__card">
        <div color="blue-gray" className="form__cardHeader">
          Sign In
        </div>
        <div className="form__cardBody">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="form__input"
            value={values.name}
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="form__input"
            value={values.password}
            onChange={onChange}
          />

          <input
            type="text"
            name="image"
            id="image"
            className="form__input"
            placeholder="Image URL"
            value={values.image}
            onChange={onChange}
          />
          {/* <div className="form__remember">
            <input type="checkbox" name="checkbox" id="checkbox" className="form__check" onChange={(e)=>setCheckbox(e.target.value)}/>
            <p className="form__rememberText">Remember me</p>
          </div> */}
          <button className="form__button">SIGN IN</button>

          <p className="form__bottom">Image is Optional</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
