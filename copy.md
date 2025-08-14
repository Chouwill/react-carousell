import React, { useState } from "react";

export default function MyApp() {
  let [num, setNums] = useState(0);

  function addNums() {
    setNums(num + 3);
    console.log(num);
    
  }
  return (
    <div>
      <button onClick={addNums}>計數器</button>
      <h1>{num}</h1>
    </div>
  );
}
