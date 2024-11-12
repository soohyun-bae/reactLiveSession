import { useState } from "react";

// 함수
function Counter(){
  // useStatet : 값을 관리할 수 있음, 초기값을 설정하는 것
  const [number, setNumber] = useState(0)

  // 핸들러 구성
  // 더하는 함수
  function onIncrease(){
    setNumber((prev) => prev + 1)
  }

  // 1 빼는 함수
  function onDecrease(){
    setNumber((prev) => prev - 1)
  }

  //화면을 랜더링하는 부분
  return (
    <>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  )
}

export default Counter;