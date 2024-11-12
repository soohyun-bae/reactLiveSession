
const Container = (props) => {
  const style = {
    border: "2px solid red",
    padding: "16px"
  }

  return (
    <div style={style}>
      {/* props.children 중요!! -> 컴포넌트의 재사용성이 증가한다.  */}
      <div>{props.children}</div>
    </div>
  )
}

export default Container;