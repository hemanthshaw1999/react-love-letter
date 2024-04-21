import LoveLetter from './components/LoveLetter/LoveLetter';
import './App.css';
import React, { useEffect } from 'react';

function generateRandomHeart() {
  // Create a new heart element
  const heart = document.createElement('div');
  heart.className = 'heart-background'; // Use the heart class defined in CSS

  
  // Randomize horizontal and vertical position
  const randomLeft = Math.random() * 80; // 10-90% to keep within bounds
  const randomTop = Math.random() * 80 ; // 10-90% for vertical range

  heart.style.position = 'absolute'; // Absolute positioning
  heart.style.left = `${randomLeft}%`; // Horizontal placement
  heart.style.top = `${randomTop}%`; // Vertical placement
  heart.style.transform = `translate(-50%, -50%)`; // Center the heart

  // Append the heart to the heart-container
  const container = document.querySelector('.heart-container');
  if (container) {
    container.appendChild(heart);
  }

  // Remove the heart after animation completes to avoid DOM clutter
  setTimeout(() => {
    if (heart.parentNode) {
      heart.parentNode.removeChild(heart);
    }
  }, 3000); // Adjust to match animation duration
}

  
function App() {

  useEffect(() => { // Call useEffect within a component
    const heartInterval = setInterval(() => {
      generateRandomHeart(); // Generate hearts every second
    }, 3000); // Interval between heart generations

    return () => clearInterval(heartInterval); // Cleanup to avoid memory leaks
  }, []); // Only run on mount

  return (
    <div className="App">
    <div className="heart-container">
     </div>
      <LoveLetter />
    
  </div>
  );
}

export default App;
