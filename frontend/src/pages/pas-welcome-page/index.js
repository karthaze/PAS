import React, { useState } from 'react';
import styles from './welcome.module.css';
import { useNavigate } from 'react-router-dom';
import LandingPage from '../pas-landing-page';
import googleLogo from './../../assets/icons/googleIcon.svg';
import spotifyLogo from './../../assets/icons/spotifyIcon.svg';

function Welcome() {
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    goToLanding()
    // Placeholder for Google Auth
  };

  const handleSpotifyLogin = () => {
    goToLanding()
    // Placeholder for Spotify Auth
    };
  const goToLanding = () => {
    navigate('/landing');
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.glassBox}>
        <h1 className={styles.title}>Played & Stayed</h1>
        <p className={styles.subtitle}>Where your memories turn into music.</p>

        <div className={styles.buttons}>
          <button className={styles.authButton} onClick={handleGoogleLogin}>
            <img src={googleLogo} alt="Google" />
            Continue with Google
          </button>
          <button className={styles.authButton} onClick={handleSpotifyLogin}>
            <img src={spotifyLogo} alt="Spotify" />
            Continue with Spotify
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
