import React from 'react';

const CheckTodo = ({ todoItem, checkItem }) => {
    function checkClick(id){
        return function(event){
          return checkItem(id)
        }
    }
    return(
        <span onClick={checkClick(todoItem.id)} role="img" aria-label="checked">
               {todoItem.check ? "✅" : "☑"}
        </span>
    )
}

export default CheckTodo;