import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import { ToastMessage } from "./components/general/ToastMessage";
import OrderCar from "./components/transactions/OrderCar";

function App() {
  return (
    <div className="App">
      {/* <Login></Login>
      <ToastMessage /> */}
      <OrderCar></OrderCar>
    </div>
  );
}

export default App;
