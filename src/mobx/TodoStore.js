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
    value : "TodoList입니다"
  }];
    /**
   * 투두아이템 추가
   * @param todoItem
   */
  @action addTodoItem = ({ id, value }) => {
    const newTodoItem = {
      id,
      value
    }
    this.todoList.push(newTodoItem)
  }

    /**
   * 투두아이템 삭제 
   * @param item number
   */
  @action deleteTodoItem = id => {
    const deleltItem = this.todoList.filter(item => item.id !== id);
    this.todoList.replace(deleltItem);
  }
}
