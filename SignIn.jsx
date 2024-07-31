import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './SignInBar.module.css';

function SignIn() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/SignInNext'); // Redirect to SignInNext page
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.hr}></div>
      <div className={classes.content}>
        <p>See personalized recommendations</p>
        <button className={classes.btn} onClick={handleSignInClick}>Sign in</button>
      
        <p>
          New Customer? <a href="/">Start here.</a>
        </p>
      </div>
      <div className={classes.hr}></div>
    </div>
  );
}

export default SignIn;
