import React, { useState } from 'react';
import Login from './Login';

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Login ADS - React</h1>
      <Login />
    </>
  );
}

export default App;
