import React, { useEffect, useState } from "react";
import "./Slider.css";
import img1 from './img1.jpg';
import img2 from './bg2.jpg';
import img3 from './img3.jpg';
const images = [img1, img2, img3];  
const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) =>(prev + 1) % images.length);
    },4000);
    return () => clearInterval(timer);
  },[]);

  return (
    <div className="slider">
      <img src={images[index]} alt="offer" />
      <h1>Delicious food delivered fast to your doorstep.</h1>
     
    </div>
  );
};
export default Slider;
