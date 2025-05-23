import React from 'react';
import { useDarkMode } from '../../Context/ThemeProvider/ThemeProvider';

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`py-2 px-2 rounded-xl transition-all text-2xl
        ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'}`}
    >
      {darkMode ? "🌞" : "🌑"}
    </button>
  );
};

export default DarkModeToggler;
