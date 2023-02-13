import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    if (data.username === "" || data.email === "" || data.password === "") {
      setErr("All Fields are necessary");
      return;
    }
    //setErr("")
    else if (confirmPassword === data.password) {
      
        setErr("");
        if (data.password.length < 7) {
          setErr("Password length should be minimum 6 characters");
          return;
        }
        fetch("http://localhost:8080/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => {
            return res.json();
          })
          .then((SucessMessage) => {
            console.log("Signup successful:", SucessMessage);
            setData({
              email: "",
              password: "",
            });
            navigate("/");
          })
          .catch((err) => {
            if (err.response.status === 409)
              setErr("User already exists with the given email. Try log in");
            else setErr('Something"s wrong, Try again');
            console.log(err);
          });
      }
     else {
      setErr("password should match");
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
                setErr("");
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
                setErr("");
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

//-------------------------------------------------------------------------------
//test

// import React, { useState } from "react";
// import "./Signup.css";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [err, setErr] = useState("");
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const changeHandler = (e) => {
//     const { name, value } = e.target;
//     setData((data) => {
//       return { ...data, [name]: value };
//     });
//     if (name === "confirmPassword") {
//       if (value !== data.password) {
//         setErr("Password should match");
//       } else setErr("");
//     } else setErr("");
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     if (data.username === "" || data.email === "" || data.password === "") {
//       setErr("All Fields are necessary");
//       return;
//     }
//     setErr("");
//     // await axios
//     //   .post(url, { data })
//     //   .then((res) => res.data)
//   };
//   return (
//     <div className="sign-up-parent">
//       <div className="sign-up-form-container">
//         <center>
//           <br /> <h1 className="index-logo">LOGO</h1>
//           <p >Create New Account</p>
//           <br />
//           <form onSubmit={submitHandler}>
//             <input
//               className="focus"
//               type="email"
//               name="email"
//               placeholder="Email id"
//               value={data.email}
//               onChange={changeHandler}
//             />
//             <br />
//             <input
//               className="focus"
//               type="password"
//               name="password"
//               id="register-password"
//               placeholder="Password"
//               value={data.password}
//               onChange={changeHandler}
//               minLength={6}
//             />
//             <br />
//             <input
//               className="focus"
//               type="Password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={data.confirmPassword}
//               onChange={changeHandler}
//             />
//             <br />
//             <button type="submit" className="submit-button">
//               Sign Up
//             </button>
//             <p style={{ color: "red" }}>{err}</p>
//           </form>
//         </center>
//       </div>
//       <p className="para">
//         <Link to="/login">
//           Sign In
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default Signup;

// import React, { useState } from "react";
// import "./Signup.css";
// import { Link, useNavigate } from "react-router-dom";
// const Signup = () => {
//   const navigate = useNavigate
//   const [err, setErr] = useState("");

//   const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     if (email === "" ||password === "") {
//       setErr("All Fields are necessary");
//       return;
//     }
//     else if (confirmPassword === password) {
//         if (password.length < 6) {
//           setErr("Password length should be minimum 6 characters");
//           return;
//         }
//         let result=await fetch("http://localhost:8080/register",
//         {
//             method:"post",
//             body:JSON.stringify({email,password}),
//             headers:{
//                 "content-Type":'application/json'
//             }

//         })
//         result=await result.json();
//         console.log(result)
//         if(result){
//           console.log(result)
//             navigate("/properties")
//         }

//     }else{
//       setErr("password should be same")
//     }
//   };
//   return (
//     <div className="sign-up-parent">
//       <div className="sign-up-form-container">
//         <center>
//           <br /> <h1 className="index-logo">LOGO</h1>
//           <p>Create New Account</p>
//           <br />
//           <form >
//             <input
//               className="focus"
//               type="email"
//               name="email"
//               placeholder="Email id"
//               value={email}
//               onChange={(e)=>{setEmail(e.target.value)}}

//             />
//             <br />
//             <input
//               className="focus"
//               type="password"
//               name="password"
//               id="register-password"
//               placeholder="Password"
//               value={password}
//               onChange={(e)=>{setPassword(e.target.value)}}
//               minLength={6}
//             />
//             <br />
//             <input
//               className="focus"
//               type="Password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e)=>{setConfirmPassword(e.target.value)}}

//             />
//             <br />
//             <button onClick={submitHandler} className="submit-button">
//               Sign Up
//             </button>
//             <p style={{ color: "red" }}>{err}</p>
//           </form>
//         </center>
//       </div>
//       <p className="para">
//         <Link to="/login">Sign In</Link>
//       </p>
//     </div>
//   );
// };
// export default Signup;
