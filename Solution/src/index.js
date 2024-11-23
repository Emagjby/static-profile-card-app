import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Main render function to re-render on state changes
const root = ReactDOM.createRoot(document.getElementById('app'));

function Render() {
    root.render(<App render={Render} />);
}

// Initial render
Render();
