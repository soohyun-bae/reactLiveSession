// import './App.css';
// //import Counter from "./Counter"
// import Counter from "./ArrowFuncCounter"

// // 전체에서 최상위 컴포넌트임
// // 라우터를 보통 여기서 구현함
// function App() {
//   return (
//     <div>
//      <Counter />
//     </div>
//   );
// }

import RefSample from "./RefSample";

// App 컴포넌트에서 hello컴포넌트로 값을 전달하고 싶은 경우
const App = () => {
  //1. 상태 관리 및 조회
  //const name = "hi react"

  //2. 함수를 만들어서 API 통신, 기타 작업

  //3. 랜더링
  return (
    <>
    <RefSample />
    </>
  )
}

export default App;