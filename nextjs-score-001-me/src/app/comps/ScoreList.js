import css from "@/css/scorelist.module.css";

const ScoreList = ({ scoreList }) => {
  // let scoreTotal = 0;
  const viewList = scoreList.map((item, index) => (
    // // 맵 내에서 합계
    // scoreTotal += item.s_score;
    <li key={index}>{`${item.s_subject} : ${item.s_score}`}</li>
  ));
  return (
    <>
      <h1>성적정보</h1>
      <ul className="scul">{viewList}</ul>
    </>
  );
};

{
  /* <li>
<strong>합계</strong>
<span>{scoreTotal}</span>
</li>
<li>
<strong>평균</strong>
<span>{scoreTotal / scoreList.length}</span>
</li> */
}
export default ScoreList;
