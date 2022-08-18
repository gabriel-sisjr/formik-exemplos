import React from "react";
import ExemploForm from "./Components/Forms/ExemploForm";
import ExemploForm2 from "./Components/Forms/ExemploForm2";

function App() {
  return (
    <>
      <h1>Hello World</h1>

      <h1>Form 1</h1>
      <ExemploForm email="" firstName="" lastName="" />

      <h1>Form 2</h1>
      <ExemploForm2 email="" firstName="" lastName="" />
    </>
  );
}

export default App;
