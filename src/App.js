import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Usando la URL completa del backend
    fetch('https://holamundo-production.up.railway.app:8080/api/hola')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Proyecto HolaMundo</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
