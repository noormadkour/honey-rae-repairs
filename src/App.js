import { useState } from "react"

export const App = () => {
  const [count, setCount] = useState(0)

  const handleButtonClick = () => {
    setCount(count + 1)
  }

  const resetCountButton = () => {
    setCount(0)
  }

  return (
    <>
      <h1>Hello World!</h1>
      <div>Check out this cool clicker!</div>
      <button className="btn-secondary" onClick={handleButtonClick}>Click me if you dare</button>
      <div>Count: {count}</div>
      <button className="btn-primary" onClick={resetCountButton}>Reset</button>
    </>
      )
}
