import React, { useState } from 'react';
import styled from "styled-components";

const ChangeButton = styled.button`
border-color: transparent;
border: none;
background-color: transparent;
&:hover {
    color: red;
  }
`
const CurrentChange = ({ todoItem, currentChange, changeItem}) => {
    function changeCilck(id){
        return function(event){
          return currentChange(id)
        }
    }

    const [changeInput, setChangeInput] = useState(todoItem.value);

    function onSubmitHandler(event) {
        event.preventDefault();
        const updateTodoItem = {
            id: todoItem.id, 
            value: changeInput,
            change: false
        }
        changeItem(updateTodoItem)
        setChangeInput(changeInput)
    }

    const onChange = event => {
        const { target: { value } } = event;
        setChangeInput(value)
    }
    //span -> 버튼태그 
    //update 속성명이 너무 x  ->  이부분은 mobx 안쓰고 
    //value 초기값으로 value값(todoitme) 
    //프로젝트 명 정하기
    //ui어떻게 하면 좋겠냐 물어보기 
    //server -> 감을 못잡겠음 어떤의민지 local storge? // loading? 
    //server -> api? 사이트 ? node 찾아봄 // 애니메이션 
    //mobx를 쓸곳과 안쓸곳 구분하기
    //훅을 따로 만들어서 내가 원하는식의 인풋 함수?
    //파일정리하기 -> 프레젠테이션 
    //파일 다 만들어서 index 파일 추가? 
    //유닛테스트 ㅇㅈ? 필수 ㅇㅋ 
        return ( 
            <>
                    {todoItem.change ? 
                    <form onSubmit={onSubmitHandler}> 
                        <input onChange={onChange} value={changeInput}/>
                    </form> :  
                    <ChangeButton onClick={changeCilck(todoItem.id)}> {changeInput} </ChangeButton>}
            </>
        )
    }

export default CurrentChange;