import React from 'react';
import styles from './floatingCreatePost.module.css';
import { Plus, CreativeCommons } from 'lucide-react'; // optional: any icon library

const FloatingButton = ({ onClick }) => {
  return (
    <button className={styles.fab} onClick={onClick}>
      <h6>Add</h6>

    </button>
  );
};

export default FloatingButton;
