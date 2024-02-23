const MemoNewInput = (props) => {
  return (
    <form className="date">
      <input type="text" className="todate" value={props.today} name="todate" />
      <input type="text" className="totime" value={props.totime} name="totime" />
      <input type="button" className="btn_new" value="새로작성" />
    </form>
  );
};

export default MemoNewInput;
