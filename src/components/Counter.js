//The useState hook is used to define a piece of state named count and initialize it with a value of 0. The setCount function returned by useState is used to update the value of count.
import React, { useState } from "react";

function Counter() {
  //setting the setState function that is returned by the useState.
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
