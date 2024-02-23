const MemoInput = () => {
  return (
    <form className="input">
      <input className="tosubject" type="text" placeholder="제목을 입력하세요" name="toSubject" />
      <input class="tomemo" type="text" placeholder="메모를 입력하세요" name="toMemo" />
      <input type="file" name="toFile" />
      <input type="button" value="저장" class="btn_save" />
    </form>
  );
};

export default MemoInput;
