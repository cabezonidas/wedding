import * as React from "react";
export const App = () => {
  const height = useHeight();
  return (
    <div
      style={{
        height,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <div>Save the date</div>
        <div>for the wedding of</div>
        <header>Lucía & Sebastián</header>
        <div style={{ fontSize: "30px" }}>💍</div>
      </div>
    </div>
  );
};

function useHeight() {
  const [height, setHeight] = React.useState(
    window.innerHeight * (window.visualViewport?.scale || 1)
  );

  React.useEffect(() => {
    const onResize = () => {
      setHeight(window.innerHeight * (window.visualViewport?.scale || 1));
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return height + "px";
}

export default App;
