import React, { useRef } from "react";
import { useState } from "react";

const RefSample = () => {
  const inputRef = useRef(null)
  const [state, setState] = useState(0)
  const value = useRef(0)

  const handleOnClick = () => {
    inputRef.current.focus()
    value.current += 1
    console.log(value)

    setState(state + 1) // 비동기로 작동
    console.log(state)
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleOnClick}>button</button>
    </>
  )
}

export default RefSample