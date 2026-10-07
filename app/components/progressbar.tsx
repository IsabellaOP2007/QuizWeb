'use client'
import { useState } from 'react';

export default function ProgressBar() {
  const [percentage, setPercentage] = useState<number>(10);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (!isNaN(val)) {
      setPercentage(Math.min(100, Math.max(0, val)));
    }
  };

  return (
    <div
      style={{
        border: '3px solid #1e1b26',
        padding: '30px',
        maxWidth: '450px',
        margin: '20px auto',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        Progress bar
      </h2>
      <div
        style={{
          width: '100%',
          backgroundColor: '#adb5bd',
          borderRadius: '20px', //pa que se vea curva lo de afuera
          height: '30px',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            background: "linear-gradient(to right, red, pink)", //no encontre los colores para que se viera igual pero se intento
            height: '100%',
            borderRadius: '20px', //pa que se vea curva lo de adentro, y que sea igual al de afuera
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          {percentage}%
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <label htmlFor="percentage-input" style={{ fontWeight: '500' }}>
          Input Percentage:
        </label>
        <input
          id="percentage-input"
          type="number"
          min={0}
          max={100}
          value={percentage}
          onChange={handleChange}
          style={{
            width: '70px',
            padding: '4px 10px',
            borderRadius: '20px',
            border: '2px solid #1e1b26',
            textAlign: 'center',
          }}
        />
      </div>
    </div>
  );
}

