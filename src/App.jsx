import { useState } from "react";
import "./App.css";
import Result from "./components/Results/Result";
import Form from "./components/Form/Form.jsx";

function App() {
  return (
    <div className="App">
      <Form />
      <Result />
    </div>
  );
}

export default App;
