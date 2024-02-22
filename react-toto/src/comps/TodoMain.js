import { useState } from "react";
import TodoInput from "./TodoInput";
import "../css/Todo.css";
import TodoList from "./TodoList";

const TodoMain = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(["정보처리기사 필기", "React 학습", "JS 학습", "월요일 저녁", "이번주는 매우 추워"]);

  return ( // 형제끼리 주고받을 수 없으니 부모인 main에서 자식들에게..
    <div className="todo">
      <TodoInput todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default TodoMain;
