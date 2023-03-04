import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
// import { worker } from "mockServer";
import "./index.scss";

const createApp = async () => {
  // await worker.start();

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

createApp();
