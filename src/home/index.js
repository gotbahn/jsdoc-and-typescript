import React from 'react';
import Image from '../image';
import logo from './logo.png';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Image
            className="App-logo"
            src={logo}
            alt="logo"
        />
        <p>
          Run <code>`npm test`</code> to validate your types
        </p>
        Use TypeScript. Stay JavaScript.
      </header>
    </div>
  );
};

export default App;
