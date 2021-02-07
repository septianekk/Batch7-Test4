import React from "react";
import HomePage from "./components/HomePage";
import Loader from "./components/Loader";

function App() {
  return (
    <div>
      <Loader />
      <HomePage />
    </div>
  );
}

export default App;
