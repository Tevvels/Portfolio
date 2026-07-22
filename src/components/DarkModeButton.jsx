import React, { useEffect, useState } from "react";

function DarkModeButton() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="dark-mode-button">
      <button
        onClick={toggleTheme}
        className={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        <div className="icon-wrapper">{theme === "light" ? "🌙" : "☀️"}</div>
      </button>
    </div>
  );
}

export default DarkModeButton;
