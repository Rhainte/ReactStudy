import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md'; //MD곳 안에 아이콘을 가져온다.

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;// 여기서 &:hover는 위에 있는 태그가 호버했을 때를 써준 것 이다. (아이템을 호버하면 쓰레기통 아이콘이 나오는 부분)

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial; /*초기화 즉 위에 Remove의 값을 초기화한다.*/
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done && //상태가 done이면 아래의 색과 보더값을 갖는다. 그리고 && 는 if 대신에 조건문을 만드는 방법
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;// 체크 할 수 있는 원을 만드는 부분

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done && 
    css`
      color: #ced4da;
    `}
`;// 아이템이 done 상태 일 때 글자의 색을 바꾼다.

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle> {/*done &&는 done 상태 일 때만 <MdDone>을 출력하게 해준다. */}
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete /> {/*쓰레기통 아이콘 */}
      </Remove>
    </TodoItemBlock>
  );
}
/* MdDone은 체크 아이콘이다. */
export default TodoItem;