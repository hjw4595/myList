import {observable, action } from 'mobx';

export default class TodoStore {
  
      /**
   * todoItem : {
   *   id : number,
   *   value : string
   * }
   */
  @observable todoList = [{
    check : true,
    id : 999999,
    value : "TodoList입니다",
    change : false,
    date : true,
  }];
    /**
   * 투두아이템 추가
   * @param todoItemo
   */
  @action addTodoItem = ({ id, value, date}) => {
    const newTodoItem = {
      id,
      value,
      date
    }
    this.todoList.push(newTodoItem)
  }

    /**
   * 아이템 삭제 
   * @param item number
   */
  @action deleteTodoItem = id => {
    const deleltItem = this.todoList.filter(item => item.id !== id);
    this.todoList.replace(deleltItem);
  }
    /**
   * 아이템 체크 
   * @param item number
   */
  @action checkItem = id => {
    const checkItem = this.todoList.map(item => item.id === id ? {...item, check : !item.check} : item )
    this.todoList.replace(checkItem);
}
    /**
   * 아이템 수정 확인 
   * @param item number
   */
  @action currentChange = id => {
    const currentChangeItem = this.todoList.map(item => item.id === id ? {...item,  change : !item.change} : item )
    this.todoList.replace(currentChangeItem);
  }
    /**
   * 아이템 수정 
   * @param item number
   */
  @action changeItem = change => {
    const changeTodoItem = this.todoList.map(item => item.id === change.id ? 
      {...item,
        value : item.value, 
        change : false} : item )
    this.todoList.replace(changeTodoItem);
  }
}
