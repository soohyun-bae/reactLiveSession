import React from "react";
import { useState } from "react";

const InputSample = ()=>{
  const [text, setText] = useState("")

  // 핸들러 관리
  const onChange = (e) => {
    setText(e.target.value)
  }

  const onReset = () => {
    setText("")
  }

  return (
    <>
    <input onChange={onChange} value={text} />
    <button onClick={onReset}> 값 초기화 </button>
      <div>
        <h1>값: {text}</h1>
      </div>
    </>
  )
}

export default InputSample