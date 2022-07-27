import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
`; //todolist 안에 내부패딩으로 모양을 잡는 부분

function TodoList(){
  return(
    <TodoListBlock>
      <TodoItem text="가계부 쓰기" done={true}/>
      <TodoItem text="동창회용 시계 대여하기" done={true}/>
      <TodoItem text="밀린 건물 월세 받기" done={false}/>
      <TodoItem text="흥민이랑 점심약속" done={false}/>
    </TodoListBlock>
  );
}

export default TodoList;