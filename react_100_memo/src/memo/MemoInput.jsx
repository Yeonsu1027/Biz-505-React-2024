const MemoInput = ({ memoItem, setMemoItem, memoInsert }) => {
  const onInsertHandler = () => {
    memoInsert();
    setMemoItem("");
  };
  const onChangeHander = (e) => {
    const text = e.target.value;
    setMemoItem(text);
  };

  return (
    <form className="input">
      <input className="tosubject" type="text" placeholder="제목을 입력하세요" name="toSubject" value={memoItem} onChange={onChangeHander} />
      <input class="tomemo" type="text" placeholder="메모를 입력하세요" name="toMemo" />
      <input type="file" name="toFile" />
      <input type="button" value="저장" class="btn_save" onClick={onInsertHandler} />
    </form>
  );
};

export default MemoInput;
