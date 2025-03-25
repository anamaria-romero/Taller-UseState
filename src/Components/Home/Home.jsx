import { useState } from "react";
import { ColorChanger } from "../Layouts/Colors";
import { DarkModeToggle } from "../Layouts/DarkModeToggle";
import { LikeDislike } from "../Layouts/LikeDislike";
import { Timer } from "../Layouts/Timer";

export const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <h1>TALLER USESTATE</h1>
      <DarkModeToggle setDarkMode={setDarkMode} />
      <ColorChanger />
      <LikeDislike />
      <Timer />
    </div>
  );
};
