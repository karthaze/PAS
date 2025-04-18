import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        Played & Stayed
      </div>
      <div className={styles.actions}>
        <button className={styles.btn}>Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
