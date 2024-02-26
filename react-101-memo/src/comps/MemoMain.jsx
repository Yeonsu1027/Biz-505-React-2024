import styles from "../css/MemoMain.module.css";
import "../css/Memo.css";
import MemoMainLeft from "./MemoMainLeft";
import MemoMainRight from "./MemoMainRight";

// MemoLeft, MemoRight 에서 import 할 컴포넌트를 Main 에서 import 하고
// MemoLeft, MemoRight 의 children 으로 보내서 컴포넌트를 합성하기
import MemoDate from "./MemoDate";
import MemoList from "./MemoList";
// 3 item import
// import MemoItem from "./MemoItem";

import MemoInput from "./MemoInput";
import { useState } from "react"; // 상태관리 함수

// 1
// 추가
import moment from "moment";

const MemoMain = () => {
  //1
  // 실제입력하고 리스트 추가하기   // useState 함수를 통해 memo라는 상태와
  //                                  그 상태를 변경할 수 있는 setMemo라는 함수를 선언
  const [memo, setMemo] = useState({
    // 메모 1개를 처리할 state
    m_seq: 0,
    // // 7 칼럼생성
    // m_id: "UUID",
    m_author: "rito1205@naver.com",
    m_date: moment().format("YYYY-MM-DD"),
    m_time: moment().format("HH:mm:ss"),
    m_subject: "",
    m_memo: "",
    m_image: "",
  });

  // 1
  // 메모 리스트를 처리할 state
  const [memoList, setMemoList] = useState([]); //메모들이 들어갈 빈배열 생성, 이 비어있는 배열을 리스트에 줌

  // 2
  const memoInsert = () => {
    // 6 새로작성할때 시간바뀌게 memo 였다가 추가
    const newMemoList = [...memoList, { ...memo, m_date: moment().format("YYYY-MM-DD"), m_time: moment().format("HH:mm:ss") }]; // 새로운리스트생성 (원래리스트 + 새메모)
    // 4 newMemoList -> [...newMemoList]
    setMemoList([...newMemoList]); // 교체(추가)하라
    //4
    // 입력이 끝난 후 데이터 초기화 하기
    setMemo({ ...memo, m_date: moment().format("YYYY-MM-DD"), m_time: moment().format("HH:mm:ss"), m_subject: "", m_memo: "", m_image: "" });
  };

  // 이곳에서 주는 이름은 각 jsx 의 받는 이름과 같아야함!!!
  return (
    <div className={styles.main}>
      <div className={styles.aside}>
        <MemoMainLeft>
          <MemoDate memo={memo} setMemo={setMemo} />
          <MemoList memoList={memoList} />
        </MemoMainLeft>
      </div>
      <div className={styles.aside}>
        <MemoMainRight>
          <MemoInput
            memo={memo}
            setMemo={setMemo}
            memoInsert={memoInsert}
          />
        </MemoMainRight>
      </div>
    </div>
  );
  // 1 Memoimput 에 메모,셋메모주기
  // 2 memoinput 에 memoinsert 주기
};

export default MemoMain;
