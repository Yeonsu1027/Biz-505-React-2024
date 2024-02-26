//3
import MemoItem from "./MemoItem";

// 2 메모리스트 받고
const MemoList = ({ memoList }) => {
  const viewList = memoList.map((memo) => { // 메모리스트에 든 걸 펼치고, 그하나하나를 메모라고 한다
    return <MemoItem memo={memo} />; // 하나의 메모가
  });
  return <ul>{viewList}</ul>; // 하나씩 담겨서 전부 보여지게
};
export default MemoList;
