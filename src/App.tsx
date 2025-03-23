import React, { useState } from "react";
import Circle from "./Circle";
function App() {
  return (
    <div>
      <Circle bgColor="teal" text="this is optional text" />
      <Circle bgColor="tomato" borderColor="black" />
    </div>
  );
}

export default App;
