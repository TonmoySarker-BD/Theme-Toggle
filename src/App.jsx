import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello, Tailwind CSS with DaisyUI</h1>
          <p className="py-6">
            This is a simple React application for toggling themes with Tailwind CSS and DaisyUI.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default App;
