import React from 'react';
import './WhatsAppButton.css';

function WhatsAppButton() {
  // Replace with your actual WhatsApp number (include country code without + or spaces)
  // Example: for +1 234 567 8900, use: 12345678900
  const phoneNumber = '971527155024'; // UPDATE THIS WITH YOUR WHATSAPP NUMBER
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello! I would like to inquire about your services regarding relocation.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-button-container" onClick={handleWhatsAppClick}>
      <div className="whatsapp-tooltip">Chat with us!</div>
      <div className="whatsapp-button">
        <svg viewBox="0 0 32 32" className="whatsapp-icon">
          <path fill="currentColor" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.245 1.407 1.411-5.244-0.321-0.523c-1.362-2.22-2.082-4.773-2.082-7.378 0-7.588 6.179-13.767 13.767-13.767s13.767 6.179 13.767 13.767c0 7.588-6.179 13.767-13.767 13.767zM23.201 19.43c-0.411-0.205-2.441-1.205-2.818-1.341-0.377-0.137-0.651-0.205-0.925 0.205s-1.063 1.341-1.303 1.616c-0.24 0.274-0.479 0.308-0.889 0.103-2.558-1.28-4.242-2.285-5.931-5.184-0.446-0.767 0.446-0.712 1.276-2.371 0.137-0.274 0.068-0.513-0.034-0.718-0.103-0.205-0.925-2.227-1.268-3.049-0.331-0.799-0.672-0.691-0.925-0.704-0.24-0.012-0.514-0.015-0.789-0.015s-0.719 0.103-1.096 0.513c-0.377 0.411-1.441 1.408-1.441 3.43s1.476 3.977 1.681 4.251c0.205 0.274 2.864 4.439 6.99 6.194 2.589 1.101 3.606 1.178 4.898 0.992 0.782-0.116 2.441-0.999 2.785-1.962 0.343-0.964 0.343-1.788 0.24-1.962-0.103-0.171-0.377-0.274-0.789-0.479z"/>
        </svg>
      </div>
    </div>
  );
}

export default WhatsAppButton;
