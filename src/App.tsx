import React from "react";
import { Route, Routes } from "react-router";
import { App as TonaApp } from "app/containers/App";
import { hot } from "react-hot-loader";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

export const App = hot(module)(() => (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={TonaApp} />
    </Routes>
  </BrowserRouter>
));
