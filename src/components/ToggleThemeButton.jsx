import { useState, useEffect } from 'react';
// import { FaSun, FaMoon } from 'react-icons/fa'; // Ícones do react-icons
// import sun from '../sun-svgrepo-com.svg'
import { SunSvg, MoonSvg } from '../components/SvgComponent.jsx';

const ThemeToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      document.documentElement.style.setProperty('--text-color', '#fff');
      document.documentElement.style.setProperty('--background-color', '#1e1e1e');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.style.setProperty('--text-color', '#1e1e1e');
      document.documentElement.style.setProperty('--background-color', '#fff');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const style = {
    marginLeft: '10px',
    cursor: 'pointer',
    fontSize: '24px',
    background: 'none',
    border: 'none', 
    color: 'var(--text-color)',
    width: '25px'
    // ,transform: 'translate(0, 3px)'
}

  return (
    <button onClick={toggleTheme} style={style} className="theme-toggle-button">
      {darkMode ? <SunSvg /> : <MoonSvg />}
    </button>
  );
};

export default ThemeToggleButton;
