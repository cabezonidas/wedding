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
        flexDirection: "column",
      }}
    >
      <div
        style={{
          maxWidth: 700,
          border: "20px solid white",
          margin: "50px 10px 50px 10px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          background: "white",
        }}
      >
        <img
          src={flyer}
          alt="8th January 2022, save the date"
          style={{ height: "100%", width: "100%" }}
        />
        <a
          href="https://forms.gle/8yTEP1P76ov8gkUG9"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            bottom: "12%",
            left: "50%",
            transform: "translateX(-50%)",
            textDecoration: "none",
            background: "#e6d8cb",
            padding: "14px",
            textAlign: "center",
            color: "#62625b",
            fontSize: "smaller",
          }}
        >
          Confirm now!
        </a>
      </div>
    </div>
  );
};

export default App;
