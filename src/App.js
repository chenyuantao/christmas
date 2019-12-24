/* eslint-disable */
import React from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

export default () => {
  const { width, height } = useWindowSize();
  console.log(width, height);

  return (
    <div style={{ width: '100vh', height: '100vh' }}>
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src="/gr_logo.png" style={{ width: 100 }} />
        <div style={{ color: 'red', marginTop: 10 }}>
          🎄🧦🎁各位肉肉们圣诞快乐🎄🧦🎁
        </div>
      </div>
      <Confetti />
    </div>
  );
};
