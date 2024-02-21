import React from "react";
import ReactDOM from "react-dom";
import App from "./app"; // 대문자여야해.. 고치고싶으면 이름바꾸고 vscode 껏다 키기

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
