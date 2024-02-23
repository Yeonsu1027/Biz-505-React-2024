import MemoItem from "./MemoItem";

import img from "../images/0001.jpg";
const MemoList = ({ memoList }) => {
  const viewList = memoList.map((item) => <MemoItem item={item} key={item.seq} />); // item 을 받아서 리턴하라
  return (
    <ul>
      <li>
        <img src={img} alt="" width="20px"></img>
        <span>설산에서 고행을</span>
      </li>
      <li>{viewList}</li>
    </ul>
  );
};

export default MemoList;
