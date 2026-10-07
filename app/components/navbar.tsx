'use client'

export default function Navbar({ mirrored }: { mirrored?: boolean }) {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#15181c', 
        padding: '10px 100px',
        color: '#fafafa',
        transform: mirrored ? 'scaleX(-1)' : 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginRight: '20px' }}>
        <span style={{ fontWeight: 'bold', fontSize: '18px' }}>Navbar</span>
        <a href="#home" style={{ color: '#fff'}}>Home</a>
        <a href="#features" style={{ color: '#ada4a4'}}>Features</a>
        <a href="#pricing" style={{ color: '#ada4a4' }}>Pricing</a>
        <a href="#about" style={{ color: '#ada4a4'}}>About</a>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="search"
          placeholder="Search"
          style={{
            padding: '6px 12px',
            borderRadius: '4px',
            border: '1px solid #a8acb0',
            backgroundColor: '#fff',
            color: '#000',
          }}
        />
        <button
          style={{
            padding: '6px 12px',
            borderRadius: '4px',
            border: '1px solid #047699', //no encontre el azul 
            color: '#047699',
            backgroundColor: 'transparent',
          }}
        >
          Search
        </button>
      </div>
    </nav>
  );
}