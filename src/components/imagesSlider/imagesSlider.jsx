'use client';

import { useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import Image from 'next/image';
import classes from './imagesSlider.module.css';

const ImageSlideshow = forwardRef(({ images }, ref) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  // Control functions
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  // Expose to parent
  useImperativeHandle(ref, () => ({
    next: handleNext,
    prev: handlePrev,
  }));

  return (
    <div className={`${classes.slideshow} relative rounded-b-3xl`}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
          width={550}  
        />
      ))}
    </div>
  );
});

export default ImageSlideshow;
