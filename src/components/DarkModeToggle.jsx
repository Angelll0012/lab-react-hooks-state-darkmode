import React from "react";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  // TODO: Implement dark mode toggle logic

  return (
    //TODO: Update this text from Dark to Light dynamically
    <button
      type="button"
      aria-label={`Toggle ${darkMode ? "light" : "dark"} mode`}
      aria-pressed={darkMode}
      onClick={toggleDarkMode}
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  );
};

export default DarkModeToggle;
