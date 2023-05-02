import React from 'react';
import './BackgroundVideo.css';
import videoSource from './myBackgroundVideo.mp4';

function BackgroundVideo() {
  return (
    <video autoPlay muted loop id="backgroundVideo">
      <source src={videoSource} type="video/mp4" />
    </video>
  );
}