import React, { useState } from 'react';
import styles from './landing.module.css'
import Navbar from '../../components/pas-nav-bas';
import CreatePostModal from '../../components/pas-create-post';
import FloatingButton from '../../components/pas-floating-createpost-button';

const LandingPage = () => {
    const [showCreatePost, setShowCreatePost] = useState(false);

  return (
    <div className={styles.container}>
      <Navbar />
      <FloatingButton onClick={() => setShowCreatePost(true)}/>
      <div className={styles.content}>
       

      {showCreatePost && <CreatePostModal onClose={() => setShowCreatePost(false)} />}
      </div>
    </div>
  );
};

export default LandingPage;
