import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import { ToastMessage } from "./components/general/ToastMessage";

function App() {
  return (
    <div className="App">
      <Login></Login>
      <ToastMessage />
    </div>
  );
}

export default App;
