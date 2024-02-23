import "../css/index.css";
import "../css/main.css";
import "../css/home.css";
import MemoList from "./MemoList";
import MemoNewInput from "./MemoNewInput";
import MemoInput from "./MemoInput";
import { useState } from "react"; //, useEffect
import uuid from "react-uuid";

const MemoMain = () => {
  const [memoItem, setMemoItem] = useState("");
  // useState : 화면을 새로 열었을때
  const [memoList, setMemoList] = useState(() => {
    return localStorage.getItem("memoList") ? JSON.parse(localStorage.getItem("memoList")) : [];
  });

  const memoInsert = () => {
    const newMemoList = [...memoList, { seq: uuid(), memo: memoItem }];
    setMemoList(newMemoList);
  };
  return (
    <>
      <header className="App-header">
        <h3>오늘은 내 생의 가장 젊은날</h3>
      </header>
      <section className="main">
        <div className="aside">
          <MemoNewInput today="2024-02-23" totime="09:25:00" memoInsert={memoInsert}></MemoNewInput>
          <MemoList></MemoList>
        </div>
        <div className="aside">
          <MemoInput memoItem={memoItem} setMemoItem={setMemoItem} memoInsert={memoInsert}></MemoInput>
        </div>
      </section>
      <footer>
        <address>CopyRight &copy; rito1205@naver.com</address>
      </footer>
    </>
  );
};
export default MemoMain;
