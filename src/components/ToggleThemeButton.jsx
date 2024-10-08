import { useState, useEffect } from 'react';
import { SunSvg, MoonSvg } from '../components/SvgComponent.jsx';

const ThemeToggleButton = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem('theme');
    return theme === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.setProperty('--text-color', '#fff');
      document.documentElement.style.setProperty('--background-color', '#1e1e1e');
      document.documentElement.style.setProperty('--background-color-hover', '#272727');
    } else {
      document.documentElement.style.setProperty('--text-color', '#1e1e1e');
      document.documentElement.style.setProperty('--background-color', '#fff');
      document.documentElement.style.setProperty('--background-color-hover', '#ebebeb');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  const style = {
    marginTop: '14px',
    marginLeft: '10px',
    cursor: 'pointer',
    fontSize: '24px',
    background: 'none',
    border: 'none', 
    color: 'var(--text-color)',
    width: '25px'
  }
  
  return (
    <button onClick={toggleTheme} style={style} className="theme-toggle-button hover click">
      {darkMode ? <SunSvg /> : <MoonSvg />}
    </button>
  );
};

export default ThemeToggleButton;
