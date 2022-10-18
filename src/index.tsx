import React from "react";
import ReactDOM from "react-dom/client";

const createApp = () => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <div />
    </React.StrictMode>
  );
};

createApp();
