import { useState } from "react";
import "../css/TodoInput.css";

/**
 * 현재 button 이 disabled 상태이다
 * input box에 문자열이 입력되면
 * 입력된 문자열 개수를 계산하여 3글자 이상이 되면
 * button 의 disabled 를 해제하여 click 이 가능한 "상태"로 만들고 싶다
 *
 * 표준 JS 와 달리 React 에서는 "상태"를 관리하는 방법이 다르다
 */

// props로 전달 (부모로부터 받아서쓴다)
// 이름으로 데이터를 전달하므로 반드시 메인에서 사용한 것과 동일해야함
const TodoInput = ({ todoItem, setTodoItem, todoInsert }) => {
  // 지금부터 todoItem 이라는 상태변수가 시작(선언) 된다
  // == 상태변수 선언의 다른 표현

  // 상태변수는 Read Only 이다!! : const 이니 변경불가
  //   const [todoItem, setTodoItem] = useState("");

  // 시나리오가 변경되어 todoItem 상태를 TodoMain 으로 보내고
  // TodoMain 으로 부터 props 로 전달받아 사용하기

  // 추가 버튼을 클릭했을때 작동하는 event 핸들러
  const onInsertHandler = () => {
    // 추가 버튼이 클릭되면 TodoMain 에서 보내준(전달한) todoInsert() 함수를 호출하라
    todoInsert(); //부모한테받은 함수호출    : 함수가 함수 호출
  };

  // input box 에 키보드로 문자열을 입력하면 작동되는 event 핸들러
  const onChangeHander = (e) => {
    // 키보드로 입력한 한개의 문자열 getter
    const text = e.target.value; // 아래의 value와는 다른 value
    // todoItem 상태변수의 상태를 변경하는 함수
    setTodoItem(text); //>>>todoItem<<< 에의하여 선언된 곳 모두 >동시에< 변경된다
  };

  // input box의 value 속성에 상태변수 연결 => 키보드로 입력한값을 가로채서
  // 상태변수의 값을 변경한다
  return (
    <div className="todoInput">
      <input placeholder="TODO" value={todoItem} onChange={onChangeHander} />
      <button disabled={todoItem.length < 3} onClick={onInsertHandler}>
        추가
      </button>
    </div>
  );
};

export default TodoInput;
