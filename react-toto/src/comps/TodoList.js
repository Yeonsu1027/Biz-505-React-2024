const TodoList = ({ todoList }) => {
  {
    /** 형제끼리 정보를 주고받을 수 없어서 리스트를 추가하려면 부모한테 정보를 주고 다시추가하는 코드가 필요하다
     *
     *
     * 이 아래코드는 화면에 리스트를 그려주는 역할을 한다
     */
  }
  todoList.forEach((item) => {});
  const todoItemView = todoList.map((item) => {
    return <div>{item}</div>;
  });

  return <div className="list">{todoItemView}</div>;
};
export default TodoList;
