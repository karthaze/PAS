

import React, { useRef, useState } from 'react';
import styles from './createpost.module.css';


const CreatePostModal = ({ onClose }) => {
  const fileRef = useRef();
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Create Post</h2>

        <div
          className={styles.imageDrop}
          onClick={() => fileRef.current.click()}
        >
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" className={styles.previewImg} />
          ) : (
            <p>Click to upload image</p>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileRef}
            onChange={handleFileChange}
            hidden
          />
        </div>

        <textarea
          className={styles.caption}
          placeholder="Add your thoughts..."
        />

        <div className={styles.actions}>
          <button className={styles.post}>Post</button>
          <button className={styles.cancel} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
