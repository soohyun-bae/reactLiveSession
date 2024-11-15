import React, { useState } from "react";

const Counter2 = () => {
  // useState는 비동기적임. 연속 호출되면 batch처리를 통해서 한 번에 렌더링함
  // batch처리 : 요청들을 하나하나 처리하는 것이 아니라 모아놨다가 한 번에 처리 ( = 방학숙제..ㅋㅋ )
  const [state, setState]  = useState(10) 

  const onIncrease = () => {
    // setState(state +1)
    // console.log(state)
    // setState(state +1)
    // console.log(state)

    // 함수형 업데이트를 통해서 값에 최신값을 보장받을 수 있다. 
    // 이전 값(prev), 즉 최신값을 계속 받아오면서 업데이트해주기
    setState((prev) => prev+1)
    console.log(state)
    setState((prev) => prev+1)
    console.log(state)
    setState((prev) => prev+1)
    console.log(state)
  }

  // 1 빼는 함수
  const onDecrease = () => {
    setState(state -1)
  }

  return (
    <>
      <div>
        <h1>state 값: {state}</h1>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>

      </div>
    </>
  )
}

export default Counter2