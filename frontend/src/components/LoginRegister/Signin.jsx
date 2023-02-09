import React, { useState } from 'react'
import './Signin.css';
import { Link } from 'react-router-dom';
const apiUrl = "mongodb+srv://prathmesh:prathmesh@cluster0.jdolkoc.mongodb.net/userdb?retryWrites=true&w=majority'"
const Signin =  () => {
  const [data, setData] = useState({ email: '', password: '' });
 // const navigate = useNavigate();
  const [err, setErr] = useState('');
  const changeHandler = e => {
    const {name, value} = e.target
    //console.log(value)
    setData(data => { 
      return { ...data, [name]: value }
    })
    setErr('')
    //console.log(data)
  }


  const submitHandler = async (e) => {
    e.preventDefault();
    if (data.email === '' || data.password === '') {
      setErr('All Fields are necessary');
      return
    }
    setErr('')

  }
  return (
    <div className="sign-in-parent">
      <div className="sign-in-form-container">
     

          <h1 className='index-logo' >LOGO</h1>
          <p >Enter Your Credentials to access your account</p><br/>

          <form onSubmit={ submitHandler }>
            <input className='focus' type="email" name='email' placeholder='User Email' value={ data.email } onChange={ changeHandler } /><br />
            <input id='login-password' className='focus' type="password" name='password' placeholder='Password' value={ data.password } onChange={ changeHandler } />
            
            <br />
         
            <button type="submit" className="submit-button ">Sign In</button><br />
            <p style={ { color: 'red' } }>{ err } </p>
            
            <Link to='/register' >Sign Up</Link>

          </form>
        
      </div>
      <div>
        <p className="para">
          Don't have an account ? 
          { <Link to="/register">
            SignUp
          </Link> }
        </p>
      </div>
    </div>
  )

}

export default Signin;