import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './darling_bgm.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        <p className="love-letter">
          As you celebrate another trip around the sun, 
          I take the opportunity to celebrate you not just your birth but also the incredible person you've become. Your presence in my life is a gift beyond measure. 
          I find myself overwhelmed with gratitude for the blessing of your presence in my life. 
          To the man who has stood by my side through thick and thin, here's to celebrating you today and every day. 
          Special people like you deserve nothing less than an extraordinary birthday. May your day be filled with unforgettable moments, love, laughter, and endless happiness. <br/>
          Happy Birthday Harsha💕<br />
          Always yours,<br />
          @love 💌<br />
        </p>
      </div>

      <audio ref={audioRef} src={audioFile} loop onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
