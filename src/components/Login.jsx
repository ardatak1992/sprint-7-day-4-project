import React from "react";
import { useState, useEffect } from "react";
import "./Login.css";

const initialForm = {
  email: "",
  password: "",
  terms: false,
};

const Login = () => {
  const [form, setForm] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    if (e.target.type === "checkbox") {
      setForm({ ...form, [e.target.name]: e.target.checked });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  }

  useEffect(() => {

  }, [form])
  
  console.log(form);
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
          />
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
        <button type="submit" disabled={!isValid}>Login</button>
      </form>
    </div>
  );
};

export default Login;
