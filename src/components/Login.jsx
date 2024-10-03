import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const initialForm = {
  email: "",
  password: "",
  terms: false,
};

const Login = () => {

  const history = useHistory();

  const [form, setForm] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    email: true,
    password: true,
  });

  function handleChange(e) {
    if (e.target.type === "checkbox") {
      setForm({ ...form, [e.target.name]: e.target.checked });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      history.push("/success");
    }
  }

  useEffect(() => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    const isEmailValid = emailRegex.test(form.email);
    const isPasswordValid = form.password.length >= 8;

    setErrors({
      email: !isEmailValid,
      password: !isPasswordValid,
    });

    setIsValid(isEmailValid && isPasswordValid && form.terms)

  }, [form]);

  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            style={{ border: errors.email ? "1px solid red" : "none" }}
          />
          {errors.email && (
            <p className="error-message">Please enter a valid email</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            style={{ border: errors.password ? "1px solid red" : "none" }}
          />
          {errors.password && (
            <p className="error-message">
              Password should be atleast 8 character long
            </p>
          )}
        </div>

        <div className="form-group terms">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            onChange={handleChange}
            checked={form.terms}
          />
          <label htmlFor="terms">I agree to all terms and conditions</label>
        </div>
        <button type="submit" disabled={!isValid} cy-test="login">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
