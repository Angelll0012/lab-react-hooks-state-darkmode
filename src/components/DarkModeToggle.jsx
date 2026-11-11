import React, { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  // TODO: Implement dark mode toggle logic

  return (
    //TODO: Update this text from Dark to Light dynamically
    <button
      type="button"
      aria-pressed={darkMode}
      onClick={() => setDarkMode((isDarkMode) => !isDarkMode)}
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  );
};

export default DarkModeToggle