import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const container = document.getElementById("root")!;
const root = createRoot(container);

//add baseURL define in environement to axios
// axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINTENDPOINT
axios.defaults.baseURL = "http:localhost:8080/api/v1";

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
