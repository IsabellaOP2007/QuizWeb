'use client'

import { useState } from 'react';

export default function UserForm() {
  const [username, setUsername] = useState('');
  const [fullname, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [submittedData, setSubmittedData] = useState<{
    username: string;
    fullname: string;
    age: string;
  } | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => { //la notificacion y manejo de error
    e.preventDefault();
    if (!username.trim() || !fullname.trim() || !age.trim()) {
      setError('Todos los campos son obligatorios');
      return;
    }
    const ageNum = Number(age); //lo paso a numero
    if (isNaN(ageNum) || ageNum <= 0) {
      setError('La edad debe ser un número positivo');
      return;
    }
    setError('');
    const data = { username, fullname, age };
    alert(JSON.stringify(data));
    setSubmittedData(data);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '10px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '6px', border: '1px solid #666', borderRadius: '4px' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontWeight: 'bold' }}>FullName:</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            style={{ width: '100%', padding: '6px', border: '1px solid #666', borderRadius: '4px' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{ width: '100%', padding: '6px', border: '1px solid #666', borderRadius: '4px' }}
          />
        </div>
        {error && <p style={{ color: 'red', margin: '0' }}>{error}</p>}
        <div>
          <button
            type="submit"
            style={{ padding: '6px 14px', border: '1px solid #666', borderRadius: '4px', cursor: 'pointer', background: '#e9ecef' }}
          >
            Submit
          </button>
        </div>
      </form>

      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ fontWeight: 'bold', fontSize: '16px' }}>Request Sent to DB with below request data</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
            <li>UserName: {submittedData.username}</li>
            <li>FullName: {submittedData.fullname}</li>
            <li>Age: {submittedData.age}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
