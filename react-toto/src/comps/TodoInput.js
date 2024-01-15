// import { useState } from "react";
// TodoMain 에서 보낸 todo, setTodo, setTodoList props(properties)로 받기 (매개변수로받기)
const TodoInput = ({ todo, setTodo, todoList, setTodoList }) => {
  //   const [todo, settodo] = useState("");
  const todoOnChangeHandler = (event) => {
    const target = event.target;
    setTodo(target.value);
  };

  // add todo 버튼을 클릭하면 ... 추가된다
  // ------------------------------------------------
  // "..." 은 새로운 배열을 하나 만들어라 라는의미
  // 기존에 있는 todoList를 펼쳐서 배열에 넣어라, 그리고 끝에 todo 를 추가하라
  // todo 리스트는 변경이 불가하므로 새로만들어서 변경하는 것. (원래거 복사하고, 입력한 것을 추가)
  const addBtnClickHandler = () => {
    setTodoList([...todoList, todo]);
  };

  return (
    <div className="input">
      <input placeholder="TO DO..." value={todo} onChange={todoOnChangeHandler} />
      {/* todo state 에 저장된 값이
      2글자 이상일때만 버튼을 클릭할 수 있도록하라*/}
      <button id="btn_add" onClick={addBtnClickHandler} disabled={todo.length < 2}>
        추가
      </button>
    </div>
  );
};
export default TodoInput;
