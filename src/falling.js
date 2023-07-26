import React, { useRef, useEffect } from 'react';

import Downloadbtn from './Downloadbtn';
import { gsap, Elastic } from 'gsap';
import cvImage from "./assets/img/cvbutton.png";

const FallingImage = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    // GSAP animation timeline
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.1 });

    // Add swinging animation
    tl.to(image, {
      rotation: 5, // Rotate the image clockwise by 5 degrees (smaller rotation)
      duration: 1.5, // Duration of the swing animation (slower)
      ease: 'power1.inOut', // Use a power ease for smooth swinging motion
      yoyo: true, // Swing back and forth
      repeat: -1, // Repeat indefinitely
    });

    // Add falling animation with a delay
    tl.from(image, {
      y: -1000, // Start the image outside the viewport (top position)
      duration: 1.5, // Duration of the falling animation (slower)
      ease: Elastic.easeOut.config(0.2, 0.1), // Use Elastic ease for bouncy spring effect (more pronounced)
      delay: 0.05, // Optional delay before the animation starts
    });
  }, []);

  // Handler to trigger the animation once the image is loaded
  const handleImageLoad = () => {
    const image = imageRef.current;
    gsap.set(image, { visibility: 'visible' }); // Ensure the image is visible before starting the animation
  };

  return
  
    <img src={cvImage} className="swing-3 whitebtn" ref={imageRef} onLoad={handleImageLoad} style={{ visibility: 'hidden' }} />;
};

export default FallingImage;
