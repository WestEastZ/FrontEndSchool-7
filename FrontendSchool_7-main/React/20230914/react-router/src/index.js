import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App from "./App2";
// import App from "./App3";
// import App from "./App4";
import Quiz from "./Quiz";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Quiz />);
