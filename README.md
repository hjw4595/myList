react todoList 

1. 컴포넌트 분할 
 -화면 구성대로 분할 했음 
 -input / list / listItem
2. react hooks 

3. state management

https://ko.reactjs.org/docs/reconciliation.html#recursing-on-children
*li key 

Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다.
key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.

-index를 키로 사용하는걸 권장하지 않음 
-변하는 key(Math.random()으로 생성된 값 등)를 사용하면 많은 컴포넌트 인스턴스와 DOM 노드를 불필요하게
 재생성하여 성능이 나빠지거나 자식 컴포넌트의 state가 유실될 수 있습니다.