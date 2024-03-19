const ScoreList = ({ scoreList }) => {
  const viewList = scoreList.map((item) => (
    <li key={`${(item.s_score, item.s_stnum)}`}>
      {`${item.s_stnum}의 ${item.s_subject} : ${item.s_score}`}
    </li>
  ));
  return (
    <>
      <h1>성적리스트</h1>
      <ul className="scul">{viewList}</ul>
    </>
  );
};
export default ScoreList;
