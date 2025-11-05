import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  // Add or remove the dark class on <html> tag when theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
    </div>
  );
};

export default App;
