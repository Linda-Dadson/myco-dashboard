import React, { useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

// ============================================
// BackgroundUploader — Lets user upload a custom
// background image. Saved to browser localStorage.
// Stores as base64 — no server needed.
// ============================================

const BackgroundUploader = () => {
  const { theme, backgroundImage, setBackgroundImage } = useTheme();
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('Please select an image smaller than 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setBackgroundImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setBackgroundImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        style={{
          padding: '8px 14px',
          background: 'transparent',
          color: theme.textSecondary,
          border: `1px solid ${theme.borderSoft}`,
          borderRadius: '999px',
          fontSize: '13px',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        🖼️ {backgroundImage ? 'Change' : 'Upload'} Background
      </button>
      {backgroundImage && (
        <button
          onClick={handleRemove}
          style={{
            padding: '8px 14px',
            background: 'transparent',
            color: theme.textSecondary,
            border: `1px solid ${theme.borderSoft}`,
            borderRadius: '999px',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default BackgroundUploader;
