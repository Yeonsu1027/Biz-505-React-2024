import moment from "moment";
// 1 memo setmemo 추가, value 추가(시간,날짜 나옴)
// 1 현재 시간날짜로 셋팅됨
const MemoDate = ({ memo, setMemo }) => {
  //1
  const onClickNew = () => {
    const newMemo = { ...memo, m_date: moment().format("YYYY-MM-DD"), m_time: moment().format("HH:mm:ss") };
    setMemo(newMemo); // 변경된걸 셋메뉴에 세팅해주기
  };

  // 5
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setMemo({ ...memo, [name]: value }); // 구조분해해서 name과 value를 한줄로 꺼낸다
  };

  // 1 밸류추가, 클릭이벤트추가
  //5 time,date 도 핸들러추가
  return (
    <div className="memo_date">
      <input type="date" value={memo.m_date} name="m_date" onChange={onChangeHandler} />
      <input type="time" value={memo.m_time} name="m_time" onChange={onChangeHandler} />
      <input type="button" value="새로작성" onClick={onClickNew} />
    </div>
  );
};
export default MemoDate;
