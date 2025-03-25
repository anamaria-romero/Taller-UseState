import { useState } from "react";

export const Colors = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
  "#000000", "#FFFFFF", "#808080", "#800000", "#808000", "#800080",
  "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
];

export const ColorChanger = () => {
  const [color, setColor] = useState("#FFFFFF");

  const changeColor = () => {
    const randomColor = Colors[Math.floor(Math.random() * Colors.length)];
    setColor(randomColor);
  };

  return (
    <div className="color-container" style={{ background: color }}>
      <button onClick={changeColor}>Generar Color</button>
    </div>
  );
};
