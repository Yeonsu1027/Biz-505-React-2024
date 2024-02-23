import img from "../images/0001.jpg";
const MemoList = () => {
  return (
    <ul>
      <li>
        <img src={img} alt="" width="20px"></img>
        <span>설산에서 고행을</span>
      </li>
      <li>
        <img src={img} alt="" width="20px"></img>
        <span>없는 사막이다 보이는</span>
      </li>
      <li>
        <img src={img} alt="" width="20px"></img>
        <span>하는 온갖 과실이</span>
      </li>
    </ul>
  );
};

export default MemoList;
