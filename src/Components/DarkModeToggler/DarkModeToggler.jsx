import React from 'react';
import { useDarkMode } from '../../Context/ThemeProvider/ThemeProvider';

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`py-2 px-6 rounded-full transition-all text-xl
        ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'}`}
    >
      {darkMode ? "🌞" : "🌑"}
    </button>
  );
};

export default DarkModeToggler;
