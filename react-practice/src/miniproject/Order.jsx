// 주문 컴포넌트
import React, { useState } from 'react';
import OrderHistory from './OrderHistory';

//상품의 리스트 초기값 관리
const productInitData = [
  {
    id:1,
    name:'발난로',
    price:10_000, // _ : 코드상에서 구분하기 위해서 사용 렌더링할 때는 따로 해줘야함
    quantity: 10,
  },
  {
    id:2,
    name:'손난로',
    price:30_000,
    quantity: 30,
  },
  {
    id:3,
    name:'옛날식 난로',
    price:100_000,
    quantity: 5,
  },
  {
    id:4,
    name:'전기난로',
    price:500_000,
    quantity: 3,
  },
]

const Order = () => {
  const [products, setProducts] = useState(productInitData)

  // 주문 내역 리스트
  const [orders, setOrders] = useState([])


  // 재고관리하는 함수
  const decrementQuantity = (product) => {
    setProducts(
      products.map((p) => 
        p.id === product.id ? {...p, quantity:p.quantity-1} : p
      )
    )

  }

  // 주문하기
  const handleOrder = (product) => {
    if(product.quantity <= 0){
      alert("상품의 재고가 없습니다.")
      return 
    }

    // 재고관리 함수 호출
    decrementQuantity(product)

    // 주문 내역 추가
    setOrders([
      ...orders,
      {
        id:Math.random(),
        products:product,
        quantity: 1,
        address: "서울",
        shippingType:0,
      }
    ])
  }

  return (
    <div>
      <h1>상품 리스트</h1>
      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>재고량</th>
            <th>주문</th>
            <th>기능</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}원</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => handleOrder(product)}>주문하기</button>
              </td>
              <td>
                <button onClick={() => {}}>
                  장바구니담기
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <OrderHistory orders={orders} setOrders={setOrders}/>
    </div>
  );
};

export default Order;