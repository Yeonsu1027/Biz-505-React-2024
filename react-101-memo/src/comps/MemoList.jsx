//3
import MemoItem from "./MemoItem";

// 2 메모리스트 받고
const MemoList = ({ memoList }) => {
  const viewList = memoList.map((memo) => {
    return <MemoItem memo={memo} />;
  });
  return <ul>{viewList}</ul>;
};

export default MemoList;
