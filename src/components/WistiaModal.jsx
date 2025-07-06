import React from 'react';
import './WistiaModal.css';

const WistiaModal = ({ videoId, onClose }) => {
  if (!videoId) return null;
  return (
    <div className="wistia-modal-overlay" onClick={onClose}>
      <div className="wistia-modal-content" onClick={e => e.stopPropagation()}>
        <button className="wistia-modal-close" onClick={onClose}>&times;</button>
        <div className="wistia-embed-wrapper">
          <iframe
            src={`https://fast.wistia.net/embed/iframe/${videoId}?videoFoam=true`}
            title="Wistia video testimonial"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ width: '100%', height: '100%', aspectRatio: '9/16', border: 'none' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WistiaModal;
