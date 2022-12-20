// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./app.css";
import Landing from "./landing";
import Form from "./form-form";
import Block from "./block";
import LightHouse from "./lighthouse";
import Foot from "./foot";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Landing />
      <Form />
      <Block />
      <LightHouse />
      <Foot />
    </>
  );
}

export default App;
