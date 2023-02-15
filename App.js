import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count => count + 1);
  }

  const decrementCounter = () => {
    setCount(count => count - 1);
  }

  let textColor = {
    color: "green"
  }

  if (count >= 5 && count <= 9) {
    textColor = {
      color: "blue"
    }
  }

  if (count === 10) {
    textColor = {
      color: "red"
    }
  }

  return (
    <div>
      <h1 style={textColor}>Counter: {count}</h1>
      <button style={{marginLeft:"2px", background:"Red"}} onClick={incrementCounter} disabled={count > 9 ? true : false}>Increment</button>
      <button style={{marginLeft:"10px", background:"Blue"}} onClick={decrementCounter} disabled={count < 1 ? true : false}>Decrement</button>
    </div>
  )
}