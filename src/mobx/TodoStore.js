import {observable, action } from 'mobx';

export default class TodoStore {
  
      /**
   * todoItem : {
   *   id : number,
   *   value : string,
   *   date : Date,
   * }
   */
  @observable todoList = [{
    check : true,
    id : 999999,
    value : "누르면 수정가능",
    itemUpdated : false,
    date : undefined,
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
   * @param id number
   */
  @action deleteTodoItem = id => {
    const deleltItem = this.todoList.filter(item => item.id !== id);
    this.todoList.replace(deleltItem);
  }
    /**
   * 아이템 체크 
   * @param id number
   */
  @action checkItem = id => {
    const checkItem = this.todoList.map(item => item.id === id ? {...item, check : !item.check} : item )
    this.todoList.replace(checkItem);
}
    /**
   * 아이템 수정 확인 
   * @param id number
   */
  @action currentChange = id => {
    const currentChangeItem = this.todoList.map(item => item.id === id ? {...item,  itemUpdated : !item.change} : item )
    this.todoList.replace(currentChangeItem);
  }
    /**
   * 아이템 수정 
   * @param itemUpdated 
   */
  @action changeItem = itemUpdated => {
    const changeTodoItem = this.todoList.map(item => item.id === itemUpdated.id ? 
      {...item,
        value : item.value, 
        itemUpdated : false} : item )
    this.todoList.replace(changeTodoItem);
  }
}
