import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/TodoMain.css";
import { useState, useEffect } from "react";
import uuid from "react-uuid";

const TodoMain = () => {
  const [todoItem, setTodoItem] = useState("");
  // useState : 화면을 새로 열었을때
  const [todoList, setTodoList] = useState(() => {
    // 로컬리스트에 todolist가 있으면 todolist 이름으로 세팅하고 없으면 빈배열로 만들어라
    return localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : [];
  });

  // 누구나 부라우저에 접근하면 열 수 있으므로 비번등은 넣지않는다
  const saveStorage = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("KOREA", "대한민국"); //(라는이름으로, 라는변수저장)
  };

  // 어떤 특정한 데이터가 변경되었을때 실행할 event 를 설정
  // todoList 에 변화가 생기면(효과가발생하면) saveStorage라는 함수를 실행해라
  useEffect(saveStorage, [todoList]);

  const todoInsert = () => {
    const newTodoList = [...todoList, { seq: uuid(), todo: todoItem, coplete: false }];
    setTodoList(newTodoList);
  };

  const todoComplete = (seq) => {
    // 배열요소에 변화를 주기위한 함수 map
    const result = todoList.map((item) => {
      // todoList 중에 선택한 item 이면
      if (item.seq === seq) {
        return { ...item, complete: !item.complete };
        // item json 을 펼쳐서 작성한후 complete 라는 속성이 있으면 반대로해서 저장하라
      }
      return item; // 아니면 item 만 리턴하라
    });
    setTodoList([...result]); // result를 펼쳐서..
  };

  const todoDelete = (seq) => {
    const result = todoList.filter((item) => {
      return item.seq !== seq; // return 값이 false 면 뺀다 /선택한게 아닌것들만 배열로만든다
    });
    setTodoList([...result]); // 다시세팅해주기
  };

  return (
    <div className="todoMain">
      <header className="todoHeader">
        <h1>지금 할일!!</h1>
      </header>
      <TodoInput todoItem={todoItem} setTodoItem={setTodoItem} todoInsert={todoInsert} />
      <TodoList todoList={todoList} todoComplete={todoComplete} todoDelete={todoDelete} />
    </div>
  );
};

export default TodoMain;
