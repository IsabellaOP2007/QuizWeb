'use client'

import { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  const handleStart = () => setIsActive(true);
  const handleStop = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div style={{ textAlign: 'left', margin: '20px auto', maxWidth: '300px' }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>Timer</h2>
      <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>
        {mins} mins {secs} secs
      </p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={handleStart}
          style={{
            backgroundColor: '#28a745',
            color: '#000',
            border: 'none',
            padding: '10px 16px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Start
        </button>
        <button
          onClick={handleStop}
          style={{
            backgroundColor: '#dc3545',
            color: '#000',
            border: 'none',
            padding: '10px 16px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          style={{
            backgroundColor: '#fffb07',
            color: '#000',
            border: 'none',
            padding: '10px 16px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
