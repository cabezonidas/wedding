import * as React from "react";
import flyer from "./flyer.jpeg";
import background from "./background.svg";

export const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: `url("${background}")`,
      }}
    >
      <div
        style={{
          maxWidth: 700,
          border: "20px solid white",
          margin: "50px 10px 50px 10px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          display: "flex",
        }}
      >
        <img
          src={flyer}
          alt="8th January 2022, save the date"
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default App;
