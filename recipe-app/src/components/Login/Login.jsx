import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
// import jwt_decode from 'jwt-decode';

import './Login.css';

const Login = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  const handleLoginSuccess = credentialResponse => {
    // const details = jwt_decode(credentialResponse.credential);
    // const profilePictureUrl = details.picture;
    // setProfilePictureUrl(profilePictureUrl);
    setIsLoggedIn(true);
    setShowLogin(false);
    // props.setProfilePictureUrl(profilePictureUrl);
    navigate('/dashboard');
  };

  return (
    <>
      {/*Left Banner */}
      <div className='left-side'>
        <h1>Board.</h1>
      </div>

      {/*Right Banner */}
      <div className='right-side'>

        {/*LOGIN Page */}
        <div className='right-div'>
        <img src="https://i.ibb.co/kHxpMgv/logo.png" alt="logo" className="logo" />
          <h2>Sign In</h2>
          {/* <h5 className='t1'>Sign in to your account</h5> */}

          {/*Google button */}
          
          <div className='GoogleOAuthProvider'>
        <button className='google-button'>
            {!isLoggedIn && (
              <GoogleOAuthProvider   clientId="915742303330-s9taht6bkuchregr7icsfv0rjpfmf1e6.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </GoogleOAuthProvider>
            )}
          </button>

        {/*Apple Button */}
        {/* <button className='apple-button'><i class="ri-apple-fill" style={{marginRight: '12px'}} ></i>Sign in with Apple</button>
        </div>

       

            {/* {/FORM Starting/} */}
             {/* <div className='div-under'>   */}
            {/* <form >
                <label className=''>Email Address</label>
                <br />
                <input className='' type='text' />
                <br />
                <label className=''>Password</label>
                <br />
                <input className='' type='password'/>
                <br/>
                <h5 className='' >Forgot Password?</h5>
                <button className=''>SIGN IN</button>
            </form>  */}
        </div>
        
          

          {!showLogin && (
            <div>
              <h5>You are logged in!</h5>
            </div>
          )}

          <h5 className='t2'>Don't have an account? Register Here</h5>
        </div>

      </div>
    </>
  )
}

export default Login;