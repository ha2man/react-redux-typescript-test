import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

// This is the extra redux functionality
import { configureStore } from "app/store";
import { Provider } from "react-redux";
//
const store = configureStore();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
