import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  //const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((data) => {
      return { ...data, [name]: value };
    });
    if (name === "confirmPassword") {
      if (value !== data.password) {
        setErr("Password should match");
      } else setErr("");
    } else setErr("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (data.username === "" || data.email === "" || data.password === "") {
      setErr("All Fields are necessary");
      return;
    }
    setErr("");
    // await axios
    //   .post(url, { data })
    //   .then((res) => res.data)
  };
  return (
    <div className="sign-up-parent">
      <div className="sign-up-form-container">
        <center>
          <br /> <h1 className="index-logo">LOGO</h1>
          <p >Create New Account</p>
          <br />
          <form onSubmit={submitHandler}>
            <input
              className="focus"
              type="email"
              name="email"
              placeholder="Email id"
              value={data.email}
              onChange={changeHandler}
            />
            <br />
            <input
              className="focus"
              type="password"
              name="password"
              id="register-password"
              placeholder="Password"
              value={data.password}
              onChange={changeHandler}
              minLength={6}
            />
            <br />
            <input
              className="focus"
              type="Password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={data.confirmPassword}
              onChange={changeHandler}
            />
            <br />
            <button type="submit" className="submit-button">
              Sign Up
            </button>
            <p style={{ color: "red" }}>{err}</p>
          </form>
        </center>
      </div>
      <p className="para">
        <Link to="/login">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Signup;
