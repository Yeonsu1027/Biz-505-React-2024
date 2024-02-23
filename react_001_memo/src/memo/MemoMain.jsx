import "../css/index.css";
import "../css/main.css";
import "../css/home.css";
import MemoList from "./MemoList";
import MemoNewInput from "./MemoNewInput";
import MemoInput from "./MemoInput";

const MemoMain = () => {
  return (
    <>
      <header className="App-header">
        <h3>오늘은 내 생의 가장 젊은날</h3>
      </header>
      <section className="main">
        <div className="aside">
          <MemoNewInput today="2024-02-23" totime="09:25:00"></MemoNewInput>
          <MemoList></MemoList>
        </div>
        <div className="aside">
          <MemoInput></MemoInput>
        </div>
      </section>
      <footer>
        <address>CopyRight &copy; rito1205@naver.com</address>
      </footer>
    </>
  );
};
export default MemoMain;
