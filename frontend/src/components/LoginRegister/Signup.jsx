import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  //const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    if (data.username === "" || data.email === "" || data.password === "") {
      setErr("All Fields are necessary");
      return;
    } else if (confirmPassword === data.password) {
      {
        setErr("");
        if (data.password.length < 6) {
          setErr("Password length should be minimum 6 characters");
          return;
        }
        fetch("http://localhost:8080/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: data,
        })
          .then((res) => {
            return res.json();
          })
          .then((mess) => {
            console.log(mess);
          })
          .catch((e) => {
            console.log(e);
            setErr(e);
          });
      }
    }
  };
  return (
    <div className="sign-up-parent">
      <div className="sign-up-form-container">
        <center>
          <br /> <h1 className="index-logo">LOGO</h1>
          <p>Create New Account</p>
          <br />
          <form onSubmit={submitHandler}>
            <input
              className="focus"
              type="email"
              name="email"
              placeholder="Email id"
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
            <br />
            <input
              className="focus"
              type="password"
              name="password"
              id="register-password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
              minLength={6}
            />
            <br />
            <input
              className="focus"
              type="Password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={data.confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
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
        <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};
export default Signup;
