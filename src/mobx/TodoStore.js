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
<<<<<<< HEAD
    value : "TodoList입니다",
    change : false
=======
    value : "TodoList입니다"
>>>>>>> 0eb3d49253e81e84c59d4a27aa1a98a41681387a
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

  @action checkItem = id => {
    const checkItem = this.todoList.map(item => item.id === id ? {...item, check : !item.check} : item )
    this.todoList.replace(checkItem);
}

  @action currentChange = id => {
    const currentChangeItem = this.todoList.map(item => item.id === id ? {...item,  change : !item.change} : item )
    this.todoList.replace(currentChangeItem);
  }

  @action changeItem = change => {
    const changeTodoItem = this.todoList.map(item => item.id === change.id ? 
      {...item,
        value : item.value, 
        change : false} : item )
    this.todoList.replace(changeTodoItem);
  }
}
