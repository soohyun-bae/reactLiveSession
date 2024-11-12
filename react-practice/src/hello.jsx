import React from 'react'

// const Hello = (props) => {
//   return (
//     <>
//       <div>
//         <h1>내 이름은 : {props.name}</h1>
//         <h1>내 나이 : {props.age}</h1>
//         <h1>내 키 : {props.height}</h1>
//         <h1>나는 여자인지 : {props.isWoman.toString()}</h1>
//         <h1>설명 : {props.info.desc}</h1>
//         <h1>시간 : {props.info.date.toLocaleString()}</h1>
//       </div>
//     </>
//   )
// }

const Hello = ({ name="hi", age, height, isWoman, info }) => {
  return (
    <>
      <div>
        <h1>내 이름은 : {name}</h1>
        <h1>내 나이 : {age}</h1>
        <h1>내 키 : {height}</h1>
        {isWoman ? (<h1>여성입니다.</h1>) : (<h1>남성입니다.</h1>)}
        <h1>설명 : {info.desc}</h1>
        <h1>시간 : {info.date.toLocaleString()}</h1>
      </div>
    </>
  )
}

Hello.defaultProps = {
  height: 100
}
export default Hello;