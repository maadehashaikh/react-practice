import React , {useState} from 'react'
const States = () => {
  const [count,setCount] = useState(0);
  const increase = () => {
    setCount(count+1);
  }
  const decrease = () => {
    setCount(count-1);
  }
  return (
    <>
    <button onDoubleClick={increase}>Increase Count</button>
    <button onClick={decrease}>Decrease Count</button>
    <h1>Here is Count Number : {count}</h1>
    <h3>Practicing Codedamn issue</h3>
    </>
  )
}

export default States
