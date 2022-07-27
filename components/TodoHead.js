import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px; /*내부패딩값 - 안쪽에 모양을 잡아준다.*/
  border-bottom: 1px solid #ccc; /*아래에 구분선을 만듬*/
  h1{
    margin: 0;
    font-size: 36px;
    color:#333;
  } /*년월*/
  .day{
    margin-top: 4px;
    color:#868e96;
    font-size: 18px;
  } /*요일*/
  .tasks-left{
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }/*할일 카운트*/
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2022년 07월 26일</h1>
      <div class="day">화요일</div>
      <div class="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;