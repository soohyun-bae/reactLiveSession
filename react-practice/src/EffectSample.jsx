import React, { useEffect, useState } from "react";

const Add = () => {
  console.log("Add 함수 호출")
  const [number, setNumber] = useState(10)

  const callAPI = async () => {
    console.log("API 호출")
  
  }
  const onIncrease = () => {
    setNumber((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("Effect test 컴포넌트 마운트");
    callAPI();
  });
  
  return (
    <div>
      <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
      </div>
    </div>
  )
}





export default Add