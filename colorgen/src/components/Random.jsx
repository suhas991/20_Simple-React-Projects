import { useState } from "react";
import { useEffect } from "react";
export default function Random() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");


  useEffect(() => {
    if (type === "rgb") handleRgbColor();
    else handleHexColor();
  }, [type]);

  const randomcolor = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleHexColor = () => {
    const arr = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += arr[randomcolor(arr.length)];
    }
    setColor(hex);
  };

  const handleRgbColor = () => {
    let r = randomcolor(255);
    let g = randomcolor(255);
    let b = randomcolor(255);

    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        background: color,
      }}
    > 
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
          fontSize: "20px",
          marginBottom: "50px",
          flexDirection: "column",
          gap: "5px",
          backgroundColor:"black",
          padding:"10px",
          borderRadius:"5px",
        }}
      >
        <h3>{type === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1><code>{color}</code></h1>
      </div>

      <div>
        <button
          onClick={() => {
            setType("hex");
          }}
        >
          Create HEX
        </button>
        <button
          onClick={() => {
            setType("rgb");
          }}
        >
          Create RGB
        </button>
      </div>
      <div>
        <button onClick={type === "hex" ? handleHexColor : handleRgbColor}>
          Generate Random Color
        </button>
      </div>

      
    </div>
  );
}
