import { useState } from "react";
import darkModeIcon from "../../assets/DarkMode/modo-oscuro.png";

export const DarkModeToggle = ({ setDarkMode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = () => {
    setIsDark(!isDark);
    setDarkMode(!isDark);
  };

  return (
    <button className="toggle-mode" onClick={toggleMode}>
      <img src={darkModeIcon} alt="Modo Oscuro" className="dark-mode-icon" />
    </button>
  );
};
