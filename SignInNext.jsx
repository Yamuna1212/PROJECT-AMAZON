import React, { useState } from 'react';
import styles from './SignInNext.module.css';

const SignInNext = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    // Basic form validation
    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    // Simulate sign-in logic
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className={styles.signInContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Sign in to your account</h2>
        {error && <div className={styles.error}>{error}</div>}
        {success && <div className={styles.success}>Sign-in successful!</div>}
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <div className={styles.passwordContainer}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className={styles.showPasswordButton}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className={styles.extraOptions}>
          <label className={styles.rememberMe}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
          <a href="/forgot-password" className={styles.forgotPassword}>Forgot Password?</a>
        </div>
        <button type="submit" className={styles.signInButton} disabled={loading}>
          {loading ? <div className={styles.loader}></div> : "Sign in"}
        </button>
        <div className={styles.socialSignIn}>
          <p>Or sign in with:</p>
          <button className={styles.socialButton} id={styles.google}>Google</button>
          <button className={styles.socialButton} id={styles.facebook}>Facebook</button>
          <button className={styles.socialButton} id={styles.twitter}>Twitter</button>
        </div>
      </form>
    </div>
  );
};

export default SignInNext;
