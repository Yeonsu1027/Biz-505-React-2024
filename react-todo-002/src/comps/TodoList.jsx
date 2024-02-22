import TodoItem from "./TodoItem";

const TodoList = ({ todoList, todoComplete, todoDelete }) => {
  const viewList = todoList.map((item) => 
  <TodoItem item={item}
   key={item.seq} 
   todoComplete={todoComplete}
    todoDelete={todoDelete} />); // item 을 받아서 리턴하라

  return <>{viewList}</>;
};

export default TodoList;
