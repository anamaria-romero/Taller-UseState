import { useState } from "react";

export const DarkModeToggle = ({ setDarkMode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = () => {
    setIsDark(!isDark);
    setDarkMode(!isDark);
  };

  return (
    <button className="toggle-mode" onClick={toggleMode}>
      {isDark ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
};
