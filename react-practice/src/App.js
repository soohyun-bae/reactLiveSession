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
import Hello from "./hello";
import Container from "./Container";
import Counter from "./ArrowFuncCounter";
import Bad from "./bad";

// App 컴포넌트에서 hello컴포넌트로 값을 전달하고 싶은 경우
const App = () => {
  //1. 상태 관리 및 조회
  //const name = "hi react"
  const info = { desc: "react", date: new Date() }
  const isGood = false // 조건 여부

  //2. 함수를 만들어서 API 통신, 기타 작업

  //3. 랜더링
  return (
    <>
      <div>
        {/* 공통으로 쓰일거 같아서 전체 틀을 잡는 레이아웃을 생성하고 싶다.  */}
        <Container>
          <Hello
            //name={name}
            age={10}
            //height={160}
            isWoman={true}
            info={info} />

            {/* 조건에 따라 다르게 랜더링 할 에정 */}
            {isGood ? <Counter /> : <Bad />}
        </Container>
      </div>
    </>
  )
}

export default App;