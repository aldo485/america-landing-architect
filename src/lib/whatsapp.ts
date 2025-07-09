import React from 'react';

export const openWhatsApp = (message: string): void => {
  const phoneNumber = "5219841904834";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

export const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, message: string): void => {
  const target = e.target as HTMLButtonElement;
  target.style.transform = 'scale(0.95)';
  setTimeout(() => {
    target.style.transform = 'scale(1)';
    openWhatsApp(message);
  }, 150);
}; 