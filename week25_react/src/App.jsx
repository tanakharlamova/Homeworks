import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.button = {count};
  }, [count])

  return (
    <>
      <button onClick={()=> setCount(count + 1)}>{count}</button>
    </>
  )

  // второй вариант с функцией:
  
  // useEffect(() => {
  //   handleClick();
  // }, [])
  // function handleClick(){
  //   setCount(count + 1);
  // }

  // return (
  //   <>
  //     <button onClick={handleClick}>{count}</button>
  //   </>
  // )
}

export default App
