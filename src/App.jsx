import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="med-bg">
      <div className="med-card">
        <div className="med-icon">
          <span role="img" aria-label="medicine">🩺</span>
        </div>
        <h2 className="med-title">Medicine Reminder</h2>
        <h3 className="med-subtitle">{isSignup ? 'Sign Up' : 'Sign In'}</h3>
        <form>
          {isSignup && (
            <input type="text" placeholder="Name" className="med-input" />
          )}
          <input type="email" placeholder="Email" className="med-input" />
          <input type="password" placeholder="Password" className="med-input" />
          <div className="med-links">
            <a href="#">Forgot password?</a>
          </div>
          <div className="med-buttons">
            <button
              type="button"
              className={isSignup ? 'active' : ''}
              onClick={() => setIsSignup(true)}
            >
              Sign Up
            </button>
            <button
              type="button"
              className={!isSignup ? 'active' : ''}
              onClick={() => setIsSignup(false)}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;