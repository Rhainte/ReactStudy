import React from 'react';
import styled from 'styled-components';

const TodoTamplateBlock = styled.div`
  width: 512px;
  height: 768px;
  positon: relative;/*나중에 버튼의 기준 잡기 위해서*/
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px -2px rgba(0,0,0,.25);
  margin: 100px auto 50px;
  display:flex;
  flex-direction: column;

`;

function TodoTamplate({ children }) {
  return <TodoTamplateBlock>{children}</TodoTamplateBlock>
}
//children <- 이 안에 속한 모든 자식클래스들이 안에 들어간다
export default TodoTamplate;