// 1 memo, setMemo 받기
const MemoInput = ({ memo, setMemo, memoInsert }) => {
  // 1
  const onChangeHandler = (e) => {
    const target = e.target;
    const text = target.value;
    // 5
    const name = target.name;
    /*
    기존의 memo 객체를 새롭게 복제하고
    [name] 속성에 저장된 문자열을 Key 로 하여
    input tag 에 입력된 값을 새로운 객체에 포함하여라
    m_subject 를 input tag 입력된 문자열로 대체하여 포함시켜라
    */
   // text 는 클릭한 곳의 텍스트! 즉, 거기의 name에 그클릭한 곳의 텍스트를 넣는다
    setMemo({ ...memo, [name]: text }); // 5: 원래 m_subject 였는데 [name] 로변경
    // 이런뜻임 이걸 한줄로 쓴것
    // if (name === "m_subject") {
    //   setMemo({ ...memo, m_subject: text });
    // } else if (name === "m_memo") {
    //   setMemo({ ...memo, m_memo: text });
    // }
  };
  const onClickInsert = () => {
    // memoInsert() : 이게 메인에 있는거고 원래의 메모리스트에 새메모추가해서 다시 리스트로만들고 바꾸고(setMemoList())
    // 날짜, 시간 초기화 하는 (setMemo()) 이 들어있음
    memoInsert(); // 할아버지 가지고있는 용돈을 출력해주세요

  };
  // 5 input 에 name 붙임
  return (
    <>
      <input type="text" placeholder="메모제목" value={memo.m_subject} onChange={onChangeHandler} name="m_subject" />
      <input type="text" placeholder="메모를 입력하세요" value={memo.m_memo} onChange={onChangeHandler} name="m_memo" />
      <input type="file" />
      <input type="button" value="추가" onClick={onClickInsert} />
      <input type="hidden" value="삭제" />
      <p>{memo.m_subject}</p>
    </>
  );
  // 1 p tag 추가
};

export default MemoInput;
